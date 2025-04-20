"use client";

import AnimatedLogo from "@/assets/images/logo/AnimatedLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { logout } from "@/components/auth/AuthService/index";
import { protectedRoutes } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/contex/UserContext";
import { Menu, X, LogOut } from "lucide-react";

import CartSheet from "./CartSheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();


  
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
  return (
    <header className="w-full border-b bg-white dark:bg-black sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          {/* MediMart logo */}
          <AnimatedLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              {item.label}
            </Link>
          ))}
          <CartSheet />
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <CartSheet />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
               </nav>
               <div className="mt-4">
            {user ? (
              <Button
                className="bg-red-500 text-white w-full"
                onClick={() => {
                  handleLogOut();
                  setMenuOpen(false);
                }}
              >
                <LogOut size={16} className="mr-2" />
                Log Out
              </Button>
            ) : (
              <Link href="/login">
                <Button className="w-full mt-2 rounded-full" variant="outline" onClick={() => setMenuOpen(false)}>
                  Login
                </Button>
              </Link>
            )}
          </div>
          </div>
      )}
    </header>
  );
};

export default Navbar;
