import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const webhook = process.env.DISCORD_WEBHOOK;
  await fetch(webhook!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "New Window Cleaning Estimate",
          color: 5814783,
          fields: [
            { name: "Window Panes", value: String(body.panes) },
            { name: "Estimated Price", value: `$${body.price}` },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });
  return NextResponse.json({ success: true });
}
