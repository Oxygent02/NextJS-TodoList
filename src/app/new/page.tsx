"use client";

import ButtonSubmit from "@/components/elements/ButtonSubmit/ButtonSubmit";
import Link from "next/link";
import { createTodo } from "./actions/CreateTodo";
import { experimental_useFormState as useFormStatus } from "react-dom";
import Header from "./Header";

const initialState = {
  message: null,
};

export default function Create() {
  const [state, formAction] = useFormStatus(createTodo, initialState);

  return (
    <div className="container">
      <Header />

      <form action={formAction} className="flex gap-2 flex-col">
        {state?.message ? (
          <div className="p-2 bg-red-800 items-center text-red-100 leading-none flex rounded" role="alert">
            <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
            <span className=" mr-2 text-left flex-auto">{state?.message}</span>
          </div>
        ) : (
          <></>
        )}

        <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" placeholder="Let's finish our job!" />

        <div className="flex gap-1 justify-end">
          <Link href=".." className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
            Cancel
          </Link>
          <ButtonSubmit />
        </div>
      </form>
    </div>
  );
}
