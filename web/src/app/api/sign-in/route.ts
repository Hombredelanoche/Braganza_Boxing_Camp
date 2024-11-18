import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...rest } = user;
    return NextResponse.json(rest);
  }

  return NextResponse.json(null);
}