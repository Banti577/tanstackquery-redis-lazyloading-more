"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _redis = _interopRequireDefault(require("../../../lib/redis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GET(req) {
  var _ref, searchParams, id, cached, res, user;

  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = new URL(req.url), searchParams = _ref.searchParams;
          id = searchParams.get('id');
          console.log('came in parent');

          if (id) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", new Response(JSON.stringify({
            error: 'Missing ID'
          }), {
            status: 400
          }));

        case 5:
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(_redis["default"].get("user:".concat(id)));

        case 8:
          cached = _context.sent;

          if (!cached) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", new Response(cached, {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(fetch("https://dummyjson.com/users/".concat(id)));

        case 13:
          res = _context.sent;
          user = res.json();
          console.log('data is ', user);
          _context.next = 18;
          return regeneratorRuntime.awrap(_redis["default"].set("user:".concat(id), JSON.stringify(user), 'EX', 3600));

        case 18:
          return _context.abrupt("return", new Response(JSON.stringify(user), {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          }));

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](5);
          console.error('Redis error:', _context.t0);
          return _context.abrupt("return", new Response(JSON.stringify({
            error: 'Server error'
          }), {
            status: 500
          }));

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 21]]);
}