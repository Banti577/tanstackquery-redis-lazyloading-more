'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchPosts } from '@/hooks/useFetchApi'
import Loader from '@/components/Loader'

const Skill = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['product'],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
    })

    if (isLoading) return <Loader />
    if (error) return <p>{error.message}</p>


    return (
        <div>
            <h2 className='bg-red-500'>Skill</h2>
            <div>
                <ul>
                    {data?.products.map((post: any) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skill