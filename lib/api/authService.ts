import axios from "@/lib/axios";

export const authService = {
  // REGISTER FUNCTION (Fake API simulation)
  register: async (data: any) => {
    console.log("Registering user:", data);

    // Simulate delay (1 second)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      status: 200,
      message: "User registered successfully!",
    };
  },

  login: async (data: { email: string; password: string }) => {
    console.log("Logging in user:", data);

    // Simulate a delay like real API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple mock check (replace with actual backend logic if needed)
    if (data.email === "admin@gmail.com" && data.password === "12345678") {
      return {
        status: "success",
        message: "Login successful",
        data: {
          token: "mock-jwt-token-12345678",
          user: {
            name: "Admin User",
            email: data.email,
          },
        },
      };
    } else {
      return {
        status: "error",
        message: "Invalid credentials",
      };
    }
  },
};

