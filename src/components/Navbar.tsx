"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Shantanu Dutta</HoveredLink>
            <HoveredLink href="/interface-design">Ashesh Bandhopadhay</HoveredLink>
            <HoveredLink href="/seo">Subhamay Dey</HoveredLink>
            <HoveredLink href="/branding">Subhraneel Goswami</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Techstack">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Kolin Java</HoveredLink>
            <HoveredLink href="/interface-design">Next Js</HoveredLink>
            <HoveredLink href="/seo">Drive API integration</HoveredLink>
            <HoveredLink href="/branding">OCR</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
