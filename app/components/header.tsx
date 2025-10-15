import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Link
                href={{
                    pathname: '/',
                }}
            >
                Home
            </Link>
            <Link
                href={{
                    pathname: '/another-page',
                }}
            >
                Another page
            </Link>
        </header>
    )
}
