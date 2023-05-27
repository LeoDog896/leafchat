import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";

const sessions: {
  privateUUID: string,
  publicUUID: string,
  name: string,
}[] = [];

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const name = form.get("name");

    if (typeof name !== "string") {
      return new Response("Invalid name", { status: 400 });
    }

    const privateUUID = crypto.randomUUID();
    const publicUUID = crypto.randomUUID();

    sessions.push({
      privateUUID,
      publicUUID,
      name,
    });

    const response = new Response(null, {
      status: 303,
      headers: {
        location: `/chat`,
      },
    });
    
    setCookie(response.headers, {
      name: "session",
      value: privateUUID,
      path: "/",
      httpOnly: true,
    })
    return response;
  },
};

export default function Chat() {
  return (
    <>
      <Head>
        <title>Leaf Chat</title>
      </Head>
      <div>
        <h1>Chat</h1>
        {/* TODO */}
      </div>
    </>
  );
}