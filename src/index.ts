import { asset } from "./assets";
import { Env } from "./environment";

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    if (request.method == 'GET') {
      try {
        let response = await asset(request, env, ctx);
        response.headers.append('access-control-allow-origin', '*');
        response.headers.append('x-content-type-options', 'nosniff');
        response.headers.append('x-xss-protection', '0');
        response.headers.append('cross-origin-resource-policy', 'cross-origin');
        response.headers.append('timing-allow-origin', '*');
        // Super aggressive cache this for a day please
        response.headers.set('cache-control', 'public, max-age: 86400');
        response.headers.set('expires', new Date(new Date().getTime() + 86400000).toUTCString());
        return response;
      } catch (e) {
        // Not found? Not worth mentioning
      }
    }

    return new Response('', {
      status: 404
    });
  },
};
