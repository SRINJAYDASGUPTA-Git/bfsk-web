"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import NavItems from "./NavItems"
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="md:hiddenx">
            <Sheet open={isOpen} onOpenChange={setOpen}>
                <SheetTrigger className="align-middle">
                    <CiMenuFries size={25} className="text-black me-2" />
                </SheetTrigger>
                <SheetContent className="flex flex-col bg-white/80 md:hidden">
                    <p className="text-lg font-bold">BFSK</p>
                    <Separator className="border border-gray-50/80" />
                    <NavItems setOpen={setOpen} />
                </SheetContent>
            </Sheet>
        </nav >
    )
}

export default MobileNav