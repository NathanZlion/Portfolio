
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <div> Home </div>

            {/* link to go to /education */}
            <Link href="/education">Education</Link>
        </div>
    )
}