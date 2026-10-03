# RealVolt Brokerage OS — Full Clean Build

This is the clean master codebase for RealVolt. It is designed to replace the contents of the GitHub repository so old duplicate routes/config files do not get mixed with the new app.

## What is included

- Multi-brokerage application shell and role-aware architecture
- CRM, pipeline, clients and open houses
- Listing-side and buyer-side transaction workflow
- Realtor onboarding/invitations and commission-plan fields
- Back-office review queue
- Trust deposits, verification, releases and reconciliation views
- 5% GST commission model
- Agent/brokerage split, monthly fee, transaction fee, referral and other deductions
- Lawyer/notary + CRI workflow UI
- Agent earnings / payout statement area
- T4A/year-end architecture in Supabase
- E-sign module UI
- Documents and closed-file archive UI
- Forms / external lead-capture architecture
- Email API using Resend when configured
- Meta webhook endpoint scaffold
- Google / Meta / email integration centre UI
- Automations builder UI
- Community, referrals, reports, learning, support and settings
- Audit and closed-file workflow UI
- Hostinger-friendly Webpack build command
- Next.js 16 `proxy.ts` convention
- Supabase SSR auth helpers
- No duplicate `(app)` / root page routes

## Replace GitHub cleanly

Because this build is intended as the new master:

1. Keep a backup of the old repository locally.
2. Delete the old GitHub project contents.
3. Upload the **contents of this folder** directly to the repository root.
4. Do not put this folder inside another `realvolt-v1-full/` folder in GitHub.

The repository root should contain:

```text
app/
components/
lib/
supabase/
.env.example
.gitignore
next.config.mjs
package.json
proxy.ts
tsconfig.json
README.md
FEATURES.md
```

There should be no `middleware.ts`, `next.config.ts`, `next.config.compiled.js`, temporary config backup files, or duplicate `app/<route>` pages outside the `(app)` group.

## Hostinger

Build command:

```bash
npm run build
```

`package.json` already maps that to:

```bash
next build --webpack
```

Start command:

```bash
npm run start
```

Use Node.js 22.x if that is the currently selected Hostinger runtime.

## Environment variables

Copy `.env.example` values into Hostinger environment variables. At minimum:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_APP_URL
```

For admin invitations:

```text
SUPABASE_SERVICE_ROLE_KEY
```

Never expose the service-role key in browser code.

For email sending:

```text
RESEND_API_KEY
REALVOLT_FROM_EMAIL
```

For Meta webhook verification:

```text
META_WEBHOOK_VERIFY_TOKEN
```

## Supabase

Do not delete or recreate the existing Supabase database.

Your v0.6.2 trust/back-office/GST migration is already applied. Do not rerun it. See `supabase/README.md`.

Run `supabase/migration-v0.6.3-agent-draft-workflow.sql` only if you have not already run it.

## Accounting design

RealVolt records trust workflow and approvals. It does not move bank funds automatically.

Example:

```text
Trust deposit:             $25,000.00
Gross commission:          $15,000.00
GST @ 5%:                     $750.00
Commission + GST release:  $15,750.00
Trust remaining:             $9,250.00
```

Agent/brokerage splits and deductions are calculated separately from the trust release.

## Production notes

The application contains working Supabase reads, auth plumbing, invite/email/form API foundations and the full operating UI. Before handling live trust/accounting data, complete brokerage-specific testing, authorization review, accounting controls, backups, and legal/compliance review for your jurisdiction and brokerage policies.
