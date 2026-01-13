import Link from "next/link";

interface NewsItem {
    title: string;
    isoDate: string;
    image: {
        large: string;
        small: string;
    };
    link: string;
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
        <section className="p-6 z-10 ">
        {/* Hero Utama */}
        <p className="mt-16 mb-4">Recent News</p>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-[2fr_1fr] h-[500px]">

            {/* kolom 1 */}
            <div className="relative overflow-hidden shadow-lg ">
                <Link
                    href={hero.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                >
                    <img 
                    src={hero.image.large} 
                    alt={hero.title}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/50 px-6 py-4 flex flex-col">
                        <h1 className="underline text-sm lg:text-lg font-bold ">{hero.title}</h1>
                        <p className="text-xs mt-3">Published on {formatDate(hero.isoDate)}</p>
                    </div>
                </Link>
            </div>

            {/* kolom 2 */}
            <div className="flex flex-col gap-y-4 h-full overflow-y-scroll">
                {others.map((item: NewsItem, i: number) => (
                    <Link
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex cursor pointer hover:bg-gray-200 transition"
                    >
                        <img
                            src={item.image.small}
                            alt={item.title}
                            className="w-40 h-full object-cover"
                        />
                        <div className="p-3 w-full">
                            <h2 className="underline text-sm font-semibold">{item.title}</h2>
                            <p className="text-xs mt-2">Published on {formatDate(item.isoDate)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </section>
    );
}
