"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
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

interface BlogListingViewProps {
  initialPosts: Post[];
}

const POSTS_PER_PAGE = 9;

export default function BlogListingView({
  initialPosts,
}: BlogListingViewProps) {
  const t = useTranslations("blog");
  const router = useRouter();
  const currentLang = useLocale();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const categoryPopupRef = useRef<HTMLDivElement>(null);

  // Extract all unique categories
  const allCategories = Array.from(
    new Set(
      initialPosts
        .flatMap((post) => post.categories)
        .filter(Boolean)
        .map((category) => category.title)
    )
  );

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryPopupRef.current &&
        !categoryPopupRef.current.contains(event.target as Node)
      ) {
        setShowCategoryPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter posts based on search and category
  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !activeCategory ||
      post.categories?.some((cat) => cat.title === activeCategory);

    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      currentLang === "el" ? "el-GR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  const handleBlogClick = (slug: string, title: string) => {
    const shortSlug = createShortSlug(slug, title);
    router.push(`/${currentLang}/blog/${shortSlug}`);
  };

  // Determine which categories to show in the main display
  const displayedCategories = allCategories.slice(0, 3);
  const remainingCategoriesCount =
    allCategories.length - displayedCategories.length;

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

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-20 md:mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("our_blog")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("blog_description")}
          </p>
        </div>

        {/* Search and filter */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder={t("search_blogs")}
              className="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
            <svg
              className="absolute right-3 top-3 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 relative">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                activeCategory === null
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => {
                setActiveCategory(null);
                setCurrentPage(1);
              }}
            >
              {t("all_categories")}
            </button>

            {displayedCategories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}

            {remainingCategoriesCount > 0 && (
              <button
                className="px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                onClick={() => setShowCategoryPopup(true)}
              >
                +{remainingCategoriesCount}
              </button>
            )}

            {/* Category Popup */}
            <AnimatePresence>
              {showCategoryPopup && (
                <motion.div
                  ref={categoryPopupRef}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 z-10 min-w-[200px] max-h-[300px] overflow-y-auto"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t("all_categories")}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        className={`px-3 py-2 text-sm font-medium rounded-md text-left ${
                          activeCategory === category
                            ? "bg-teal-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => {
                          setActiveCategory(category);
                          setCurrentPage(1);
                          setShowCategoryPopup(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">
              {t("no_posts_found")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("try_different_search")}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleBlogClick(post.slug.current, post.title)}
                >
                  <div className="relative h-48 sm:h-56 w-full">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400 dark:text-gray-500">
                          No image
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {post.categories && post.categories.length > 0
                          ? post.categories[0].title
                          : t("uncategorized")}
                      </span>
                      <span className="mx-2 text-gray-300 dark:text-gray-600">
                        •
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
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
                        href={`/${currentLang}/blog/${createShortSlug(post.slug.current, post.title)}`}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 text-sm font-medium ${
                      currentPage === 1
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {t("previous")}
                  </button>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 border-t border-b border-gray-300 dark:border-gray-700 text-sm font-medium ${
                        currentPage === i + 1
                          ? "bg-primary text-white"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 text-sm font-medium ${
                      currentPage === totalPages
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {t("next")}
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
