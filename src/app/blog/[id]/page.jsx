import Image from "next/image";
import "./post.css";

async function getPost(id) {
   const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${id}`,
      { cache: "no-store" }
   );

   if (!res.ok) {
      throw new Error("Error al cargar el post");
   }

   return res.json();
}

export default async function PostPage({ params }) {
   const { id } = params;
   const post = await getPost(id);

   return (
      <div>
         <div className="post-container">
            <h1>{post.title}</h1>
            <p>
               <strong>Autor:</strong> {post.author}
            </p>
            <p>
               <strong>Publicado:</strong>{" "}
               {new Date(post.created_at).toLocaleDateString()}
            </p>

            {post.image_url && (
               <Image
                  src={post.image_url}
                  alt={post.title}
                  width={600}
                  height={400}
                  style={{ objectFit: "contain", borderRadius: "8px" }}
               />
            )}

            <p className="post-content">{post.content}</p>
         </div>
         <div className="postRedes">
            {/* Renderizar iframe de Facebook si existe */}
            {post.facebook_iframe && (
               <div
                  className="social-embed"
                  dangerouslySetInnerHTML={{ __html: post.facebook_iframe }}
               />
            )}

            {/* Renderizar iframe de Instagram si existe */}
            {post.instagram_iframe && (
               <div
                  className="social-embed"
                  dangerouslySetInnerHTML={{ __html: post.instagram_iframe }}
               />
            )}
         </div>
      </div>
   );
}
