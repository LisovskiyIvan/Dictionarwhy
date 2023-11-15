import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 mt-4">
            <img className="w-1/6" src={product.image} alt="" />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
}