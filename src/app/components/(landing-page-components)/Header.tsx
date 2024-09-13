import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from 'next/link';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Videos", href: "/videos" },
    { name: "Webinar", href: "/webinar" },
    { name: "Lab", href: "/learningLab" },
    { name: "TI-RADS", href: "/tirads", dropdownItems: [
      { name: "Overview", href: "/" },
      { name: "Calculator", href: "/tirads" },
      { name: "Videos", href: "/videos" },
    ]},
  ];

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="md:hidden">
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
          </div>
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
            item.dropdownItems ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-[#23AAC9] rounded-full hover:bg-[#e6e8e8] hover:text-[#23AAC9] hover:border-1 hover:border-[#23AAC9] transition-colors duration-300 ease-in-out">
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.dropdownItems.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.name}>
                      <Link href={dropdownItem.href} className="w-full">
                        {dropdownItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.name} href={item.href} passHref>
                <Button variant="ghost" className="text-[#23AAC9] rounded-full hover:bg-[#e6e8e8] hover:text-[#23AAC9] hover:border-1 hover:border-[#23AAC9] transition-colors duration-300 ease-in-out">
                  {item.name}
                </Button>
              </Link>
            )
          ))}
        </div>
        <Button
          variant="outline"
          className="bg-black text-[#23AAC9] border-[#23AAC9] hover:bg-[#23AAC9] hover:text-[#272727] rounded-full transition-colors duration-300 text-sm px-3 py-1"
        >
          Login
        </Button>
      </nav>
    </header>
  );
};

export default Header;
