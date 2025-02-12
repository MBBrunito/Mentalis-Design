import sql from "@/lib/db";

export async function GET(req, { params }) {
   try {
      console.log("🔍 Slug recibido en API:", params);
      const { slug } = params;

      if (!slug) {
         return Response.json(
            { error: "Slug no proporcionado" },
            { status: 400 }
         );
      }

      const result =
         await sql`SELECT * FROM posts WHERE slug = ${slug} AND is_active = TRUE`;

      if (result.length === 0) {
         console.warn("⚠️ Post no encontrado para slug:", slug);
         return Response.json({ error: "Post no encontrado" }, { status: 404 });
      }

      return Response.json(result[0]);
   } catch (error) {
      console.error("❌ Error en GET /api/posts/[slug]:", error);
      return Response.json({ error: error.message }, { status: 500 });
   }
}
