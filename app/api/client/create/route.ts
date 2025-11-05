import { sendAdminNotification, sendThankForOrder } from "@/helpers/send-message";
import { prisma } from "@/lib/prisma";
import type { Client } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name, messanger, message, userName } = await req.json();
    if (!messanger) {
      return NextResponse.json({ message: "Messanger is required" }, {status: 400});
    }
    const client: Client = await prisma.client.create({
      data: {
        name,
        email,
        messanger,
        message,
        userName
      },
    });

   await sendThankForOrder(client);
  await sendAdminNotification(client);

    return NextResponse.json({message: 'Client success created'}, {status: 201})
  } catch (error) {
    console.log("CREATE_CLIENT", error);
    return NextResponse.json({message: 'Server Error'}, {status: 500});
  }
}
