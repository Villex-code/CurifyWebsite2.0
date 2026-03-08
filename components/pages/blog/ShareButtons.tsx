"use client";

import React, { useEffect, useState } from "react";

export default function ShareButtons({ postTitle }: { postTitle: string }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="flex space-x-4">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          postTitle,
        )}&url=${encodeURIComponent(currentUrl)}`}
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
          currentUrl,
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
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(
          postTitle,
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
