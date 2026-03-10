"use strict";
exports.__esModule = true;
var ioredis_1 = require("ioredis");
var redis;
if (!global.redis) {
    redis = new ioredis_1["default"]({
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
        password: process.env.REDIS_PASSWORD || undefined
    });
    redis.on('connect', function () { return console.log('Redis connected!'); });
    redis.on('error', function (err) { return console.error('Redis error:', err); });
    global.redis = redis;
}
else {
    redis = global.redis;
}
exports["default"] = redis;
