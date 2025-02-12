'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex items-center justify-center h-full z-10'>
            <Link href="/education">Education</Link>
        </div>
    )
}