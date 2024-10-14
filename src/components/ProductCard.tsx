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
      <h2 className="text-[#0E1422] text-[14px] mt-[15px]">{product.name}</h2>
      <span className="border-2 border-[#E6E7E8] rounded-xl text-[12px] text-[#0E1422] px-[16px] py-[2px]">
        {product.status}
      </span>
      <span className="text-[#474B57] px-[10px]">{product.price}</span>
    </div>
  );
};

export default ProductCard;
