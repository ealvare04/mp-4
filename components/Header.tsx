import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <h1>
                HERO SEARCH
            </h1>
            <nav>
                <div>
                    <Link href="/">
                        Home
                    </Link>
                </div>
            </nav>
        </header>
    )
}