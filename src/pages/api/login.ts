    import type { NextApiRequest, NextApiResponse } from 'next';

    interface LoginResponse {
    token: string;
    }

    export default async function handler(req: NextApiRequest, res: NextApiResponse<LoginResponse | { error: string }>) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
        const response = await fetch('http://localhost:8080/api/v1/auth/login', { // Adjust URL as needed
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
        } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    }