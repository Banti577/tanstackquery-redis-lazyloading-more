import Redis from 'ioredis';

declare global {
  var redis: Redis | undefined;
}

let redis:Redis;



if (!global.redis) {
  redis = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
    password: process.env.REDIS_PASSWORD || undefined,
  });

  redis.on('connect', () => console.log('Redis connected!'));
  redis.on('error', (err) => console.error('Redis error:', err));

  global.redis = redis;
} else {
  redis = global.redis;
}

export default redis;