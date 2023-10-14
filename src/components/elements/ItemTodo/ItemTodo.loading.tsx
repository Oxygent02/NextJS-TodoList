"use client";

export function ItemTodoLoading() {
  return (
    <li className="animate-pulse flex gap-1 items-center py-1">
      <div className="bg-slate-700 h-4 w-4"></div>
      <div className="bg-slate-700 h-2 w-5/6 rounded-full"></div>
    </li>
  );
}
