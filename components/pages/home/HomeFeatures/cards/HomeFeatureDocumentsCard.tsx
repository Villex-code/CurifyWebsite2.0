"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Search, 
  Plus, 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  Mic, 
  Filter,
  FileSpreadsheet
} from "lucide-react";

export const HomeFeatureDocumentsCard = () => {
  return (
    <div className="flex h-full w-full flex-col bg-[#F1F5F9] p-6 font-sans overflow-hidden relative">
      {/* Consistent Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-teal-600/5 -skew-y-3 transform origin-top-left" />

      {/* Header Area */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mb-1">
            <span>Home</span>
            <ChevronRight size={10} />
            <span className="text-teal-600 font-bold">Έγγραφα</span>
          </div>
          <h3 className="text-2xl font-black text-slate-800 tracking-tight">Αρχεία & Έγγραφα</h3>
        </div>
        <div className="flex gap-2">
            <div className="bg-teal-600 text-white px-3 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2 shadow-md shadow-teal-600/20">
                <Plus size={14} />
                <span className="hidden sm:inline">Προσθήκη</span>
            </div>
        </div>
      </div>

      {/* Search & Filter Simulation */}
      <div className="relative z-10 flex gap-2 mb-8">
         <div className="flex-1 bg-white border border-slate-200 rounded-2xl flex items-center px-4 py-2.5 shadow-sm">
            <Search size={14} className="text-slate-300 mr-2" />
            <span className="text-[11px] text-slate-300 font-medium truncate">Αναζήτηση για 'αναφορά'...</span>
         </div>
         <div className="bg-white border border-slate-200 p-2.5 rounded-2xl shadow-sm text-slate-400">
            <Filter size={14} />
         </div>
      </div>

      {/* Folders Section */}
      <div className="relative z-10 mb-8">
        <div className="flex justify-between items-center mb-4 px-1">
            <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Φάκελοι</span>
            <span className="text-[9px] font-bold text-slate-400">10 φάκελοι</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
            <AppFolder name="Medical Files" count="3" delay={0.1} />
            <AppFolder name="Templates" count="29" delay={0.2} />
            <AppFolder name="Dicom" count="4" delay={0.3} />
        </div>
      </div>

      {/* Recent Files Section */}
      <div className="relative z-10 flex flex-col gap-3">
         <div className="flex justify-between items-center mb-1 px-1">
            <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Πρόσφατα Αρχεία</span>
         </div>
         <AppFileCard 
            name="GDPR exercise" 
            ext="Excel Spreadsheet" 
            size="1.69 MB" 
            date="4/2/2025" 
            icon={<FileSpreadsheet size={16} className="text-emerald-500" />} 
            delay={0.4}
         />
         <AppFileCard 
            name="healthInsurance" 
            ext="JPEG Image" 
            size="77.8 KB" 
            date="13/2/2025" 
            icon={<ImageIcon size={16} className="text-blue-500" />} 
            delay={0.5}
         />
      </div>

      {/* App's Floating Mic Button */}
      <div className="absolute bottom-6 right-6 z-20 bg-teal-600 text-white p-3.5 rounded-full shadow-lg shadow-teal-600/30">
         <Mic size={20} />
      </div>

      {/* Consistent Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F1F5F9] via-[#F1F5F9]/95 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// Internal Folder Helper
const AppFolder = ({ name, count, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4 }}
    className="flex flex-col items-center gap-2 group cursor-pointer"
  >
    <div className="relative">
        <Folder size={44} className="text-teal-500/80 fill-teal-500/20 group-hover:fill-teal-500/30 transition-colors" />
    </div>
    <div className="flex flex-col items-center text-center">
        <span className="text-[9px] font-black text-slate-700 truncate w-20 leading-tight">{name}</span>
        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{count} αρχεία</span>
    </div>
  </motion.div>
);

// Internal File Helper
const AppFileCard = ({ name, ext, size, date, icon, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between"
  >
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-[11px] font-black text-slate-800">{name}</span>
            <div className="flex items-center gap-2 text-[8px] font-bold text-slate-400">
                <span>{ext}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                <span>{size}</span>
            </div>
        </div>
    </div>
    <div className="bg-teal-50 px-2 py-1 rounded-lg text-[8px] font-black text-teal-600">
        {date}
    </div>
  </motion.div>
);