import { User, Post } from '@prisma/client';

// Re-export Prisma types
export type { User, Post };

// Extended types
export type UserWithPosts = User & {
  posts: Post[];
};

export type PostWithAuthor = Post & {
  author: User;
};
