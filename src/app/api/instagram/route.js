import sql from "@/lib/db";

async function ensureInstagramTableExists() {
   try {
      await sql`
      CREATE TABLE IF NOT EXISTS instagram_posts (
        id SERIAL PRIMARY KEY,
        iframe TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
   } catch (error) {
      console.error(
         "Error al verificar/crear la tabla instagram_posts:",
         error
      );
   }
}

export async function GET() {
   try {
      await ensureInstagramTableExists(); // Verifica si la tabla existe antes de la consulta
      const posts =
         await sql`SELECT * FROM instagram_posts ORDER BY created_at DESC`;
      return Response.json(posts);
   } catch (error) {
      console.error("Error en GET /api/instagram:", error);
      return Response.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req) {
   try {
      await ensureInstagramTableExists(); // Verifica si la tabla existe antes de insertar datos
      const { iframe } = await req.json();
      if (!iframe) {
         return Response.json(
            { error: "El campo iframe es obligatorio" },
            { status: 400 }
         );
      }

      const result = await sql`
      INSERT INTO instagram_posts (iframe) VALUES (${iframe}) RETURNING *;
    `;

      return Response.json(result[0], { status: 201 });
   } catch (error) {
      console.error("Error en POST /api/instagram:", error);
      return Response.json({ error: error.message }, { status: 500 });
   }
}
