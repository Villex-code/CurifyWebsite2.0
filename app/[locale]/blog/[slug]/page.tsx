"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { notFound } from "next/navigation";

// Client component for social sharing
function ShareButtons({ postTitle }: { postTitle: string }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="flex space-x-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          postTitle
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-teal-600"
        aria-label="Share on Twitter"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.097 10.097 0 01-3.127 1.184A4.92 4.92 0 0016.953 2a4.928 4.928 0 00-4.928 4.928c0 .385.044.762.127 1.122-4.092-.205-7.72-2.17-10.149-5.152a4.929 4.929 0 001.523 6.574 4.887 4.887 0 01-2.23-.616v.061a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.224.084 4.93 4.93 0 004.6 3.42A9.87 9.87 0 012 19.539a13.944 13.944 0 007.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.59l-.047-.02z" />
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-teal-600"
        aria-label="Share on Facebook"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(
          postTitle
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-teal-600"
        aria-label="Share on LinkedIn"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  );
}

// Function to fetch a single post by slug
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
    "excerpt": array::join(string::split(pt::text(body[0...1]), "")[0...200], "") + "..."
  }`;

  return await client.fetch(query, { slug });
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
};

interface PostPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default function PostPage({ params }: PostPageProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlug, setCurrentSlug] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { slug } = await params;
        setCurrentSlug(slug);
        const postData = await getPost(slug);
        if (!postData) {
          setError("Post not found");
        } else {
          setPost(postData);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
          Back to Blog
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
              <span>By {post.author?.name || "Unknown Author"}</span>
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
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700">
          <PortableText value={post.body} components={components} />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Share this post</h2>
          <ShareButtons postTitle={post.title} />
        </div>
      </article>
    </main>
  );
}
