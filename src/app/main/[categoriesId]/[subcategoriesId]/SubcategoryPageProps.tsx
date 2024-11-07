"use client";

import React from "react";

interface SubcategoryPageProps {
    categoryId: string;
    subcategoryId: string;
}

const SubcategoryPage: React.FC<SubcategoryPageProps> = () => {

    return (
        <div>
            <h1>Подкатегории</h1>
            {/*<p>Category ID: {categoryId}</p>*/}
            {/*<p>Subcategory ID: {subcategoryId}</p>*/}
        </div>
    );
};

export default SubcategoryPage;
