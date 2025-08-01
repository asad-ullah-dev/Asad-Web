"use client";

import React, { useEffect, useState } from "react";
import { authService } from "@/lib/api/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash } from "lucide-react";


export default function page() {
  const [users, setUsers] = useState<any[]>([]);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUsers(authService.getAllUsers());
  }, []);

  const handleDelete = (email: string) => {
    authService.deleteUser(email);
    setUsers(authService.getAllUsers());
    toast.success("User deleted");
  };

  const handleSave = () => {
    authService.updateUser(editingUser);
    setUsers(authService.getAllUsers());
    setOpen(false);
    toast.success("User updated");
  };

  const handleChange = (field: string, value: string) => {
    setEditingUser({ ...editingUser, [field]: value });
  };

  return (
    <div className="pt-8">
      <h1 className="text-2xl dark:text-black font-bold mb-4">All Registered Users</h1>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Phone</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.email}>
        <TableCell>{user.firstname} {user.lastname}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.Phonenumber}</TableCell>
        <TableCell>{user.date}</TableCell>
        <TableCell className="text-right">
          <div className="flex gap-3 items-center justify-end">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <div
                className="cursor-pointer"
                  onClick={() => {
                    setEditingUser(user);
                    setOpen(true);
                  }}
                >
                <SquarePen className="w-5 h-5" />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit User Info</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="firstname" className="text-right">
                      First Name
                    </Label>
                    <Input
                      id="firstname"
                      value={editingUser?.firstname || ""}
                      onChange={(e) =>
                        handleChange("firstname", e.target.value)
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="lastname" className="text-right">
                      Last Name
                    </Label>
                    <Input
                      id="lastname"
                      value={editingUser?.lastname || ""}
                      onChange={(e) =>
                        handleChange("lastname", e.target.value)
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={editingUser?.email || ""}
                      disabled
                      className="col-span-3 bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Phonenumber" className="text-right">
                      Phone
                    </Label>
                    <Input
                      id="Phonenumber"
                      value={editingUser?.Phonenumber || ""}
                      onChange={(e) =>
                        handleChange("Phonenumber", e.target.value)
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input
                      id="date"
                      value={editingUser?.date || ""}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <Button onClick={handleSave} className="w-full mt-2">
                  Save Changes
                </Button>
              </DialogContent>
            </Dialog>
            <div
             className="cursor-pointer text-red-600"
              onClick={() => handleDelete(user.email)}
            >
              <Trash className="w-5 h-5" />
            </div>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

    </div>
  );
}
