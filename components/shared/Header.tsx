import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu";
import NavItems from "./NavItems";
const Header = () => {
    return (
        <header className="w-full border-b bg-gray-200 ">
            <div className="wrapper flex items-center justify-between md:justify-center ">
                <Link href='/' >
                    <Image src='/assets/images/logo.svg' width={250} height={20} alt="logo" className="w-[250px] md:w-[500px]"></Image>
                </Link>
                <div className="flex items-center justify-end">

                    <div className="flex w-32 justify-end gap-3 md:hidden" >
                        <Menu />
                    </div>
                </div>
            </div>
            <nav className="md:flex-between py-4 hidden w-full bg-gray-300 px-8 text-sm border-t border-b shadow-xl">
                <NavItems />
            </nav>
        </header>
    )
}

export default Header