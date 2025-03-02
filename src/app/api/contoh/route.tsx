import { NextResponse } from 'next/server';

// Users data - common for user management examples
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', created_at: '2023-01-15T08:30:00Z' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', created_at: '2023-02-20T14:20:00Z' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', created_at: '2023-03-10T09:45:00Z' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'editor', created_at: '2023-04-05T16:15:00Z' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'user', created_at: '2023-05-12T11:30:00Z' },
];

// Products data - for e-commerce examples
const products = [
  { id: 1, name: 'Laptop Pro', price: 1299.99, category: 'electronics', stock: 45, rating: 4.5 },
  { id: 2, name: 'Smartphone X', price: 799.99, category: 'electronics', stock: 123, rating: 4.2 },
  { id: 3, name: 'Wireless Headphones', price: 159.99, category: 'accessories', stock: 89, rating: 4.7 },
  { id: 4, name: 'Ultra HD Monitor', price: 349.99, category: 'electronics', stock: 34, rating: 4.3 },
  { id: 5, name: 'Mechanical Keyboard', price: 129.99, category: 'accessories', stock: 67, rating: 4.6 },
  { id: 6, name: 'Ergonomic Mouse', price: 59.99, category: 'accessories', stock: 92, rating: 4.4 },
  { id: 7, name: 'External SSD 1TB', price: 179.99, category: 'storage', stock: 38, rating: 4.8 },
  { id: 8, name: 'Wireless Charger', price: 39.99, category: 'accessories', stock: 105, rating: 4.1 },
];

// Tasks data - for todo/project management examples
const tasks = [
  { id: 1, title: 'Complete project proposal', status: 'completed', due_date: '2023-06-10', user_id: 1 },
  { id: 2, title: 'Design homepage mockup', status: 'in_progress', due_date: '2023-06-15', user_id: 4 },
  { id: 3, title: 'Review code PR #123', status: 'pending', due_date: '2023-06-12', user_id: 1 },
  { id: 4, title: 'Set up CI/CD pipeline', status: 'in_progress', due_date: '2023-06-20', user_id: 3 },
  { id: 5, title: 'Write API documentation', status: 'pending', due_date: '2023-06-25', user_id: 2 },
];

// Posts data - for blog/social media examples
const posts = [
  { 
    id: 1, 
    title: 'Getting Started with React', 
    content: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.', 
    author_id: 1, 
    created_at: '2023-04-15T10:30:00Z',
    tags: ['react', 'javascript', 'frontend']
  },
  { 
    id: 2, 
    title: 'Understanding RESTful APIs', 
    content: 'REST is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations.', 
    author_id: 2, 
    created_at: '2023-04-20T14:45:00Z',
    tags: ['api', 'rest', 'backend']
  },
  { 
    id: 3, 
    title: 'Introduction to TypeScript', 
    content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.', 
    author_id: 4, 
    created_at: '2023-05-03T09:15:00Z',
    tags: ['typescript', 'javascript', 'programming']
  },
];

// Comments data - related to posts
const comments = [
  { id: 1, post_id: 1, user_id: 3, content: 'Great introduction to React!', created_at: '2023-04-16T08:30:00Z' },
  { id: 2, post_id: 1, user_id: 5, content: 'This helped me understand React components better.', created_at: '2023-04-17T15:45:00Z' },
  { id: 3, post_id: 2, user_id: 1, content: 'Nice explanation of REST principles.', created_at: '2023-04-21T11:20:00Z' },
  { id: 4, post_id: 3, user_id: 2, content: 'I\'ve been looking for a TypeScript tutorial like this!', created_at: '2023-05-04T10:10:00Z' },
];

// Weather data - for weather app examples
const weather = [
  { city: 'New York', temp_celsius: 22, temp_fahrenheit: 71.6, condition: 'Sunny', humidity: 50, wind_speed: 8 },
  { city: 'London', temp_celsius: 18, temp_fahrenheit: 64.4, condition: 'Cloudy', humidity: 68, wind_speed: 12 },
  { city: 'Tokyo', temp_celsius: 26, temp_fahrenheit: 78.8, condition: 'Rainy', humidity: 75, wind_speed: 7 },
  { city: 'Sydney', temp_celsius: 20, temp_fahrenheit: 68, condition: 'Partly Cloudy', humidity: 60, wind_speed: 15 },
  { city: 'Paris', temp_celsius: 24, temp_fahrenheit: 75.2, condition: 'Clear', humidity: 45, wind_speed: 9 },
];

export async function GET(request: Request) {
  // Get URL parameters
  const { searchParams } = new URL(request.url);
  
  // Determine which data to return based on the 'data' parameter
  const dataType = searchParams.get('data');
  
  // Handle specific data type requests
  switch(dataType) {
    case 'users':
      return NextResponse.json({ 
        success: true, 
        data: users 
      });
      
    case 'products':
      return NextResponse.json({ 
        success: true, 
        data: products 
      });
      
    case 'tasks':
      return NextResponse.json({ 
        success: true, 
        data: tasks 
      });
      
    case 'posts':
      return NextResponse.json({ 
        success: true, 
        data: posts 
      });
      
    case 'comments':
      return NextResponse.json({ 
        success: true, 
        data: comments 
      });
      
    case 'weather':
      return NextResponse.json({ 
        success: true, 
        data: weather 
      });
      
    // If no specific data is requested or data type is 'all', return all datasets
    case 'all':
    default:
      return NextResponse.json({
        success: true,
        message: 'Sample data API for development and testing',
        available_endpoints: [
          '/api/contoh?data=users',
          '/api/contoh?data=products',
          '/api/contoh?data=tasks',
          '/api/contoh?data=posts',
          '/api/contoh?data=comments',
          '/api/contoh?data=weather',
          '/api/contoh?data=all'
        ],
        users,
        products,
        tasks,
        posts,
        comments,
        weather
      });
  }
}
