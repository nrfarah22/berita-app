import Link from "next/link";

interface NewsItem {
  title: string;
  contentSnippet: string;
  isoDate: string;
  link: string;
  image: {
    small: string;
    large: string;
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `https://berita-indo-api-next.vercel.app/api/cnn-news/${slug}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <section className="p-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-gray-50 ">
      <h1 className="mt-20 text-2xl font-bold capitalize mb-6">
        {slug}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-700 p-4 rounded">
        {data.data.map((item: NewsItem, i: number) => (
          <Link
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <img
              src={item.image.small}
              alt={item.title}
              className="w-28 h-20 object-cover rounded"
            />

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold underline">
                {item.title}
              </p>

              <p className="text-xs mt-2 line-clamp-2">
                {item.contentSnippet}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
