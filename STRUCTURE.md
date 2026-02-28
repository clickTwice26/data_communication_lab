# Project Structure Guide

This document explains the organization and purpose of each directory in the project.

## Directory Overview

### `/src/actions`
Server Actions for data mutations and server-side operations. These are marked with `'use server'` and can be called directly from Client Components.

**Files:**
- `users.ts` - User CRUD operations
- `posts.ts` - Post CRUD operations

**Usage:**
```typescript
import { createUser } from '@/actions/users';
const result = await createUser({ email, name });
```

### `/src/app`
Next.js App Router directory. Contains all routes, layouts, and page components.

**Structure:**
- `api/` - API route handlers
- `users/` - User-related pages
- `posts/` - Post-related pages
- `layout.tsx` - Root layout with header/footer
- `page.tsx` - Homepage
- `globals.css` - Global styles and Tailwind directives

### `/src/components`
Reusable React components.

**Structure:**
- `ui/` - shadcn/ui components (Button, Card, Input, etc.)
- `page-header.tsx` - Animated page header component
- `animated-section.tsx` - Wrapper for scroll animations
- `site-header.tsx` - Navigation header
- `site-footer.tsx` - Footer component

### `/src/config`
Configuration files and constants.

**Files:**
- `site.ts` - Site-wide configuration (name, description, links)

### `/src/hooks`
Custom React hooks for reusable logic.

**Files:**
- `use-mounted.ts` - Hook to prevent hydration mismatches
- `index.ts` - Export all hooks

### `/src/lib`
Utility libraries and helper functions.

**Files:**
- `db.ts` - Prisma client singleton
- `utils.ts` - Utility functions (includes shadcn's `cn` helper)

### `/src/styles`
Design system and animation definitions.

**Files:**
- `typography.ts` - Typography scale and font size guidelines
- `animations.ts` - Framer Motion animation variants

**Typography Usage:**
```typescript
import { typography } from '@/styles/typography';
<h1 className={typography.heading.h1}>Title</h1>
```

**Animation Usage:**
```typescript
import { fadeInUp } from '@/styles/animations';
<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

### `/src/types`
TypeScript type definitions.

**Files:**
- `models.ts` - Database model types (extended from Prisma)
- `api.ts` - API request/response types
- `index.ts` - Re-exports all types

## Design Patterns

### Server Components (Default)
All components in the app directory are Server Components by default. They can fetch data directly:

```typescript
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

### Client Components
Use `'use client'` directive for interactive components:

```typescript
'use client';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Server Actions
Server-side mutations that can be called from Client Components:

```typescript
'use server';

export async function createItem(data) {
  await prisma.item.create({ data });
  revalidatePath('/items');
}
```

### API Routes
RESTful API endpoints:

```typescript
export async function GET(request: Request) {
  const data = await fetchData();
  return NextResponse.json({ success: true, data });
}
```

## Best Practices

### 1. Typography
Always use the typography system for consistent font sizes:
```typescript
// ✅ Good
<h1 className={typography.heading.h1}>Title</h1>

// ❌ Bad
<h1 className="text-4xl font-bold">Title</h1>
```

### 2. Animations
Use predefined animation variants:
```typescript
// ✅ Good
<motion.div variants={fadeInUp}>Content</motion.div>

// ❌ Bad
<motion.div animate={{ opacity: 1, y: 0 }}>Content</motion.div>
```

### 3. Database Access
Always use the Prisma client singleton:
```typescript
// ✅ Good
import prisma from '@/lib/db';

// ❌ Bad
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

### 4. Type Safety
Use Prisma-generated types and custom types:
```typescript
import type { User, Post } from '@prisma/client';
import type { ApiResponse } from '@/types';
```

### 5. Component Organization
- Small, focused components
- Separate concerns (logic, presentation)
- Use composition over inheritance

## Adding New Features

### Adding a New Model

1. Update `prisma/schema.prisma`:
```prisma
model NewModel {
  id        String   @id @default(cuid())
  field     String
  createdAt DateTime @default(now())
}
```

2. Generate migration:
```bash
npx prisma migrate dev --name add_new_model
```

3. Create Server Actions in `src/actions/new-model.ts`

4. Create API routes in `src/app/api/new-model/route.ts`

5. Create page in `src/app/new-model/page.tsx`

### Adding a New Component

1. Create component in `src/components/`
2. Use typography and animation systems
3. Make it reusable and type-safe
4. Export from index if needed

### Adding a New Page

1. Create directory in `src/app/`
2. Add `page.tsx`
3. Use PageHeader component
4. Implement animations
5. Follow typography guidelines

## Environment Variables

All environment variables should be defined in `.env` and documented in `.env.example`.

Current variables:
- `DATABASE_URL` - SQLite database connection string
- `NODE_ENV` - Environment (development/production)

## Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma generate` - Generate Prisma Client

## File Naming Conventions

- Components: `kebab-case.tsx` (e.g., `page-header.tsx`)
- Pages: `page.tsx`
- Layouts: `layout.tsx`
- API Routes: `route.ts`
- Actions: `kebab-case.ts` (e.g., `users.ts`)
- Types: `kebab-case.ts` (e.g., `api.ts`)

## Import Aliases

The project uses `@/*` alias for clean imports:

```typescript
// ✅ Good
import { Button } from '@/components/ui/button';
import { typography } from '@/styles/typography';

// ❌ Bad
import { Button } from '../../components/ui/button';
import { typography } from '../../../styles/typography';
```
