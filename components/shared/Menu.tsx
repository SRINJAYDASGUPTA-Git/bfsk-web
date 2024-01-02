import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { headerLinks } from "@/constants"
import { HiMenuAlt3 } from "react-icons/hi"
import NavItems from "./NavItems"

const Menu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <HiMenuAlt3 size={40} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <NavItems />
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Menu