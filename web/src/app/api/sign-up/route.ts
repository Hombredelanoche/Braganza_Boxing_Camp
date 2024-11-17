"use server";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      gender: body.gender,
      phoneNumber: body.phoneNumber,
      birthday: body.birthday,
    },
  });

  const { password, ...rest } = user;
  return NextResponse.json(rest);
}
