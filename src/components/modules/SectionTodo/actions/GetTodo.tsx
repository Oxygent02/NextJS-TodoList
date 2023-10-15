"use server";
import { prisma } from "@/db";

export async function getTodo() {
  return prisma.todo.findMany();
}
