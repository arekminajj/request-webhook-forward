import { NextResponse } from "next/server";

function splitText(text, chunkSize = 2000) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
        chunks.push(text.substring(i, i + chunkSize));
    }
    return chunks;
}

export async function POST(request) {
    const webhookUrl = process.env.WEBHOOK_URL;
    const res = await request.text();
    const text = JSON.stringify(res);

    if (text.length < 2000) {
        const body = { content: text };

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    } else {
        const chunks = splitText(text);

        chunks.forEach((chunk) => {
            const body = { content: chunk };

            const response = fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
        });
    }

    //since discord webhook content max legth is 2000 characters
    //gotta split greater messages.

    //const webhookResponse = await response.text();
    //console.log(webhookResponse);

    return NextResponse.json({ res }, { status: 200 });
}
