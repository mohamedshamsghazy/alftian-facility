"use client"

import * as React from "react"
import {
  Calculator,
  Settings,
  User,
  Search,
  Phone,
  LayoutGrid
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)


  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (id: string) => {
    setOpen(false)
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Command Menu"
        className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-xs text-white/50 hover:text-white hover:border-gold/50 transition-all cursor-pointer shadow-lg"
      >
        <Search className="w-3 h-3" />
        <span>Command Menu</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="bg-emerald-950 border-emerald-900">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand("#hero")}>
              <LayoutGrid className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("#services")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Services</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("#gallery")}>
              <User className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand("#contact")}>
              <Phone className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="bg-white/10" />
          <CommandGroup heading="Tools">
            <CommandItem onSelect={() => runCommand("#calculator")}>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Eco Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}