import redis from '../../../lib/redis';
import { getUserFromDB } from '../../../lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  console.log('came in parent')

  if (!id) return new Response(JSON.stringify({ error: 'Missing ID' }), { status: 400 });

  try {
    const cached = await redis.get(`user:${id}`);
    if (cached) return new Response(cached, { status: 200, headers: { 'Content-Type': 'application/json' } });


    const res = await fetch(`https://dummyjson.com/users/${id}`);

    const user  = res.json()
    console.log('data is ', user);
    
    await redis.set(`user:${id}`, JSON.stringify(user), 'EX', 3600);

    return new Response(JSON.stringify(user), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Redis error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}