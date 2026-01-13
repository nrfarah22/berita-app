import Link from "next/link";

interface NewsItem {
  title: string;
  link: string;
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800">
          {categoryData.map((category) => (
              <div key={category.key} className="text-slate-900 dark:text-gray-50">
                  <h2 className="flex justify-between items-center font-bold text-lg mb-4 mt-8">
                      <span className="pl-3">{category.label}</span>
                        <Link
                          href={`/category/${category.key}`}
                          className="text-xs font-medium hover:underline"
                      >
                          See more →
                      </Link>
                  </h2>
                  <div className="space-y-3">
                      {category.news.map((item, i) => (
                          <Link
                              key={i}
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex cursor pointer hover:bg-gray-200 trasition"
                          >
                              <img src={item.image.small} alt={item.title} className="w-30 h-full" />
                              <div className="pl-2 flex flex-1 items-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800">
                                  <p className="text-xs font-semibold underline text-left">
                                      {item.title}
                                  </p>
                              </div>
                          </Link>
                      ))}
                  </div>
              </div>
          ))}
      </section>
  )
}