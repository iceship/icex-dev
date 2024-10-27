"use client";

import { usePathname } from "next/navigation";

import { Link } from "next-view-transitions";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="hidden h-6 w-6 font-bold fade-in md:inline-block">
          👻
        </span>
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blog" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        <Link
          href="/blog/proxmox"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blog/proxmox"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Proxmox
        </Link>
      </nav>
    </div>
  );
}
