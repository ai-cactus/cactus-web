import GhostContentAPI from "@tryghost/content-api";

export const fetchBlogs = async () => {
  try {
    const api = new GhostContentAPI({
      key: "554fcc7ef6202a425a38e885f7",
      version: "v5.0",
      url: "http://localhost:2368",
      makeRequest: async ({ url, method, params, headers }) => {
        const apiUrl = new URL(url);

        Object.keys(params).map((key) =>
          apiUrl.searchParams.set(key, encodeURIComponent(params[key]))
        );

        try {
          const response = await fetch(apiUrl.toString(), { method, headers });
          const data = await response.json();
          return { data };
        } catch (error) {
          console.error(error);
        }
      },
    });

    const blogs = await api.posts.browse({});
    return blogs;
  } catch (error) {
    console.log(error);
  }
};
