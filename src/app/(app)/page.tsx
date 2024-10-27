"use client";

import React from "react";

import Welcome from "@/app/mdx-page/page.mdx";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="container flex h-14 max-w-screen-2xl flex-col items-center">
      <h1>Hello World!</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <article className="prose prose-neutral">
        <Welcome />
      </article>
    </div>
  );
}
