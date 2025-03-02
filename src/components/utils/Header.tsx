import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Button } from "@/components/ui/button";
  import { ModeToggle } from "../config/mode-toggle";
  import Image from "next/image";
  import Link from "next/link";
  import { MenuIcon } from "lucide-react";
  
  export default function Header() {
    return (
      <div className="top-5 fixed inset-0 flex justify-center text-center z-50 h-fit">
        <Menubar className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-[#ffffffcb] dark:bg-[#0c0a09]">
          {/* Logo - Visible on all screens */}
          <MenubarMenu>
            <Image
              width={100}
              height={50}
              draggable="false"
              src="../logo-globoo.svg"
              alt="Toma"
            />
          </MenubarMenu>
  
          {/* Main Menu Items - Visible on screens > 540px (sm and up) */}
          <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-4 text-black dark:text-white">
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/">Home</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/bank">Banco</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/exchange">Trocas</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/escrow">Escrow</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/carteira">Carteiras</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/contatos">Contato</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <ModeToggle />
            </MenubarMenu>
          </div>
  
          {/* Mobile Menu (Sheet) - Visible only on screens ≤ 540px */}
          <div className="sm:hidden absolute top-0 right-1">
            <MenubarMenu>
              <Sheet>
                <SheetTrigger>
                  <Button variant="outline" size="icon">
                    <MenuIcon className="h-[1.2rem] w-[1rem] transition-all" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                    <Image
                    width={100}
                    height={50}
                    draggable="false"
                    src="../logo-globoo.svg"
                    alt="Toma"
                    />
                    </SheetTitle>
                    <SheetDescription className="space-y-4 pt-4">
                      <Link
                        href="/"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Home
                      </Link>
                      <Link
                        href="/bank"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Banco
                      </Link>
                      <Link
                        href="/exchange"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Trocas
                      </Link>
                      <Link
                        href="/escrow"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Escrow
                      </Link>
                      <Link
                        href="/carteira"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Carteiras
                      </Link>
                      <Link
                        href="/contatos"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Contato
                      </Link>
                      <div className="pt-4">
                        <ModeToggle />
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </MenubarMenu>
          </div>
        </Menubar>
      </div>
    );
  }