import Link from "next/link"
import { Instagram } from "lucide-react"

// Bu arayüz Instagram API'den gelen veriyi temsil eder
interface InstagramPost {
  id: string
  caption: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  permalink: string
  thumbnail_url?: string
}

async function getInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!token) {
    return getMockPosts()
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=6`
    const response = await fetch(url, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error("Instagram API error")
    }

    const data = await response.json()
    return data.data
  } catch (error) {
    console.error("Error fetching Instagram posts:", error)
    return getMockPosts()
  }
}

function getMockPosts(): InstagramPost[] {
  return [
    {
      id: "1",
      caption: "Minimalist living room design #interior #design",
      media_type: "IMAGE",
      media_url: "/images/attachments-gen-images-public-minimalist-bright-living-room-render-white-walls.jpg",
      permalink: "https://instagram.com",
    },
    {
      id: "2",
      caption: "Modern architecture details",
      media_type: "IMAGE",
      media_url: "/images/attachments-gen-images-public-modern-luxury-villa-exterior-architecture.jpg",
      permalink: "https://instagram.com",
    },
    {
      id: "3",
      caption: "Workspace inspiration",
      media_type: "IMAGE",
      media_url: "/modern-office-space.png",
      permalink: "https://instagram.com",
    },
    {
      id: "4",
      caption: "Kitchen renovation project",
      media_type: "IMAGE",
      media_url: "/luxury-kitchen.png",
      permalink: "https://instagram.com",
    },
    {
      id: "5",
      caption: "Bedroom rendering",
      media_type: "IMAGE",
      media_url: "/cozy-bedroom.png",
      permalink: "https://instagram.com",
    },
    {
      id: "6",
      caption: "Commercial space design",
      media_type: "IMAGE",
      media_url: "/commercial-interior.jpg",
      permalink: "https://instagram.com",
    },
  ]
}

export async function InstagramFeed() {
  const posts = await getInstagramPosts()

  return (
    <section className="py-24 bg-stone-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="flex items-center space-x-2 text-stone-600">
            <Instagram className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Instagram'da Bizi Takip Edin</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">@muus.life</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.permalink}
              target="_blank"
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              {/* Note: Using standard img tag for external dynamic URLs to avoid Next.js config requirement for now */}
              <img
                src={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}
                alt={post.caption || "Instagram post"}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://instagram.com/muus_life"
            target="_blank"
            className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors border border-stone-200 bg-white hover:bg-stone-50 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-950"
          >
            Tüm Gönderileri Gör
          </Link>
        </div>
      </div>
    </section>
  )
}
