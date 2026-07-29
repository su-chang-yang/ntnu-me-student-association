export function publicAsset(path?: string) {
  if (!path) return "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.GITHUB_ACTIONS === "true"
    ? "/ntnu-me-student-association"
    : "";
  return `${base}${normalized}`;
}
