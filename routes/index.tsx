import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leaf Chat</title>
      </Head>
      <div>
        <h1>Leaf Chat</h1>
        <p>Leaf Chat is a simple, anonymous, channel-based chat room.</p>
        <form action="/chat" method="post">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
          <button type="submit">Join</button>
        </form>
      </div>
    </>
  );
}
