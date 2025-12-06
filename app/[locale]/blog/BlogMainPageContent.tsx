"use client";

import { useState, useMemo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import {
  Search,
  X,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Filter,
  Sparkles,
} from "lucide-react";

// Query to fetch blog posts
const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  "excerpt": array::join(string::split(pt::text(body[0...1]), "")[0...200], "") + "...",
  mainImage,
  author->{
    name,
    image
  },
  categories[]->{
    _id,
    title
  }
}`;

// Query to fetch categories
const categoriesQuery = `*[_type == "category"] {
  _id,
  title
}`;

async function getPosts() {
  return await client.fetch(postsQuery);
}

async function getCategories() {
  return await client.fetch(categoriesQuery);
}

// --- Components ---

const FeaturedPost = ({ post, t }: { post: any; t: any }) => {
  if (!post) return null;

  return (
    <div className="mb-20 w-full group relative">
      <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200/40 border border-slate-100">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-72 h-full overflow-hidden order-last lg:order-first">
            <div className="absolute inset-0 bg-slate-100" />
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).width(1200).height(800).url()}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            )}
            {/* Overlay for text contrast on mobile only */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-white relative">
            <div className="relative z-20 flex flex-col h-full justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/10 text-teal-600">
                  <Sparkles className="w-4 h-4" />
                </span>
                {post.categories?.slice(0, 1).map((cat: any) => (
                  <span
                    key={cat._id}
                    className="text-xs font-bold tracking-widest uppercase text-teal-600"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] group-hover:text-teal-600 transition-colors duration-300">
                <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
              </h2>

              <p className="text-lg text-slate-500 mb-10 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-600/90 text-white rounded-full font-semibold transition-all shadow-xl shadow-teal-600/20 hover:shadow-teal-600/30 transform hover:-translate-y-1"
                >
                  {t("read_featured", "Read Featured Article")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCard = ({ post }: { post: any }) => (
  <Link
    href={`/blog/${post.slug.current}`}
    className="group flex flex-col h-full"
  >
    <article className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-teal-600/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
      {/* Card Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 h-full">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(600).height(450).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-teal-600" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-600/5 px-2 py-1 rounded-md">
            {post.categories?.[0]?.title || "Article"}
          </span>
          <span className="text-slate-400 text-xs flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-teal-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-slate-500 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-5 border-t border-slate-50 flex items-center gap-3">
          {post.author?.image ? (
            <Image
              src={urlFor(post.author.image).width(40).height(40).url()}
              alt={post.author.name}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
              {post.author?.name?.[0] || "C"}
            </div>
          )}
          <span className="text-sm font-semibold text-slate-700">
            {post.author?.name || "Curify Team"}
          </span>
        </div>
      </div>
    </article>
  </Link>
);

const BlogListingView = ({
  posts,
  categories,
}: {
  posts: any[];
  categories: any[];
}) => {
  const t = useTranslations("blog");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" ||
        post.categories?.some((cat: any) => cat.title === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Logic: Always show first filtered result as Hero, rest as grid
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  // Logic: Only take top 5 categories
  const topCategories = categories.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* NEW Header Layout - Split Design */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-slate-200/60">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-2">
              {t("title")}
            </h1>
          </div>

          <div className="max-w-md text-left lg:text-right lg:pb-2">
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              {t("subtitle")}
            </p>
            <div className="mt-4 flex lg:justify-end">
              <span className="text-sm font-bold text-teal-main uppercase tracking-widest flex items-center gap-2">
                Scroll for more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Featured Post Banner */}
        {featuredPost && <FeaturedPost post={featuredPost} t={t} />}

        {/* Main Content Layout (Sidebar + Grid) */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Sidebar - Sticky */}
          <div className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-8 space-y-10">
            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-teal-main transition-colors" />
              <input
                type="text"
                placeholder={t("search_placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-300 hover:text-slate-500"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Categories (Top 5 Only) */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Filter className="w-3 h-3" />
                Popular Topics
              </h3>
              <div className="flex flex-row lg:flex-col flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between group w-full ${
                    selectedCategory === "All"
                      ? "bg-teal-600 text-white shadow-lg shadow-teal-600/25"
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
                  }`}
                >
                  <span>All Posts</span>
                  {selectedCategory === "All" && (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </button>

                {topCategories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category.title)}
                    className={`text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between group w-full ${
                      selectedCategory === category.title
                        ? "bg-teal-600 text-white shadow-lg shadow-teal-600/25"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
                      }`}
                  >
                    <span>{category.title}</span>
                    {selectedCategory === category.title && (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Grid */}
          <div className="flex-1 w-full">
            {gridPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gridPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              // Empty State
              !featuredPost && (
                <div className="bg-white rounded-3xl p-16 text-center border-2 border-dashed border-slate-200">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6">
                    <Search className="h-8 w-8 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-slate-500 max-w-md mx-auto mb-8">
                    We couldn't find any articles matching "{searchQuery}" in{" "}
                    {selectedCategory}.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlogMainPageContent() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postsData, categoriesData] = await Promise.all([
          getPosts(),
          getCategories(),
        ]);
        setPosts(postsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-teal-600 mx-auto mb-4"></div>
          <p className="text-slate-500 font-medium">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Something went wrong
          </h1>
          <p className="text-slate-500 mb-6">{error}</p>
        </div>
      </div>
    );
  }

  return <BlogListingView posts={posts} categories={categories} />;
}

