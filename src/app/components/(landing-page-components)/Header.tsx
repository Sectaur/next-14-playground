import React, { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Videos", href: "/videos" },
    { name: "Webinar", href: "/webinar" },
    { name: "Lab", href: "/learningLab" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication logic
    if (email && password) {
      setIsAuthenticated(true);
      setIsLoginModalOpen(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Add any additional logout logic here (e.g., clearing tokens, redirecting)
  };

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#23AAC9] rounded-full mr-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#272727] text-white w-[300px]"
            >
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    passHref
                  >
                    <Button
                      variant="ghost"
                      className="justify-start text-[#23AAC9] rounded-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Image
            src={logo}
            alt="Learning Logo"
            width={300}
            height={200}
            className="w-[150px] md:w-[200px] h-auto mr-2"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              passHref
            >
              <Button
                variant="ghost"
                className="text-[#23AAC9] rounded-full hover:bg-[#e6e8e8] hover:text-[#23AAC9] hover:border-1 hover:border-[#23AAC9] transition-colors duration-300 ease-in-out"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <div className="w-10 h-10 relative overflow-hidden rounded-full">
                <Image
                  src="/hp-photo.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#23AAC9] rounded-full hover:bg-[#e6e8e8] hover:text-[#23AAC9] transition-colors duration-300 ease-in-out"
                onClick={handleLogout}
              >
                <LogOut size={20} />
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              className="bg-[#272727] text-[#23AAC9] border-[#23AAC9] hover:bg-[#23AAC9] hover:text-[#272727] rounded-full transition-colors duration-300 text-sm px-3 py-1"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Login
            </Button>
          )}
        </div>
      </nav>

      <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#272727] text-white">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#393939] text-white border-[#23AAC9]"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#393939] text-white border-[#23AAC9]"
            />
            <Button type="submit" className="w-full bg-[#23AAC9] text-[#272727] hover:bg-[#1C89A2]">
              Login
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
