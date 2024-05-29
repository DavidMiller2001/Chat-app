import { SignOutButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <h1>This is chat app I guess...</h1>
      <SignOutButton>
        <Button variant={"destructive"}>Sign Out</Button>
      </SignOutButton>
    </main>
  );
}
