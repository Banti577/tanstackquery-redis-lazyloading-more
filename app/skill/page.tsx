'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchPosts } from '@/hooks/useFetchApi'
import Loader from '@/components/Loader'

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

interface Review {
    reviewer: string;
    comment: string; 
    rating: number;
    date: string;
}

interface Product {
    id: number;
    title: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    sku: string;
    availabilityStatus: string;
    minimumOrderQuantity: number;
    weight: number;
    dimensions: Dimensions;
    images: string[];
    thumbnail: string;
    tags: string[];
    shippingInformation: string;
    returnPolicy: string;
    warrantyInformation: string;
    reviews: Review[];
    meta: Meta;
}

const Skill = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['product'],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
    })

    if (isLoading) return <Loader />
    if (error) return <p>{error.message}</p>

    console.log('product is ', data);


    return (
        <div>
            <h2 className='bg-red-500'>Skill</h2>
            <div>
                <ul>
                    {data?.products.map((post: Product) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skill