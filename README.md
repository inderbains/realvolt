# RealVolt v2 Full Foundation

This is the clean master codebase for RealVolt.

## What is included

### Public SaaS website
- realvolt.ca homepage
- Features
- Pricing
- Property Websites
- Contact
- Login
- Signup
- Supabase auth callback
- Signup metadata for Individual Realtor / Team / Brokerage
- Email-verification-ready signup flow (enable confirmation in Supabase Auth when ready)

### Authenticated platform
- Dashboard
- CRM
- Pipeline
- Clients
- Open Houses
- Transactions
- Transaction detail
- Property Page Builder
- Community
- Referrals
- My Earnings
- Documents
- E-Sign
- Forms
- Automations
- Integrations
- Reports
- Learning
- Support
- Settings

### Brokerage-only architecture
- Back Office
- Trust & Accounting
- Agents & Access
- Brokerage Admin
- role helper in `lib/access.ts`
- final enforcement should be done with both server-side route checks and RLS

### Accounting workflow represented
Deposit expected → received → deposited to trust → verified → commission calculated → 5% GST → release approved → commission+GST release recorded → agent payout → reconciliation → audit → close/lock.

### Agent private account
- commission statements
- monthly/yearly expense summaries
- tax/T4A document area
- outstanding-balance/payment placeholder

### Property websites
- property page module
- create page screen
- public `/p/[slug]` route
- Realtor profile reuse concept
- domain / QR / analytics architecture
- optional migration in `supabase/migration-v0.7-property-pages-saas.sql`

## IMPORTANT: Supabase

Do not delete your existing Supabase project.

Your current database already includes the v0.6.2 back-office/trust tables. Do not rerun old migrations.

The `v0.7-property-pages-saas.sql` file is an OPTIONAL next migration for property pages and subscription-plan records. Review/run it only when you are ready to add those database tables.

## Hostinger

Build command:
`npm run build`

This package uses:
`next build --webpack`

Start command:
`npm run start`

## Environment variables

Copy `.env.example` into your hosting environment and provide:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_SITE_URL=https://realvolt.ca

Optional later:
- RESEND_API_KEY
- REALVOLT_FROM_EMAIL
- META_APP_ID / META_APP_SECRET / META_VERIFY_TOKEN
- GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET

## Important implementation note

This package is intentionally a broad, coherent product foundation. The UI and route architecture are built so the modules can now be developed one-by-one. Some external actions (actual email delivery, Meta OAuth, Google OAuth, custom-domain provisioning, card payments, bank movement and tax filing) are represented by safe placeholders/API foundations and require provider credentials and production-specific implementation.
