import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 glass-card border-border/50 hover:border-primary/50 transition-all"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
      )}
    </Button>
  );
};
