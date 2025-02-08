import sql from "@/lib/db";

export async function GET() {
   try {
      const posts = await sql`
      SELECT * FROM posts WHERE is_active = TRUE ORDER BY created_at DESC
    `;
      return Response.json(posts);
   } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req) {
   try {
      const { title, content, author, image_url, previous_post_id } =
         await req.json();

      if (!title || !content || !author) {
         return Response.json(
            { error: "Todos los campos obligatorios deben ser completados" },
            { status: 400 }
         );
      }

      // Si hay un previous_post_id, marcamos ese post como inactivo
      if (previous_post_id) {
         await sql`
        UPDATE posts SET is_active = FALSE WHERE id = ${previous_post_id}
      `;
      }

      const result = await sql`
      INSERT INTO posts (title, content, author, image_url, previous_post_id, updated_at)
      VALUES (${title}, ${content}, ${author}, ${image_url}, ${previous_post_id}, NOW())
      RETURNING *;
    `;

      return Response.json(result[0], { status: 201 });
   } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
   }
}
