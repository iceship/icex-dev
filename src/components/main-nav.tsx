"use client";

import { usePathname } from "next/navigation";

import { Link } from "next-view-transitions";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-4 flex items-center space-x-2">
        <span className="h-6 w-6 font-bold">👻</span>
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="hidden items-center gap-4 text-sm md:flex">
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
        <Link
          href="/blog/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blog/about"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          개발자 소개
        </Link>
      </nav>
    </div>
  );
}
