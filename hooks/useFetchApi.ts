export async function fetchPosts() {
    const res = await fetch('https://dummyjson.com/products')
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}