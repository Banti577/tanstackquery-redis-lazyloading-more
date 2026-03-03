'use client'

import { useQuery } from '@tanstack/react-query'


import Loader from '@/components/Loader'

import { fetchPosts } from '@/hooks/useFetchApi'
import ProductCart from './ProductCart'



export default function About() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['product'],
        queryFn: fetchPosts,
    })

    if (isLoading) return <Loader />
    if (error) return <p>{error.message}</p>

    return (
       
        <ProductCart product={data?.products} />

    )
}