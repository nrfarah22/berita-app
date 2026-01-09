interface NewsItem {
    title: string;
    isoDate: string;
    image: {
        large: string;
        small: string;
    };
}

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

export default async function HeroSection() {
    const res = await fetch(
    "https://berita-indo-api-next.vercel.app/api/cnn-news/",
    { cache: "no-store" }
    );

    const data = await res.json();
    const newsItem: NewsItem[] = data.data || [];
    const hero: NewsItem = newsItem[0];
    const others: NewsItem[] = newsItem.slice(1,10);

    return (
        <section className="p-6 z-10">
        {/* Hero Utama */}
        <p className="mt-16 mb-4">Recent News</p>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-[2fr_1fr] h-[500px]">

            {/* kolom 1 */}
            <div className="relative relative overflow-hidden shadow-lg ">
                <img 
                    src={hero.image.large} 
                    alt={hero.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/50 px-6 py-4 text-white flex flex-col">
                    <h1 className="underline text-sm lg:text-lg font-bold ">{hero.title}</h1>
                    <p className="text-xs mt-3">Published on {formatDate(hero.isoDate)}</p>
                </div>
            </div>

            {/* kolom 2 */}
            <div className="bg-white flex flex-col gap-y-4 h-full overflow-y-scroll">
                {others.map((item: NewsItem, i: number) => (
                    <div
                        key={i}
                        className="flex">
                            <img
                                src={item.image.small}
                                alt={item.title}
                                className="w-40 h-full object-cover"
                            />
                            <div className="p-3 bg-[#F0F0F0] w-full">
                                <h2 className="underline text-sm font-semibold text-gray-800">{item.title}</h2>
                                <p className="text-xs mt-2 text-gray-500">Published on {formatDate(item.isoDate)}
                                </p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}
