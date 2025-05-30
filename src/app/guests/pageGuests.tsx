'use client';

import { useEffect, useState } from 'react';
import { fetchGuests } from '../api/apiGuests';

export default function GuestsPage() {
    const [guests, setGuests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGuests()
            .then(data => setGuests(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando...</p>;

    return (
        <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Lista de huéspedes</h1>
    <ul>
    {guests.map((g, idx) => (
            <li key={idx} className="mb-2">
        {g.name} – {g.email}
    </li>
))}
    </ul>
    </div>
);
}
