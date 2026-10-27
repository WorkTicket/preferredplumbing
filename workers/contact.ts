import { onRequestPost } from "../functions/api/contact";

export default {
  async fetch(request: Request, env: Parameters<typeof onRequestPost>[0]["env"]) {
    if (request.method !== "POST") {
      return Response.json({ success: false, error: "Method not allowed." }, { status: 405 });
    }
    return onRequestPost({ request, env });
  },
};
