import { prisma } from "@/lib/prisma";
import HomeClient from "./home-client";

export default async function Page() {
  const users = await prisma.user.findMany();
  console.log(users); // tampil di terminal, bukan di browser

  return <HomeClient />;
}