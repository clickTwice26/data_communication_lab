'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import type { Post, User } from '@prisma/client';

/**
 * Server Actions for Post operations
 */

type PostWithAuthor = Post & { author: User };
type SafeAuthor = Omit<User, 'password'>;
type SafePostWithAuthor = Omit<PostWithAuthor, 'author'> & { author: SafeAuthor };

export async function getPosts(): Promise<SafePostWithAuthor[]> {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
}

export async function getPostById(id: string): Promise<SafePostWithAuthor | null> {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Failed to fetch post');
  }
}

export async function createPost(data: {
  title: string;
  content?: string;
  authorId: string;
}) {
  try {
    const post = await prisma.post.create({
      data,
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
    revalidatePath('/posts');
    return { success: true, data: post };
  } catch (error) {
    console.error('Error creating post:', error);
    return { success: false, error: 'Failed to create post' };
  }
}

export async function updatePost(
  id: string,
  data: {
    title?: string;
    content?: string;
    published?: boolean;
  }
) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data,
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
    revalidatePath('/posts');
    revalidatePath(`/posts/${id}`);
    return { success: true, data: post };
  } catch (error) {
    console.error('Error updating post:', error);
    return { success: false, error: 'Failed to update post' };
  }
}

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({
      where: { id },
    });
    revalidatePath('/posts');
    return { success: true };
  } catch (error) {
    console.error('Error deleting post:', error);
    return { success: false, error: 'Failed to delete post' };
  }
}
