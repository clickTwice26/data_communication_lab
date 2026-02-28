'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import type { User, Post } from '@prisma/client';
import { hashPassword } from '@/lib/auth';

/**
 * Server Actions for User operations
 */

type UserWithPosts = User & { posts: Post[] };
type SafeUser = Omit<User, 'password'>;
type SafeUserWithPosts = Omit<UserWithPosts, 'password'>;

export async function getUsers(): Promise<SafeUser[]> {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

export async function getUserById(id: string): Promise<SafeUserWithPosts | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        posts: true,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
}

export async function createUser(data: { email: string; name?: string; password: string }) {
  try {
    const passwordHash = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: passwordHash,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    revalidatePath('/users');
    return { success: true, data: user };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error: 'Failed to create user' };
  }
}

export async function updateUser(id: string, data: { email?: string; name?: string }) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    revalidatePath('/users');
    revalidatePath(`/users/${id}`);
    return { success: true, data: user };
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, error: 'Failed to update user' };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    });
    revalidatePath('/users');
    return { success: true };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, error: 'Failed to delete user' };
  }
}
