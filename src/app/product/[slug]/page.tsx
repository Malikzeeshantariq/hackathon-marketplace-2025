
import Email from '@/components/email';
import Featureblock from '@/components/featureblock';
import Footer from '@/components/footer';
import Footerend from '@/components/footerend';
import Header from '@/components/header';
import Productdetails from '@/components/productdetails';
import Topnav from '@/components/topnav';
import AddToBasketButton from '@/components/ui/AddToBasketButton';
import { urlFor } from '@/sanity/lib/image';
import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
 
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product){
        return notFound();
    }
    const isOutOfStock = product.quantity != null && product.quantity <= 0;

    return (
        <>
        <Topnav/>
          <Header/>
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className={'relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}'}>
        {/* Product Image */}
        {product.image && (
            <Image
            className="object-contain translate-transform duration-300 group-hover:scale-105"
            src={urlFor(product.image).url()}
            alt={product.name ?? "Product Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

        {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
        )}
        </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
                    <div className='text-lg font-semibold mb-4'>
                        ${product.price?.toFixed(2)}
                    </div>
                    <div>Description
                    <div className='prose max-w-none mb-6'>{product.description}
                     </div>
                     </div>
                     <div>
                            <ul className='list-disc pl-5'>
                                    {product.features?.slice(0, 3).map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                        <div className='mt-10'>Dimensions
                            <div className='flex gap-10 mt-4'>
                            <div >
                                <div>Height</div>
                                <div>{product.dimensions?.height}</div>
                            </div>
                            <div>
                                <div>Width</div>
                                <div>{product.dimensions?.width}</div>
                            </div>
                            <div>
                                <div>Depth</div>
                                <div>{product.dimensions?.depth}</div>
                            </div>
                            </div>
                           
                        </div>

                </div>

                 <div className='mt-6'>
                    <AddToBasketButton product={product} disabled={isOutOfStock} />
                </div>
            </div>
      </div>
     </div>
     <Productdetails/>
     <Featureblock/>
     <Email/>
     <Footer/>
    <Footerend/>   
     </>
    )
  
}

export default ProductPage;
