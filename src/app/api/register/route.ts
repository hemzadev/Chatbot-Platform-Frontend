import { NextRequest, NextResponse } from 'next/server';

interface RegisterResponse {
  message?: string;
  error?: string;
  token?: string;
}

export async function POST(req: NextRequest) {
  const { username, email, password, fullName } = await req.json();

  // Validate the request body
  if (!username || !email || !password || !fullName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const response = await fetch('http://localhost:8080/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, fullName }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ token: data.token || 'No token returned' });
    } else {
      const errorText = await response.text();
      console.error('Server responded with:', errorText);
      return NextResponse.json({ error: 'Registration failed' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
