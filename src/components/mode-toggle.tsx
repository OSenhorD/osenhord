import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ModeToggle() {
  const { setTheme } = useTheme()

  // Lê o tema efetivo do DOM para respeitar o modo "system".
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button variant="ghost" size="icon" aria-label="Alternar tema" onClick={toggle}>
      <Sun className="hidden dark:block" />
      <Moon className="dark:hidden" />
    </Button>
  )
}
