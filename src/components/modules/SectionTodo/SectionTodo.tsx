"use client";

import { ItemTodo } from "@/components/elements/ItemTodo/ItemTodo";
import { useEffect, useState } from "react";
import { getTodo } from "./actions/GetTodo";
import { updateStatusTodo } from "./actions/UpdateStatusTodo";
import { ItemTodoLoading } from "@/components/elements/ItemTodo/ItemTodo.loading";

export default function SectionTodo() {
  const onHandleToogle = async (id: string, complete: boolean) => {
    await updateStatusTodo(id, complete);
  };

  type Todo = {
    id: string;
    title: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
  };

  const [todos, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodo();
      if (data) {
        setTodo(data);
      } else {
        console.error("Error fetching todo list.");
      }
    };

    fetchTodo();
  }, []);

  return (
    <>
      {!todos || todos.length == 0 ? (
        <ul className="pl-4">
          {[...Array(10)].map((x, i) => (
            <ItemTodoLoading key={i} />
          ))}
        </ul>
      ) : (
        <ul className="pl-4">
          {todos.map((todo) => (
            <ItemTodo key={todo.id} {...todo} toogleTodo={onHandleToogle} />
          ))}
        </ul>
      )}
    </>
  );
}
