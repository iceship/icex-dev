"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="hidden font-bold lg:inline-block">👻icex.dev</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/blog"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/blog" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}
