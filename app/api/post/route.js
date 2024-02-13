import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();

    const webhookUrl = process.env.WEBHOOK_URL;

    console.log(res);

    const body = { content: JSON.stringify(res) };

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    //console.log(response);

    return NextResponse.json({ res }, { status: 200 });
}
