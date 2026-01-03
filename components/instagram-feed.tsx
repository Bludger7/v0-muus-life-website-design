"use client";
import { useEffect, useState, useRef } from "react";

// --- TİP TANIMLAMALARI ---
interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

// --- VİDEO BİLEŞENİ (En Temiz İkonlu Versiyon) ---
function VideoItem({ post }: { post: InstagramPost }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sesi Aç/Kapa
  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Videoyu Durdur/Oynat
  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full max-w-[240px] sm:max-w-sm mx-auto overflow-hidden rounded-lg border border-gray-200 mb-3 md:mb-4 break-inside-avoid shadow-md" style={{ backgroundColor: 'transparent' }}>
      {/* Video Element - iOS için basitleştirilmiş yapı */}
      <video
        ref={videoRef}
        src={post.mediaUrl}
        className="w-full h-auto block rounded-lg"
        style={{ 
          aspectRatio: '9/16',
          backgroundColor: 'transparent',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)'
        }}
        muted={isMuted}
        loop
        playsInline
        autoPlay 
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
      />

      {/* Kontrol Butonları */}
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex gap-1.5 md:gap-2 z-20">
        
        {/* Mute Butonu (YENİ ÇİZGİSEL İKONLAR) */}
        <button
          onClick={toggleMute}
          className="bg-black/60 hover:bg-black/80 text-white p-2 md:p-2.5 rounded-full backdrop-blur-sm transition-all"
        >
          {isMuted ? (
            // SES KAPALI İKONU (Speaker X Mark - Outline)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
             // SES AÇIK İKONU (Speaker Wave - Outline)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a3 3 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </button>

        {/* Instagram'a Git Butonu (Bu zaten çizgiseldi, uyumlu oldu) */}
        <a
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/60 hover:bg-black/80 text-white p-2 md:p-2.5 rounded-full backdrop-blur-sm transition-all flex items-center justify-center"
          title="Instagram'da Görüntüle"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>
  );
}

// --- RESİM BİLEŞENİ (Standart) ---
function ImageItem({ post }: { post: InstagramPost }) {
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group overflow-hidden rounded-lg max-w-[240px] sm:max-w-sm mx-auto mb-3 md:mb-4 break-inside-avoid shadow-md hover:shadow-lg transition-shadow"
    >
      <img
        src={post.mediaUrl}
        alt={post.caption || "Instagram Post"}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
         <div className="bg-white/90 p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
         </div>
      </div>
    </a>
  );
}

// --- ANA BİLEŞEN ---
export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    const FEED_URL = "https://feeds.behold.so/zqIPBjAuRllG8n28KWf2";

    fetch(FEED_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
        else if (data && Array.isArray(data.posts)) setPosts(data.posts);
      })
      .catch((err) => console.error("Instagram hatası:", err));
  }, []);

  if (!posts.length) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-2 md:px-6 py-4 md:py-8 overflow-hidden">
      <h2 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-8">Sosyal Medya Akışı</h2>
      
      {/* MASONRY LAYOUT (Pinterest Tarzı)
         columns-2 (mobil), columns-2 (tablet), columns-3 (masaüstü)
         Bu sayede uzun videolar ve kısa resimler aralarında boşluk kalmadan dizilir.
      */}
      <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4">
        {posts.map((post) => (
          post.mediaType === "VIDEO" 
            ? <VideoItem key={post.id} post={post} />
            : <ImageItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
