"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GET(req) {
  var videoPath, stat, fileSize, range, parts, start, end, chunkSize, fileStream, headers;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          videoPath = _path["default"].join(process.cwd(), 'public/videos/birdsvideo.mp4'); // const videoPath = 'public/videos/birdsvideo.mp4'

          stat = _fs["default"].statSync(videoPath);
          fileSize = stat.size;
          range = req.headers.get('range');

          if (range) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", new Response(_fs["default"].readFileSync(videoPath), {
            headers: {
              'Content-Type': 'video/mp4',
              'Content-Length': fileSize
            }
          }));

        case 6:
          parts = range.replace(/bytes=/, '').split('-');
          start = parseInt(parts[0], 10);
          end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
          chunkSize = end - start + 1;
          fileStream = _fs["default"].createReadStream(videoPath, {
            start: start,
            end: end
          });
          headers = new Headers();
          headers.set('Content-Range', "bytes ".concat(start, "-").concat(end, "/").concat(fileSize));
          headers.set('Accept-Ranges', 'bytes');
          headers.set('Content-Length', chunkSize.toString());
          headers.set('Content-Type', 'video/mp4');
          return _context.abrupt("return", new Response(fileStream, {
            status: 206,
            headers: headers
          }));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}