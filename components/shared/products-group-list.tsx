"use client"

import React, { useEffect, useRef } from "react";
import { useIntersection } from 'react-use';
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  products: any[];
  categoryId: number;
  className?: string;
  listClassName?: string,
}

export const ProductsGroupList: React.FC<Props> = ({title, products,categoryId, className, listClassName}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId) 
  const intersectionRef = useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(intersectionRef, {
  threshold: 0.4
  });

  useEffect(() => {
    if(intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
      console.log(categoryId)
    }
  },[intersection?.isIntersecting] )

  return (
    <div>
      <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
    </div>
  )
} 