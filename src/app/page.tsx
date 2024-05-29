"use client";

import { UserButton } from "@clerk/nextjs";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface User {
  avatarUrl: string;
  username: string;
}

export default function HomePage() {
  const messages = ["test message", "test message 2"];
  const users: User[] = [
    { avatarUrl: "", username: "user1" },
    { avatarUrl: "", username: "user2" },
    { avatarUrl: "", username: "user3" },
  ];
  return (
    <main>
      <Card className="w-screen max-w-md">
        <CardHeader>
          <CardTitle>Friends</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {users.map((user, idx) => (
              <li key={idx} className="flex w-full items-center">
                <Avatar>
                  <AvatarImage src={user.avatarUrl} alt="Avatar Image" />
                  <AvatarFallback>DM</AvatarFallback>
                </Avatar>
                {user.username}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
