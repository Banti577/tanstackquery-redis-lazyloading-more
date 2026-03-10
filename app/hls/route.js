import fs from 'fs';
import path from 'path';

export async function GET(req) {
  const videoPath = path.join(process.cwd(), 'public/videos/birdsvideo.mp4');
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;

  const range = req.headers.get('range');
  if (!range) {
    return new Response(fs.readFileSync(videoPath), {
      headers: { 'Content-Type': 'video/mp4', 'Content-Length': fileSize },
    });
  }

  const parts = range.replace(/bytes=/, '').split('-');
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
  const chunkSize = end - start + 1;

  const fileStream = fs.createReadStream(videoPath, { start, end });
  const headers = new Headers();
  headers.set('Content-Range', `bytes ${start}-${end}/${fileSize}`);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Length', chunkSize.toString());
  headers.set('Content-Type', 'video/mp4');

  return new Response(fileStream, { status: 206, headers });
}