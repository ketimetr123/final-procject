import React from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    status: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card border rounded-lg p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-green-500">{product.status}</p>
      <p className="text-gray-700">{product.price}</p>
    </div>
  );
};

export default ProductCard;
