"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/routing";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface Author {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  title: string;
}

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  publishedAt: string;
  author: Author;
  categories: Category[];
  excerpt?: string;
}

interface BlogShowcaseProps {
  initialPosts: Post[];
}

const BlogShowcase = ({ initialPosts }: BlogShowcaseProps) => {
  const t = useTranslations("blog");
  const router = useRouter();
  const locale = useLocale();

  // Handle undefined/null posts and get only the latest 3 posts
  const posts = (initialPosts || []).slice(0, 3);

  // Function to create SEO-friendly short slugs
  const createShortSlug = (originalSlug: string, title: string): string => {
    // If slug is already short (less than 50 chars), keep it
    if (originalSlug.length <= 50) {
      return originalSlug;
    }

    // Create a shorter slug from the title
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .slice(0, 50) // Limit to 50 characters
      .replace(/-+$/, ""); // Remove trailing hyphens
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      locale === "el" ? "el-GR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  const handleBlogClick = (slug: string, title: string) => {
    const shortSlug = createShortSlug(slug, title);
    router.push(`/blog/${shortSlug}`);
  };

  if (posts.length === 0) {
    return null; // Don't show the section if there are no posts
  }

  return (
    <section className=" px-4 sm:px-6 lg:px-8 bg-gradient-to-b  dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            {t("latest_blogs")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t("latest_blogs_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleBlogClick(post.slug.current, post.title)}
            >
              <div className="relative h-52 sm:h-64 w-full">
                {post.mainImage?.asset ? (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">
                      No image
                    </span>
                  </div>
                )}

                {/* Date badge */}
                <div className="absolute bottom-4 left-4 bg-primary text-white bg-teal-400 text-xs font-semibold px-3 py-1 rounded-full">
                  {formatDate(post.publishedAt)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {t("by")} {post.author?.name || t("unknown_author")}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${createShortSlug(
                      post.slug.current,
                      post.title
                    )}`}
                    className="text-primary hover:text-primary-dark transition-colors duration-200 inline-flex items-center font-medium"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${t("read_more")}: ${post.title}`}
                  >
                    <span className="sr-only">{t("read_more")}: </span>
                    {t("read_more")}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-primary hover:bg-primary-dark bg-teal-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t("view_all_posts")}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
