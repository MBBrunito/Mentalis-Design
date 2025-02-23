import sql from "@/lib/db";
import { slugify } from "@/lib/utils"; // Función para generar slugs

async function ensureTableExists() {
   try {
      await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL,
        image_url TEXT,
        facebook_iframe TEXT DEFAULT NULL,
        instagram_iframe TEXT DEFAULT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NULL,
        previous_post_id INTEGER REFERENCES posts(id) ON DELETE SET NULL,
        is_active BOOLEAN DEFAULT TRUE
      );
    `;
   } catch (error) {
      console.error("Error al verificar/crear la tabla posts:", error);
   }
}

export async function GET() {
   try {
      await ensureTableExists(); // Verifica si la tabla existe antes de hacer la consulta

      const posts = await sql`
      SELECT * FROM posts WHERE is_active = TRUE ORDER BY created_at DESC
    `;
      return Response.json(posts);
   } catch (error) {
      console.error("Error en GET /api/posts:", error);
      return Response.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req) {
   try {
      await ensureTableExists(); // Verifica si la tabla existe antes de insertar datos

      const {
         title,
         content,
         author,
         image_url,
         facebook_iframe,
         instagram_iframe,
      } = await req.json();

      if (!title || !content || !author || !image_url) {
         return Response.json(
            { error: "Todos los campos obligatorios deben ser completados" },
            { status: 400 }
         );
      }

      const slug = slugify(title); // Genera el slug basado en el título

      const result = await sql`
         INSERT INTO posts (title, slug, content, author, image_url, facebook_iframe, instagram_iframe, updated_at)
         VALUES (${title}, ${slug}, ${content}, ${author}, ${image_url}, ${
         facebook_iframe || null
      }, ${instagram_iframe || null}, NOW())
         RETURNING *;
      `;

      return Response.json(result[0], { status: 201 });
   } catch (error) {
      console.error("Error en POST /api/posts:", error);
      return Response.json({ error: error.message }, { status: 500 });
   }
}
