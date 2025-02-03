export const AppRoutes = {
  auth: {
    login: {
      name: "login",
      path: "/login",
    },
    signup: {
      name: "signup",
      path: "/signup",
    },
    complete: {
      name: "complete",
      path: "/complete",
    },
    emailConfirmation: {
      name: "email-confirmation",
      path: "/email-confirmation",
    },
    clientType: {
      name: "client-type",
      path: "/client-type",
    },
  },
  main: {
    dashboard: {
      name: "dashboard",
      path: "/dashboard",
    },
    documents: {
      name: "documents",
      path: "/documents",
    },
    document: {
      name: "document",
      path: (id: string) => `/documents/${id}`,
    },
    profile: {
      name: "profile",
      path: "/profile",
    },
  },
};
