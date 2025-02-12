export const runtime = "edge";

export async function GET() {
   const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://192.168.100.5:3000";

   // 🔹 Rutas estáticas
   const staticRoutes = [
      { url: `${baseUrl}/`, lastModified: new Date() },
      { url: `${baseUrl}/blog`, lastModified: new Date() },
   ];

   // 🔹 Obtener rutas dinámicas de la API
   let dynamicRoutes = [];
   try {
      const res = await fetch(`${baseUrl}/api/posts`);
      const posts = await res.json();

      // 🔹 Verifica que cada post tenga un `slug`
      dynamicRoutes = posts
         .filter((post) => post.slug) // Evita los `undefined`
         .map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.updatedAt
               ? new Date(post.updatedAt)
               : new Date(),
         }));
   } catch (error) {
      console.error("Error obteniendo rutas dinámicas:", error);
   }

   // 🔹 Concatenar todas las rutas
   const allRoutes = [...staticRoutes, ...dynamicRoutes];

   // 📌 Generar el XML
   const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
       .map(
          (route) => `
      <url>
        <loc>${route.url}</loc>
        <lastmod>${
           route.lastModified instanceof Date && !isNaN(route.lastModified)
              ? route.lastModified.toISOString()
              : new Date().toISOString()
        }</lastmod>
      </url>
    `
       )
       .join("")}
  </urlset>`;

   return new Response(sitemapXml, {
      headers: {
         "Content-Type": "application/xml",
      },
   });
}
