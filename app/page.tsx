'use client'

import { useState } from 'react'
import Link from "next/link";

export default function Home() {
    const [query, setQuery] = useState('');

    return (
        <main>
            <h1>
                Find A Hero or Villain
            </h1>
            <p>Make a search for any hero or villain!</p>

            <div>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="..."
                />

                {/* link to query if text is input, else stay at home page */}
                {/* NEED TO ADD SPINAL CASE FOR ANY SPACES IN A NAME */}

                {/* ADD MORE WORK HERE */}

                <Link href={ query ? `/character/${query.toLowerCase()}` : `/`}>
                    <button>
                        GO
                    </button>
                </Link>
            </div>
        </main>
    )
}
