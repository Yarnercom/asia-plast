"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

interface Product {
    id: string;
    name: string;
    category: string;
    subcategory: string;
}

interface ProductPageProps {
    params: {
        categoryId: string;
        subcategoryId: string;
        productId: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const { categoryId, subcategoryId, productId } = params;


    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (productId) {
            setProduct({
                id: productId,
                name: `Продукт ${productId}`,
                category: categoryId,
                subcategory: subcategoryId,
            });
        }
    }, [categoryId, subcategoryId, productId]);

    if (!product) {
        return <Loader/>;
    }

    return (
        <div>
            <h1>Продукт: {product.name}</h1>
            <p>Категория: {product.category}</p>
            <p>Подкатегория: {product.subcategory}</p>
        </div>
    );
};

export default ProductPage;
