export async function fetchGuests() {
    const res = await fetch('http://localhost:8088/api/guests', {
        headers: { Accept: 'application/json' },
        next: { revalidate: 0 } // No cache
    });

    if (!res.ok) {
        throw new Error('Error fetching guests');
    }

    return res.json();
}