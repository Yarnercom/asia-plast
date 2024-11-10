import React from 'react';
import { notFound } from 'next/navigation';
import ProductInternal from "@/components/Products/ProductInternal";
import { ProductsApi } from "@/services/products/api";
import { Product as ProductType } from "@/services/products/entity";
import { Metadata } from "next";

interface ProductPageProps {
    params: {
        id: string;
        productId: string;
    };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const productId = parseInt(params.productId);
    if (isNaN(productId)) {
        return { title: 'Неверный формат ID продукта' };
    }

    const response = await ProductsApi.get(productId);
    const productName = response.data?.name || 'Продукты';

    return { title: `Продукт - ${productName}` };
}

export default async function Page({ params }: ProductPageProps) {
    const { productId } = params;

    const lastId = parseInt(productId);
    if (isNaN(lastId)) {
        return <p>Неверный формат ID продукта</p>;
    }

    const response = await ProductsApi.get(lastId);

    if (!response || !response.data) {
        notFound();
    }

    const product = response.data as ProductType;

    return (
        <div>
            <ProductInternal product={product} />
        </div>
    );
}
