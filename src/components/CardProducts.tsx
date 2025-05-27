import { Product } from "@/types/products";
interface CardProductsProps {
  products: Product[];
}

export default function CardProducts({ products }: CardProductsProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-black">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example product card */}
        {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-black">{product.name}</h2>
                <p className="text-gray-600 text-black">${product.price}</p>
            </div>
        ))}
        {/* Repeat for more products */}
      </div>
    </div>
  );
}