'use server';

import prisma from '@/lib/db';
import {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  isValidEmail,
  validatePassword,
} from '@/lib/auth';
import { setAuthCookie, removeAuthCookie, getAuthToken } from '@/lib/auth-cookie';
import { revalidatePath } from 'next/cache';

const db = prisma;

export interface AuthResponse {
  success: boolean;
  message: string;
  userId?: string;
  token?: string;
}

/**
 * Sign up a new user
 */
export async function signup(
  email: string,
  password: string,
  name: string
): Promise<AuthResponse> {
  try {
    // Validate email
    if (!isValidEmail(email)) {
      return { success: false, message: 'Invalid email format' };
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      return {
        success: false,
        message: `Invalid password: ${passwordValidation.errors.join(', ')}`,
      };
    }

    // Validate name
    if (!name || name.trim().length < 2) {
      return { success: false, message: 'Name must be at least 2 characters long' };
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, message: 'Email already registered' };
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name.trim(),
      },
    });

    // Generate token
    const token = generateToken(user.id);

    // Set cookie
    await setAuthCookie(token);

    revalidatePath('/');
    revalidatePath('/signup');
    revalidatePath('/dashboard');

    return {
      success: true,
      message: 'Account created successfully',
      userId: user.id,
      token,
    };
  } catch (error) {
    console.error('Signup error:', error);
    return { success: false, message: 'Failed to create account' };
  }
}

/**
 * Log in a user
 */
export async function login(email: string, password: string): Promise<AuthResponse> {
  try {
    // Validate email
    if (!isValidEmail(email)) {
      return { success: false, message: 'Invalid email format' };
    }

    // Find user
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Verify password
    const passwordMatch = await verifyPassword(password, user.password);

    if (!passwordMatch) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Generate token
    const token = generateToken(user.id);

    // Set cookie
    await setAuthCookie(token);

    revalidatePath('/');
    revalidatePath('/login');
    revalidatePath('/dashboard');

    return {
      success: true,
      message: 'Logged in successfully',
      userId: user.id,
      token,
    };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Failed to log in' };
  }
}

/**
 * Log out user
 */
export async function logout(): Promise<AuthResponse> {
  try {
    await removeAuthCookie();
    revalidatePath('/');
    revalidatePath('/login');
    revalidatePath('/dashboard');

    return { success: true, message: 'Logged out successfully' };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, message: 'Failed to log out' };
  }
}

/**
 * Get current user
 */
export async function getCurrentUser() {
  try {
    const token = await getAuthToken();

    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return null;
    }

    const user = await db.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true, createdAt: true },
    });

    return user;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
}

/**
 * Check if user is authenticated
 */
export async function isUserAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return !!user;
}
