// app/api/register/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    date_of_birth,
    country,
  } = body;

  if (!firstname || !lastname || !email || !password) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  // fake delay for loading state demo
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return NextResponse.json(
    {
      message: "User registered successfully",
      user: {
        id: Date.now(),
        firstname,
        lastname,
        email,
        phone,
        date_of_birth,
        country,
      },
    },
    { status: 201 }
  );
}
