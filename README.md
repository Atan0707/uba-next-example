# UBA NextJS Example

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

## 📚 Next.js for Beginners

### 📂 Project Structure

Next.js uses a file-system based router built on the **App Router** architecture. Here's what the basic structure looks like:

```
src/
├── app/
│   ├── page.tsx           # Home page (/)
│   ├── layout.tsx         # Root layout (applied to all pages)
│   ├── globals.css        # Global styles
│   ├── api/               # API routes
│   │   └── contoh/
│   │       └── route.tsx  # API endpoint at /api/contoh
│   └── about/
│       └── page.tsx       # About page (/about)
├── components/            # Reusable React components
└── lib/                   # Utility functions, custom hooks, etc.
```

### 🚦 Routing in Next.js

Next.js has an intuitive, file-system based routing:

- **Pages**: Create a file at `app/about/page.tsx` to make it accessible at `/about`
- **Nested Routes**: A file at `app/blog/posts/page.tsx` will be accessible at `/blog/posts`
- **Dynamic Routes**: Create files like `app/products/[id]/page.tsx` for dynamic routes like `/products/1`, `/products/2`, etc.

### 📑 Layouts

Layouts in Next.js allow you to share UI between multiple pages:

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>This is in every page</header>
        {children}
        <footer>This is also in every page</footer>
      </body>
    </html>
  );
}
```

You can also create nested layouts for specific sections:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
```

### 🔄 Data Fetching

Next.js allows you to fetch data in several ways:

1. **Server Components** (default in App Router)
```tsx
// This component runs on the server
async function ProductPage({ params }) {
  const product = await fetch(`https://api.example.com/products/${params.id}`).then(r => r.json());
  return <div>{product.name}</div>;
}
```

2. **Client Components** (for interactive features)
```tsx
'use client'; // This directive makes it a client component

import { useState, useEffect } from 'react';

export default function ClientComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/contoh')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  // Rest of your component
}
```

### 🌐 API Routes

Next.js allows you to create API endpoints within your app using the App Router:

```tsx
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello World' });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
```

### 📝 Forms and API Requests

Here's a simple example of handling form submission:

```tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    console.log(result);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={formData.name} 
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
      />
      {/* Other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 📊 Sample API Endpoints

You can access different types of sample data using the following endpoints:

- `/api/contoh` - Returns all available sample data and information about available endpoints
- `/api/contoh?data=users` - Returns user data (accounts, profiles)
- `/api/contoh?data=products` - Returns product data (e-commerce items)
- `/api/contoh?data=tasks` - Returns task data (todo items, project tasks)
- `/api/contoh?data=posts` - Returns blog/social media posts
- `/api/contoh?data=comments` - Returns comments related to posts
- `/api/contoh?data=weather` - Returns weather data for different cities
- `/api/contoh?data=all` - Same as the base endpoint, returns all data

### 📌 API Example Usage

```javascript
// Example using fetch
async function getUsers() {
  const response = await fetch('/api/contoh?data=users');
  const data = await response.json();
  console.log(data.data); // Array of users
}

// Example using axios
import axios from 'axios';

async function getProducts() {
  const response = await axios.get('/api/contoh?data=products');
  console.log(response.data.data); // Array of products
}
```

## 🔍 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - comprehensive Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial.
- [The Next.js GitHub Repository](https://github.com/vercel/next.js/)