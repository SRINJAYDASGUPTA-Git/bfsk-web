import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex-container flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href='/'>
                    <Image src='/assets/images/logo.svg' width={300} height={38} alt="logo" />
                </Link>

                <p>©Bharatiya Federation of Shotokan Karate 2024. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer