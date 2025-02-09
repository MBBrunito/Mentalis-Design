import Image from "next/image";
import "./blog.css";
import FacebookCarousel from "@/components/FacebookCarousel/FacebookCarousel";
import InstagramCarousel from "@/components/InstagramCarousel/InstagramCarousel";

async function getPosts() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`, {
      cache: "no-store",
   });

   if (!res.ok) {
      throw new Error("Error al cargar los posts");
   }

   return res.json();
}

export default async function BlogPage() {
   const posts = await getPosts();

   return (
      <div>
         <h1>Blog</h1>
         {posts.length === 0 ? (
            <p>No hay posts disponibles</p>
         ) : (
            <div className="blog-list">
               {posts.map((post) => (
                  <div key={post.id} className="blog-card">
                     <Image
                        src={post.image_url}
                        alt={post.title}
                        width={250}
                        height={175}
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                     />
                     <h2 title={post.title}>{post.title}</h2>
                     <p>
                        <strong>Autor:</strong> {post.author}
                     </p>
                     <p>{post.content.substring(0, 100)}...</p>

                     <a href={`/blog/${post.id}`} className="read-more">
                        Leer más...
                     </a>
                  </div>
               ))}
            </div>
         )}
         <FacebookCarousel />
         <InstagramCarousel />
      </div>
   );
}
