// import { cookies } from "next/headers";

type Product = {
    id:number,
    title:string,
    price:number,
    description: string,
}


export default async function ProductsPage(){
    // const detailsResponse=await fetch("http://localhost:3001/products/1");
    // const details =await detailsResponse.json()
    
    //3 const cookieStore =cookies();
    //3 cookieStore.get("theme");//2 after use dynamic function next js avoid caching 


    const response = await fetch('http://localhost:3001/products',{
        // cache: "no-store"  /*1 Opting Out of Caching*/
        next:{
            revalidate:10
        }
    });
    const products = await response.json();

    return (
        <ul className="space-y-4 p-4">
            {products.map((product: Product)=>(
                <li 
                key={product.id}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    <h2 className="text-xl font-semibold">
                        {product.title}
                    </h2>
                    <p>{product.description}</p>
                    <p className="text-lg font-medium">{product.price}</p>
                 
                </li>
            ))}
        </ul>
    );
}