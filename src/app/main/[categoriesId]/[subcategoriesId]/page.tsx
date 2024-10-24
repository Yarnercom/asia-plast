
import SubcategoryPage from "./SubcategoryPageProps";

export default function Page({ params }: { params: { categoryId: string; subcategoryId: string } }) {
    return <SubcategoryPage categoryId={params.categoryId} subcategoryId={params.subcategoryId} />;
}
