"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/lib/language-context";

// --- TİP TANIMLAMALARI ---
interface InstagramPost {
  id: string;
  mediaUrl: string;
  thumbnailUrl?: string;
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
    <div className="relative w-full aspect-9/16 overflow-hidden rounded-lg border border-gray-200 shadow-md bg-slate-100" style={{ backgroundColor: 'transparent' }}>
      {/* Video Element - iOS için basitleştirilmiş yapı */}
      <video
        ref={videoRef}
        src={post.mediaUrl}
        poster={post.thumbnailUrl || undefined}
        className="w-full h-full object-cover block rounded-lg"
        style={{ 
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
      className="block relative w-full aspect-9/16 group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <img
        src={post.mediaUrl}
        alt={post.caption || "Instagram Post"}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
  const { t } = useLanguage();
  const visiblePosts = posts.slice(0, 6);

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

  if (!visiblePosts.length) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 overflow-hidden">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t("social.media.title")}</h2>
        <div className="w-12 h-1 bg-slate-900 mx-auto mb-4"></div>
        <a 
          href="https://instagram.com/noyerhome" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm md:text-base text-slate-500 hover:text-slate-700 transition-colors"
        >
          @noyerhome
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 place-items-center max-w-4xl mx-auto">
        {visiblePosts.map((post) => (
          <div key={post.id} className="w-full max-w-60">
            {post.mediaType === "VIDEO" ? <VideoItem post={post} /> : <ImageItem post={post} />}
          </div>
        ))}
      </div>
    </section>
  );
}
