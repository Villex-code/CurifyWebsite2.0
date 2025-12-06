import React from "react";

const Testing = () => {
  return (
    // 1. The Studio Wrapper (Black background to frame the screenshot)
    <div className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center p-10 overflow-auto">
      {/* 2. The Open Graph Canvas (Fixed 1200x630 dimensions) */}
      <div
        className="relative w-[1200px] h-[630px] bg-white overflow-hidden shadow-2xl flex flex-col items-center justify-center shrink-0"
        id="og-canvas"
      >
        {/* --- BACKGROUND LAYER --- */}
        <div className="absolute inset-0 z-0">
          {/* The Provided Banner */}
          <img
            src="https://storage.googleapis.com/cdn.curifyapp.com/images/banner.jpg"
            alt="Curify Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlays for Text Contrast */}
          <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-slate-900/30" />
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-6xl px-12 -mt-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-[0.2em] mb-10 shadow-xl">
            <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)] animate-pulse" />
            Healthcare Operating System
          </div>

          {/* Main Headline */}
          <h1 className="text-8xl font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-2xl">
            Think, plan, and track <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
              all in one place.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-3xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md opacity-90">
            The comprehensive platform for modern clinics, medical offices, and
            hospitals.
          </p>
        </div>

        {/* --- FOOTER BAR --- */}
        <div className="absolute bottom-0 w-full px-16 py-12 flex justify-between items-end z-20">
          {/* Custom Grid Logo */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
              <img
                src="/general/logo.png"
                alt="Curify Logo"
                className="w-14 h-14 object-contain"
                draggable={false}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold tracking-tight text-white leading-none">
                Curify
              </span>
              <span className="text-sm text-teal-200 font-bold uppercase tracking-[0.3em] mt-1.5 ml-1 opacity-80">
                Platform
              </span>
            </div>
          </div>

          {/* Website URL */}
          <div className="text-2xl font-medium tracking-wide text-white/90 pb-2">
            curifyapp.com
          </div>
        </div>

        {/* --- ARTISTIC GLOWS --- */}
        {/* Top Right Teal Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-teal-500/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        {/* Bottom Left Blue Glow */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      </div>
    </div>
  );
};

export default Testing;
