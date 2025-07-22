"use client"

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Mode() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex cursor-pointer items-center justify-center text-center gap-2 whitespace-nowrap text-sm font-Inter font-medium
        ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4
        [&_svg]:shrink-0 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white hover:text-gray-800 dark:text-white h-10 w-10 rounded-full"
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
}
