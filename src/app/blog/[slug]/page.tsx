import blogPosts from "../../../data/blogPosts.json";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {Facebook, Instagram} from "lucide-react";

type BlogPost = {
    slug: string;
    title: string;
    description: string;
    keywords: string[];
    content: string;
    datePublished: string;
    headerImage: string;
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

    if (!post) return {};

    return {
        title: `${post.title} | Clariflow Gliwice`,
        description: post.description,
        keywords: post.keywords.join(", "),
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            locale: "pl_PL",
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = (blogPosts as BlogPost[]).find((p) => p.slug === params.slug);

    if (!post) notFound();

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: {
            "@type": "Organization",
            name: "Clariflow"
        },
        publisher: {
            "@type": "Organization",
            name: "Clariflow",
            logo: {
                "@type": "ImageObject",
                url: "https://clariflow.pl/logo.png"
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://clariflow.pl/blog/${post.slug}`
        },
        datePublished: "2025-01-01",
        dateModified: "2025-01-01"
    };

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <article>
                <h1 className="text-4xl font-bold">{post.title}</h1>
                {post.headerImage && (
                    <div className="w-full h-[300px] md:h-[300px] 2xl:h-[400px] overflow-hidden rounded-xl py-8 lg:py-12 object-contain">
                        <Image src={post.headerImage} alt={post.title} width={800} height={400} />
                    </div>
                )}
                <p className="text-blue-600 font-bold text-xl mt-12 mb-8">{post.description}</p>
                <div className="prose prose-lg whitespace-pre-line">
                    {post.content.split(/(\*[^*]+\*)/g).map((part, i) => {
                        if (part.startsWith("*") && part.endsWith("*")) {
                            const text = part.slice(1, -1);
                            return <strong key={i}>{text}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                    })}
                </div>
            </article>
            <div className="mt-16 border-t pt-6 flex flex-col md:flex-row gap-4 md:gap-x-8 lg:gap-x-12">
                <Link href="https://www.instagram.com/clariflow/" className="flex-row items-center gap-2 flex">
                    <Instagram strokeWidth={1.5} width={24} />
                    <p>Instagram</p>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61583831067120" className="flex-row items-center gap-2 flex">
                    <Facebook strokeWidth={1.5} width={24} />
                    <p>Facebook</p>
                </Link>
                <Link href="https://www.tiktok.com/@clariflow" className="flex-row items-center gap-2 flex">
                    <p>TikTok</p>
                </Link>
            </div>
        </main>
    );
}