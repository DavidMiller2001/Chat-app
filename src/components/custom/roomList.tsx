"use client";

import { useState } from "react";

interface User {
  avatarUrl: string;
  username: string;
}

interface Room {
  id: string;
  name: string;
  members?: User[];
}

export default function RoomList() {
  // Mock Data
  const messages = ["test message", "test message 2"];
  const users: User[] = [
    { avatarUrl: "", username: "user1" },
    { avatarUrl: "", username: "user2" },
    { avatarUrl: "", username: "user3" },
  ];

  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", name: "Room 1" },
    { id: "2", name: "Room 2" },
    { id: "3", name: "Room 3" },
  ]);

  return (
    <ul>
      {rooms.map((room, idx) => (
        <li key={idx} className="flex w-full items-center border p-4">
          <h2>{room.name}</h2>
        </li>
      ))}
    </ul>
  );
}
