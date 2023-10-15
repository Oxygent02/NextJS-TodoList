"use server";

import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function createTodo(prevState: any, formData: FormData) {
  try {
    const title = formData.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Please use informable title");
    }

    await prisma.todo.create({
      data: { title, complete: false },
    });
  } catch (err: any) {
    console.error(err);
    return { message: err.message };
  }

  redirect(".");
  return { message: null };
}
