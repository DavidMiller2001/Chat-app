import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>This is chat app I guess...</h1>
      <SignOutButton />
    </main>
  );
}
