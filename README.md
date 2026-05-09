This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment Variables

This project requires the following environment variables to be set:

### Required Variables

- `RESEND_API_KEY` - Your Resend API key for sending emails. Get it from [Resend API Keys](https://resend.com/api-keys)
- `TURNSTILE_SECRET_KEY` - Your Cloudflare Turnstile secret key for spam protection. Get it from [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)

### Setting Environment Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `RESEND_API_KEY` = `re_xxxxxxxxxxxxx`
   - `TURNSTILE_SECRET_KEY` = `0x4AAAAAACMuI884fEc5tD-BNtqwjUTsjWU`

### Spam Protection

This project uses a 3-layer spam protection system:
1. **Cloudflare Turnstile** - Invisible CAPTCHA that blocks 99% of bots
2. **Honeypot Field** - Hidden field that catches bots that slip through
3. **Time Validation** - Rejects forms submitted too quickly (< 3 seconds)

The Turnstile Site Key is already configured in the contact form. You only need to set the `TURNSTILE_SECRET_KEY` environment variable.
