/**
 * Format a given URL with optional parameters and slug.
 *
 * @param {string} url
 * @param {Record<string, unknown>} [params]
 * @param {Record<string, unknown>} [slug]
 * @returns {string}
 *
 * Usage:
 *
 * route("/users/:id", { id: 1 }, { sort: "desc" })
 *
 * returns "/users/1?sort=desc"
 *
 * route("/users/:id", { id: 1 })
 *
 * returns "/users/1"
 *
 * route("/users", {}, { sort: "desc" })
 *
 * returns "/users/:id?sort=desc"
 *
 * route("/users/:id", {})
 *
 * returns "/users/:id"
 */
const route = (
  url: string,
  params?: Record<string, unknown>,
  slug?: Record<string, unknown>,
) => {
  if (!params) {
    return url;
  }

  const splitUrl = url.split("/").slice(1);

  const setParams = splitUrl
    .map((path) => {
      if (!path.startsWith(":")) {
        return path;
      }

      const paramKey = path.replace(":", "");
      const paramValue = params ? params[paramKey] : "";
      return paramValue;
    })
    .join("/");

  if (slug) {
    const formatSlug = Object.entries(slug).map(([key, value], index) => {
      if (index === 0) {
        return `?${key}=${value}`;
      }
      return `&${key}=${value}`;
    });

    return `/${setParams + formatSlug.join("")}`;
  }

  return `/${setParams}`;
};

export default route;
