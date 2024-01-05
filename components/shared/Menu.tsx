import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiMenuAlt3 } from "react-icons/hi"
import NavItems from "./NavItems"

const Menu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <HiMenuAlt3 size={35} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <NavItems />
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Menu