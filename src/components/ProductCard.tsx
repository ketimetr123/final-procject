import React from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: string;
    status: string;
    rating: any;
    count: any;
    title: any;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // console.log(product);

  return (
    <div className="h-[500px] w-[400px] bg-[#F6F6F6] flex flex-col justify-between rounded-xl items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-[400px] h-[312px] object-contain"
      />
      <h2 className="text-[#0E1422] text-[14px] mt-[15px]">{product.title}</h2>
      <div className="flex flex-row items-center mb-[10px] gap-[10px]">
        <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
          {product.rating.count === 0 ? "Out of Stock" : "In stock"}
        </span>
        <span className="text-[#474B57] px-[10px]">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
