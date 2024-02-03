"use client"

import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = (props:any) => {
    const pathname = usePathname();
    return (
        <ul className="md:items-center md:justify-between flex w-full flex-col items-start gap-5 md:flex-row text-sm md:px-20">
            {headerLinks.map((link) => {
                const isActive = pathname === link.route
                return (<li
                    key={link.route}
                    className={`${isActive && 'text-primary-500'
                        } flex-center white-space-nowrap `}
                >
                    <Link href={link.route} onClick={() => props.setOpen(false)}>
                        <span className="lg:text-lg text-xs ">
                            {link.label}
                        </span>
                    </Link>
                </li>)
            })}
        </ul>
    )
}

export default NavItems