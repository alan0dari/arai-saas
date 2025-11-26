# ARAI SaaS - Copilot Instructions

## Project Overview

ARAI SaaS is a B2B platform for AI integration with n8n automation and WhatsApp Business communication. Multi-tenant architecture with strict data isolation.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Database**: Supabase (PostgreSQL with RLS)
- **Styling**: Tailwind CSS
- **Validation**: Zod schemas
- **Icons**: Lucide React

## Architecture: 3-Layer AI Interaction Model

All AI features must respect these security boundaries:

1. **Informational Layer**: Public data only, no authentication required
2. **Consultive Layer**: User-specific data, requires auth + tenant context
3. **Transactional Layer**: State-changing operations, requires auth + explicit confirmation + AI Guardrails

## Project Structure

```
app/
├── (auth)/           # Auth routes (login, register, forgot-password)
├── (dashboard)/
│   ├── admin/        # Super admin panel (cross-tenant)
│   └── client/       # Tenant dashboard (isolated data)
└── api/              # Route Handlers

lib/
├── supabase/         # createBrowserClient (client.ts), createServerClient (server.ts)
├── ai/               # AI integrations and guardrails
├── mcp/              # Model Context Protocol handlers
└── utils/            # cn() for Tailwind class merging

components/
├── ui/               # Reusable primitives (Button, Input, Card)
└── features/         # Domain-specific components
```

## Key Conventions

### Supabase Client Usage
```typescript
// Server Components / Route Handlers
import { createServerClient } from "@/lib/supabase/server";
const supabase = await createServerClient();

// Client Components
import { createBrowserClient } from "@/lib/supabase/client";
const supabase = createBrowserClient();
```

### Styling with cn()
```typescript
import { cn } from "@/lib/utils";
<div className={cn("base-classes", conditional && "conditional-class")} />
```

### Zod Validation
All API inputs must be validated with Zod before processing. Define schemas in the same file or in a shared schemas folder.

## Security Requirements

1. **RLS Policies**: Every table must have RLS enabled with tenant isolation
2. **Input Sanitization**: Validate all user inputs with Zod
3. **AI Guardrails**: Transactional AI operations require:
   - Explicit user confirmation
   - Rate limiting per tenant
   - Audit logging in `ai_interactions` table
4. **No service role key in client code**: Use server-side only

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # ESLint check
npm run db:generate-types  # Regenerate Supabase types
```

## File Naming

- Components: PascalCase (`UserProfile.tsx`)
- Utilities/hooks: camelCase (`useAuth.ts`, `formatDate.ts`)
- Route segments: kebab-case (`forgot-password/`)

## Important Paths

- Database types: `lib/database.types.ts` (auto-generated)
- Environment template: `.env.example`
- Supabase migrations: `supabase/migrations/`
- n8n workflows: `n8n/workflows/`
