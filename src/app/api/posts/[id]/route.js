import sql from "@/lib/db";

export async function GET(req, { params }) {
   try {
      const { id } = params;
      const result =
         await sql`SELECT * FROM posts WHERE id = ${id} AND is_active = TRUE`;

      if (result.length === 0) {
         return Response.json({ error: "Post no encontrado" }, { status: 404 });
      }

      return Response.json(result[0]);
   } catch (error) {
      console.error("Error en GET /api/posts/[id]:", error);
      return Response.json({ error: error.message }, { status: 500 });
   }
}
