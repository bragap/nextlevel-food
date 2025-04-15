import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "@/app/_components/Header/Header.module.css";
import HeaderBg from '@/app/_components/Header/HeaderBg';

export default function Header() {
    return (
        <>
            <HeaderBg />
            <header className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image src={logo} width={100} height={100} alt="logo" className={styles.img} priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}