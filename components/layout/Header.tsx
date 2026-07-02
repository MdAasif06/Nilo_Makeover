"use client";

import {
  Home,
  Sparkles,
  Heart,
  Image,
  BookOpen,
  Phone,
  Crown,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky z-50 backdrop-blur-xl bg-neutral-950/70 border-[#D4AF37]/20 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
      <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <div className="size-11 bg-gradient-to-br from-[#D4AF37]/30 to-transparent rounded-full border-[#D4AF37]/50 border-1 border-solid flex justify-center items-center">
            <Crown className="size-5 text-[#D4AF37]" />
          </div>

          <div className="leading-none flex flex-col">
            <span className="font-serif text-[#FFF8F0] text-lg leading-7 tracking-[2.88px]">
              NILO
            </span>

            <span className="text-[#D4AF37] text-[10px] tracking-[6.72px]">
              MAKEOVER SALON
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex justify-center items-center gap-8">
          <a className="font-medium text-[#FFF8F0] text-sm leading-5 border-[#D4AF37] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1.5">
            <Home className="size-4 text-[#D4AF37]" />
            Home
          </a>

          <a className="border-transparent transition-colors text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1.5">
            <Sparkles className="size-4" />
            Services
          </a>

          <a className="border-transparent transition-colors text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1.5">
            <Heart className="size-4" />
            Bridal Packages
          </a>

          <a className="border-transparent transition-colors text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1.5">
            <Image className="size-4" />
            Gallery
          </a>

          <a className="border-transparent transition-colors text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1.5">
            <BookOpen className="size-4" />
            Academy
          </a>

          <a className="border-transparent transition-colors text-[#a1a1a1] text-sm leading-5 border-black/1 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-0.5 items-center gap-1.5">
            <Phone className="size-4" />
            Contact
          </a>
        </nav>

        <Button className="rounded-full bg-[#D4AF37] text-[#0B0B0B] px-5 gap-2">
          <MessageCircle className="size-4" />
          WhatsApp
        </Button>
      </div>
    </header>
  );
}