# BlockSub - Solana Subscription Platform

## Overview

BlockSub is a Solana-native subscription payment platform that enables recurring payments for Web3 applications. It provides developers with tools to integrate subscription-based business models into their Solana dApps, similar to how Stripe works for traditional payment processing. The platform features programmable subscription vaults, automated payment scheduling, API key management, and merchant analytics dashboards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with TypeScript for UI components
- Vite as the build tool and development server
- Wouter for client-side routing
- TanStack Query (React Query) for server state management
- Framer Motion for animations and transitions

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Theme system supporting light/dark modes with CSS variables
- Design philosophy combines Stripe's professionalism, Solana's Web3 aesthetics, and Linear's typography

**Key Design Decisions:**
- Component-based architecture with reusable UI primitives
- Motion-first design approach with smooth scroll animations and interactive states
- Responsive layout system using Tailwind's utility classes
- Custom color palette featuring deep purple primary, electric blue accents, and dark navy backgrounds

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- TypeScript for type safety across the stack
- Development mode with Vite middleware integration
- Production mode with static file serving

**API Structure:**
- RESTful API endpoints under `/api` prefix
- Development-only API key management endpoints with authentication guards
- JSON request/response handling with error middleware
- Request logging with duration tracking for API routes

**Authentication Strategy:**
- Development mode allows direct API access for testing
- Production mode requires proper authentication (to be implemented)
- API key validation system for merchant authentication

### Data Storage Solutions

**Database:**
- PostgreSQL as the primary database
- Drizzle ORM for type-safe database operations
- Schema-first approach with Zod validation

**Schema Design:**
- `users` table: Stores user credentials (id, username, password)
- `api_keys` table: Manages API keys with usage tracking (id, userId, name, key, createdAt, lastUsed, requests)
- UUID primary keys generated via PostgreSQL
- Timestamp tracking for creation and last usage
- Foreign key relationships linking API keys to users

**Data Access Pattern:**
- Repository pattern with `IStorage` interface
- `DbStorage` implementation using Drizzle ORM
- Async/await for all database operations
- Prepared statements via Drizzle for query safety

### External Dependencies

**Database Services:**
- PostgreSQL database (configured via DATABASE_URL environment variable)
- Neon Database serverless driver for PostgreSQL connections
- Connection pooling via postgres.js client

**UI Libraries:**
- Radix UI primitives for accessible component foundations
- Recharts for data visualization and analytics charts
- Embla Carousel for interactive content displays
- Lucide React for iconography
- React Icons for brand icons (GitHub, Discord, X/Twitter)

**Development Tools:**
- Replit-specific plugins for development environment
- Vite plugin for runtime error overlay
- ESBuild for production bundling
- Drizzle Kit for database migrations

**Form Management:**
- React Hook Form for form state
- Hookform Resolvers with Zod for validation
- Type-safe form schemas derived from database models

**Styling Dependencies:**
- Tailwind CSS with PostCSS
- Class Variance Authority for component variants
- clsx and tailwind-merge for class name management

**Key Integration Points:**
- API key generation using Node.js crypto module
- Date formatting with date-fns library
- Session management with connect-pg-simple (configured but not actively used)
- Environment variable configuration for database connection