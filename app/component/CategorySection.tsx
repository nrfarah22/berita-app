interface NewsItem {
    title: string;
    image: {
        small: string;
    };
}

interface Category {
    key: string;
    label: string;
}

const categories: Category[] = [
    {key: "nasional", label: "Nasional"},
    {key: "internasional", label: "Internasional"},
    {key: "teknologi", label: "Teknologi"},
    {key: "olahraga", label: "Olahraga"},
    {key: "ekonomi", label: "Ekonomi"},
    {key: "hiburan", label: "Hiburan"},
];

async function getCategoryNews(category: string): Promise<NewsItem[]> {
    const res = await fetch(
        `https://berita-indo-api-next.vercel.app/api/cnn-news/${category}`,
        {cache: "no-store"}
    );
    const data = await res.json();
    return data.data.slice(0,3);
}

export default async function CategorySection() {
    const categoryData = await Promise.all(
        categories.map(async (cat) => ({
            ...cat,
            news: await getCategoryNews(cat.key),
        }))
    );

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
            {categoryData.map((category) => (
                <div key={category.key}>
                    <h2 className="font-bold text-lg">
                        {category.label}
                    </h2>
                    <div className="space-y-3">
                        {category.news.map((item, i) => (
                            <div
                                key={i}
                                className="flex bg-[#F0F0F0] h-20 mt-4"
                            >
                                <img src={item.image.small} alt={item.title} className="w-30 h-full" />
                                <div className="pl-2 flex flex-1 items-center">
                                    <p className="text-xs font-semibold underline text-left">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}