import News from "@/components/News/News";
import {NewsApi} from "@/services/news/api";

export default async function NewsPage()  {

    const news = await NewsApi.getAll()
    return (
        <div>
            <News news={news.data} />
        </div>
    );
};