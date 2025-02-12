export function slugify(text) {
   return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-") // Reemplaza espacios y caracteres especiales por guiones
      .replace(/^-+|-+$/g, ""); // Elimina guiones al inicio o final
}
