import React from "react";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/pages/blog/ShareButtons";

// Query to fetch a single post by slug
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{
      _id,
      name,
      image
    },
    categories[]->{
      _id,
      title
    },
    "excerpt": array::join(string::split(pt::text(body[0...1]), "")[0...160], "") + "..."
  }`;

  return await client.fetch(query, { slug }, { next: { revalidate: 3600 } });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Curify Blog",
    };
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "/og-image.png";

  return {
    title: `${post.title} | Curify Blog`,
    description: post.excerpt || post.title,
    alternates: {
      canonical: `https://www.curifyapp.com/${locale}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      url: `https://www.curifyapp.com/${locale}/blog/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// Portable Text components
const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold my-6 text-gray-900 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold my-5 text-gray-900 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-bold my-4 text-gray-900 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="my-4 text-lg leading-relaxed text-gray-700">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-teal-600 pl-6 italic my-8 text-xl text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 my-6 space-y-2 text-lg text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 my-6 space-y-2 text-lg text-gray-700">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || "";
      const isExternal = href.startsWith("http");
      const target = isExternal ? "_blank" : undefined;

      if (isExternal) {
        return (
          <a
            href={href}
            className="text-teal-600 hover:text-teal-800 underline decoration-teal-200 hover:decoration-teal-800 transition-all"
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="text-teal-600 hover:text-teal-800 underline decoration-teal-200 hover:decoration-teal-800 transition-all"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-800">{children}</em>
    ),
  },
  types: {
    youtube: ({ value }: any) => {
      const { url } = value;
      const getYouTubeId = (url: string) => {
        const regExp =
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
      };
      const id = getYouTubeId(url);

      if (!id) {
        return null;
      }

      return (
        <div className="relative w-full aspect-video my-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      );
    },
  },
};

interface PostPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug, locale } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      locale === "el" ? "el-GR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );
  };

  return (
    <main className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {locale === "el" ? "Επιστροφή στο Blog" : "Back to Blog"}
        </Link>

        <header className="mb-10">
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.categories.map((category: any) => (
                <span
                  key={category._id}
                  className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              {post.author?.image ? (
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">
                    {post.author?.name?.slice(0, 2).toUpperCase() || "AU"}
                  </span>
                </div>
              )}
              <span>
                {locale === "el" ? "Από" : "By"}{" "}
                {post.author?.name || "Unknown Author"}
              </span>
            </div>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </header>

        {post.mainImage && (
          <div className="relative w-full h-72 sm:h-96 md:h-[500px] mb-10 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1200).height(800).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700">
          <PortableText value={post.body} components={components} />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">
            {locale === "el" ? "Μοιραστείτε το άρθρο" : "Share this post"}
          </h2>
          <ShareButtons postTitle={post.title} />
        </div>
      </article>
    </main>
  );
}
