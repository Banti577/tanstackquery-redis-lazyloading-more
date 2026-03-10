'use client';

export default function Home() {


  return (
    <div className="p-4 flex">
      <div className="w-[70%]">
        <h2 className="text-2xl mb-2">MP4 Progressive Streaming</h2>
        <video controls width="720" src="/api/streamvideo" />
    
      </div>
    
      <div className="w-[30%] ml-4 border p-2">
        Cart / Sidebar
      </div>
    </div>
  );
}