'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import type { User, Post } from '@prisma/client';

/**
 * Server Actions for User operations
 */

type UserWithPosts = User & { posts: Post[] };

export async function getUsers(): Promise<User[]> {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

export async function getUserById(id: string): Promise<UserWithPosts | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
}

export async function createUser(data: { email: string; name?: string }) {
  try {
    const user = await prisma.user.create({
      data,
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
