import Link from "next/link";
import blogPosts from "../../data/blogPosts.json";

type BlogPost = {
    slug: string;
    title: string;
    description: string;
    datePublished: string;
};

export const metadata = {
    title: "Blog Clariflow – Porady o detailingu | Gliwice",
    description:
        "Poznaj praktyczne porady o autodetailingu, czyszczeniu wnętrz, korekcie lakieru i powłokach ceramicznych – Clariflow Gliwice."
};

export default function BlogPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Blog Clariflow</h1>
            <p className="text-gray-600 mb-10">
                Porady i wiedza o autodetailingu – od korekty lakieru po czyszczenie wnętrz.
                Eksperckie treści od Clariflow Gliwice.
            </p>

            <div className="space-y-8">
                {blogPosts.map((post) => (
                    <article
                        key={post.slug}
                        className="border-b border-gray-200 pb-6 hover:bg-gray-50 transition rounded-xl p-4"
                    >
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2 hover:underline">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-gray-700">{post.description}</p>
                    </article>
                ))}
            </div>
        </main>
    );
}