import Image from "next/image";

export default function Home() {
    return (
        <main>
            Ultra simple post request forwarding example, written in next.js.
            Forward post requests to discord webhook. ## Getting Started Create
            .env.local file with your webhook url like: ``` WEBHOOK_URL=
            YOUR_WEBHOOK_URL ``` run the development server: ```bash npm run dev
            # or yarn dev # or pnpm dev # or bun dev ``` and make json post
            request to /api/post endpoint.
        </main>
    );
}
