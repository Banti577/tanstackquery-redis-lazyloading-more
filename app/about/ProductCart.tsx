
import React from 'react'
import Loader from '@/components/Loader'

const LazyImage = React.lazy(() => import('@/utils/LazyImage'));

import { Suspense } from 'react'

const ProductCart = ({ product }: any) => {
    return (

        <div className=' flex justify-center items-center flex-wrap list-none'>

            {product.map((post: any) => (
                <div className='m-5 border p-1' key={post.id}>
                    <Suspense fallback={<Loader />}>
                        <LazyImage
                            src={post.thumbnail}
                            width={200}
                            height={200} alt="Profile Picture"
                            className="rounded-lg"
                        />
                    </Suspense>
                    <li >{post.title}</li>
                </div>

            ))}
        </div>
    )
}

export default ProductCart