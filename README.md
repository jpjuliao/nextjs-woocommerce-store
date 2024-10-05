# Next.js WooCommerce Headless Store

This project is a simple headless e-commerce store built with Next.js that connects to a WooCommerce backend via the REST API. It demonstrates fetching and displaying products from a WooCommerce store.

## Features

- Displays a list of products from a WooCommerce store
- Shows product images, titles, and prices
- Provides "View Details" links to the original WooCommerce product pages
- Implements a simple cart functionality using React Context

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or Yarn
- A WooCommerce store with API access

## Setting Up WooCommerce API Credentials

1. Log in to your WordPress admin panel.
2. Navigate to WooCommerce > Settings > Advanced > REST API.
3. Click on "Add Key" to create a new set of API credentials.
4. Set the following options:
   - Description: Next.js Headless Store (or any name you prefer)
   - User: Choose an admin user or create a specific user for API access
   - Permissions: Read (You can set more permissions if needed)
5. Click "Generate API Key"
6. Note down the Consumer Key and Consumer Secret. You'll need these for your project's environment variables.

## Project Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/nextjs-woocommerce-headless.git
   cd nextjs-woocommerce-headless
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_WOOCOMMERCE_URL=https://your-woocommerce-store-url.com
   WOOCOMMERCE_KEY=your_consumer_key
   WOOCOMMERCE_SECRET=your_consumer_secret
   ```
   Replace the placeholders with your actual WooCommerce store URL and API credentials.

## Running the Project

1. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `/app`: App Router 
- `/pages`: Contains the main pages of the application
- `/components`: Reusable React components
- `/contexts`: React Context for state management
- `/types`: TypeScript type definitions
- `/utils`: Utility functions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

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
