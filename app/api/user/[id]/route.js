import redis from "../../../../lib/redis";

export async function GET(req, context) {

  const params = await context.params;
  const id = params.id;


  if (!id) return new Response(JSON.stringify({ error: 'Missing ID' }), { status: 400 });

  try {
    const cached = await redis.get(`user`);
    if (cached) return new Response(cached, { status: 200, headers: { 'Content-Type': 'application/json' } });


    const res = await fetch(`https://dummyjson.com/users`);

    const user = await res.json()
    // console.log('data is ', user);

    await redis.set(`user`, JSON.stringify(user), 'EX', 3600);

    return new Response(JSON.stringify(user), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Redis error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}