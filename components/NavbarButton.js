import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavbarButton({ href, children }) {
    const router = useRouter();

    const isActive = router.pathname === href;

    return (
        <Link href={href}>
            <a className={`py-2 px-5 rounded-full ${isActive ? 'bg-[#FF9466] text-white' : ''}`}>
                {children}
            </a>
        </Link>
    );
}

export default NavbarButton;
