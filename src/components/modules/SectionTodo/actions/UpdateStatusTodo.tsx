"use server";

import { prisma } from "@/db";

export async function updateStatusTodo(id: string, complete: boolean) {
  return await prisma.todo.update({
    data: {
      complete,
    },
    where: {
      id,
    },
  });
}
