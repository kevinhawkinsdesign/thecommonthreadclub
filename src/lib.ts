// Prefix internal paths with the configured base so links work on
// both a custom domain and <user>.github.io/<repo>.
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
