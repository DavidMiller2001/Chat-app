"use client";

import { PopoverAnchor } from "@radix-ui/react-popover";
import RoomList from "~/components/custom/roomList";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

import { Plus } from "lucide-react";

export default function MainCard() {
  return (
    <Card className="w-screen max-w-md">
      <CardHeader className="flex justify-between">
        <Popover>
          <div className="relative flex items-center justify-between">
            <CardTitle>Rooms</CardTitle>
            <PopoverAnchor className="absolute left-[50%] top-0" />
            <PopoverTrigger asChild>
              <Button size="icon" variant="ghost">
                <Plus />
              </Button>
            </PopoverTrigger>
          </div>
          <PopoverContent align="center">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent>
        <RoomList />
      </CardContent>
    </Card>
  );
}
