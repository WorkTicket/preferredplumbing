export const onRequest = async ({ request, next }: { request: Request; next: () => Promise<Response> }) => {
  const url = new URL(request.url);
  if (url.hostname === "callpreferredplumbing.com") {
    url.hostname = "www.callpreferredplumbing.com";
    return Response.redirect(url.toString(), 301);
  }
  return next();
};
