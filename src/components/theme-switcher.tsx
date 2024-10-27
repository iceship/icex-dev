"use client";

import { IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  console.log("theme:", theme);
  return (
    <div>
      <Switch
        id="theme-switcher"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme("light")}
      />
      <IconSun />
    </div>
  );
}
