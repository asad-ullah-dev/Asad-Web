import axios from "@/lib/axios";

export const authService = {
  // REGISTER FUNCTION
  register: async (data: any) => {
    console.log("Registering user:", data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email already exists
    const exists = users.find((user: any) => user.email === data.email);
    if (exists) {
      throw new Error("User already exists with this email.");
    }

    // Add new user
    users.push({ ...data, role: "user" });
    localStorage.setItem("users", JSON.stringify(users));

    return {
      status: 200,
      message: "User registered successfully!",
    };
  },

  // LOGIN FUNCTION
  login: async (data: { email: string; password: string }) => {
    console.log("Logging in user:", data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // ✅ Check for admin
    if (data.email === "ullaasad315@gmail.com" && data.password === "12345678") {
      return {
        status: "success",
        message: "Admin login successful",
        data: {
          token: "admin-token-123",
          user: {
            name: "Admin",
            email: data.email,
            role: "admin",
          },
        },
      };
    }

    // ✅ Check for normal user
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.email === data.email && u.password === data.password
    );

    if (user) {
      return {
        status: "success",
        message: "User login successful",
        data: {
          token: "user-token-456",
          user,
        },
      };
    } else {
      return {
        status: "error",
        message: "Invalid credentials",
      };
    }
  },

  // ✅ Get All Users
  getAllUsers: () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users;
  },

  // ✅ Delete User
  deleteUser: (email: string) => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users = users.filter((u: any) => u.email !== email);
    localStorage.setItem("users", JSON.stringify(users));
  },

  // ✅ Update User
  updateUser: (updatedUser: any) => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users = users.map((u: any) => (u.email === updatedUser.email ? updatedUser : u));
    localStorage.setItem("users", JSON.stringify(users));
  },
};
