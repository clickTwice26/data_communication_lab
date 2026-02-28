# DC Lab - Professional Next.js Starter

A production-ready Next.js application with modern tools and industry best practices.

## 🚀 Features

- **Next.js 15** - Latest version with App Router and Server Components
- **TypeScript** - Fully typed codebase for better DX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Framer Motion** - Production-ready animations
- **Prisma** - Type-safe ORM with SQLite
- **Design System** - Consistent typography and spacing

## 📁 Project Structure

```
dc_lab/
├── prisma/
│   ├── migrations/         # Database migrations
│   └── schema.prisma       # Database schema
├── public/                 # Static files
├── src/
│   ├── actions/           # Server Actions
│   │   ├── users.ts
│   │   └── posts.ts
│   ├── app/               # Next.js App Router
│   │   ├── api/          # API Routes
│   │   │   ├── users/
│   │   │   └── posts/
│   │   ├── users/        # User pages
│   │   ├── posts/        # Post pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── page-header.tsx
│   │   ├── animated-section.tsx
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   ├── config/            # Configuration files
│   │   └── site.ts
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mounted.ts
│   │   └── index.ts
│   ├── lib/               # Utility libraries
│   │   ├── db.ts         # Prisma client
│   │   └── utils.ts      # Helper functions
│   ├── styles/            # Design system
│   │   ├── typography.ts  # Font size guidelines
│   │   └── animations.ts  # Framer Motion variants
│   └── types/             # TypeScript types
│       ├── models.ts
│       ├── api.ts
│       └── index.ts
├── .env                   # Environment variables
├── prisma.config.ts       # Prisma configuration
└── package.json
```

## 🎨 Design System

### Typography

The project includes a comprehensive typography system for consistent font sizes:

```typescript
import { typography } from '@/styles/typography';

// Display sizes (hero sections)
<h1 className={typography.display.xl}>Hero Title</h1>

// Headings
<h1 className={typography.heading.h1}>Main Heading</h1>
<h2 className={typography.heading.h2}>Sub Heading</h2>

// Body text
<p className={typography.body.base}>Regular text</p>
<p className={typography.body.lg}>Large text</p>
<p className={typography.body.sm}>Small text</p>

// Special
<label className={typography.label}>Label</label>
<p className={typography.caption}>Caption text</p>
```

### Animations

Pre-built Framer Motion variants for consistent animations:

```typescript
import { fadeInUp, staggerContainer, hoverLift } from '@/styles/animations';

<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

## 🗄️ Database

The project uses Prisma with SQLite for easy local development.

### Models

- **User**: Basic user model with email and name
- **Post**: Blog posts with relation to User

### Commands

```bash
# Generate Prisma Client
npx prisma generate

# Create migration
npx prisma migrate dev --name migration_name

# Open Prisma Studio
npx prisma studio
```

## 🔌 API Routes

### Users

- `GET /api/users` - Get all users
- `POST /api/users` - Create a user
- `GET /api/users/[id]` - Get user by ID
- `PUT /api/users/[id]` - Update user
- `DELETE /api/users/[id]` - Delete user

### Posts

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a post
- `GET /api/posts/[id]` - Get post by ID
- `PUT /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post

## 📝 Usage Examples

### Create a User

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","name":"John Doe"}'
```

### Create a Post

```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Post","content":"Hello World","authorId":"user_id_here"}'
```

## 🚦 Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Set up the database**

```bash
npx prisma migrate dev
npx prisma generate
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Database**: SQLite
- **ORM**: Prisma
- **Deployment**: Vercel-ready

## 📚 Key Features

### Server Actions

Located in `src/actions/`, these provide server-side data operations:

```typescript
import { getUsers, createUser } from '@/actions/users';

// In Server Component
const users = await getUsers();

// In Client Component (with useTransition)
const result = await createUser({ email, name });
```

### Custom Hooks

Located in `src/hooks/`:

- `useMounted()` - Prevents hydration mismatches

### Type Safety

Full TypeScript support with:
- Prisma-generated types
- Custom API response types
- Strict type checking

## 🔒 Environment Variables

Create a `.env` file (already created by Prisma):

```env
DATABASE_URL="file:./dev.db"
```

## 📄 License

MIT

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
