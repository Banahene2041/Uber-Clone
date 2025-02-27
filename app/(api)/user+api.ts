import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    // Ensure DATABASE_URL is defined
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined in environment variables.');
    }

    // Initialize Neon SQL connection
    const sql = neon(process.env.DATABASE_URL);

    // Parse request body
    const { name, email, clerkId } = await request.json();

    // Validate required fields
    if (!name || !email || !clerkId) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // Insert user into the database
    const response = await sql`
      INSERT INTO users (name, email, clerk_id)
      VALUES (${name}, ${email}, ${clerkId})
      RETURNING *;
    `;

    // Return the inserted user data
    return new Response(JSON.stringify({ data: response }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
