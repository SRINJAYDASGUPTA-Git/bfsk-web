import Image from "next/image"
import Link from "next/link"
import { HiMenuAlt3 } from "react-icons/hi";
import Menu from "./Menu";
import NavItems from "./NavItems";
const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex place-items-center justify-center md:place-items-end">
                <Link href='/'>
                    <Image src='/assets/images/logo.svg' width={330} height={20} alt="logo"></Image>
                </Link>
                <div className="flex items-center justify-end">

                    <div className="flex w-32 justify-end gap-3 md:hidden" >
                        <Menu />
                    </div>
                </div>
            </div>
            <nav className="md:flex-between hidden w-full bg-primary-50 px-16">
                <NavItems />
            </nav>
        </header>
    )
}

export default Header