import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  // Fake credentials check
  if (email === "test@example.com" && password === "123456") {
    return NextResponse.json({
      status: "success",
      message: "Login successful",
      data: {
        token: "fake-jwt-token-123",
        user: {
          id: 1,
          name: "Asad",
          email: "test@example.com"
        }
      }
    });
  }

  return NextResponse.json(
    {
      status: "error",
      message: "Invalid credentials",
    },
    { status: 401 }
  );
}
