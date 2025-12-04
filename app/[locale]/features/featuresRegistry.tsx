import React from "react";
import {
  Pill,
  BrainCircuit,
  Activity,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

// --- TYPE DEFINITION ---
export type FeatureRegistryItem = {
  id: string;
  category: string;
  title: string;
  component: React.ReactNode; // This holds the actual UI
};

// --- CUSTOM COMPONENT 1: SMART PHARMACY (Visual Heavy) ---
const SmartPharmacyFeature = () => (
  <div className="space-y-8">
    <div className="relative h-64 bg-slate-900 rounded-3xl overflow-hidden flex items-center justify-center p-8">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#2dd4bf 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 text-center">
        <div className="inline-flex p-4 bg-teal-500/20 rounded-full mb-4 ring-1 ring-teal-500/50">
          <Pill className="w-8 h-8 text-teal-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          IoT Cabinet Integration
        </h3>
        <p className="text-slate-400">Real-time inventory tracking</p>
      </div>
    </div>

    <div className="prose prose-lg max-w-none text-slate-600">
      <p>
        Our <strong>Smart Pharmacy</strong> module connects directly to
        IoT-enabled cabinets. When a nurse dispenses a medication, the inventory
        is updated instantly in the cloud.
      </p>
      <h3>Key Capabilities</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
        {[
          "Automatic Re-ordering",
          "Expiration Alerts",
          "Batch Tracking",
          "Narcotics Control",
        ].map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm m-0"
          >
            <CheckCircle2 className="w-5 h-5 text-teal-500" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- CUSTOM COMPONENT 2: AI DIAGNOSTICS (Data Heavy) ---
const AiDiagnosticsFeature = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-indigo-600 rounded-xl text-white">
          <BrainCircuit className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Clinical Decision Support
          </h3>
          <p className="text-sm text-slate-500">
            Powered by Curify Neural Engine
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-indigo-50 text-center">
          <div className="text-2xl font-bold text-indigo-600 mb-1">99.8%</div>
          <div className="text-xs font-bold text-slate-400 uppercase">
            Interaction Detection
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-indigo-50 text-center">
          <div className="text-2xl font-bold text-indigo-600 mb-1">
            &lt; 0.2s
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase">
            Latency
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-indigo-50 text-center">
          <div className="text-2xl font-bold text-indigo-600 mb-1">24/7</div>
          <div className="text-xs font-bold text-slate-400 uppercase">
            Monitoring
          </div>
        </div>
      </div>
    </div>

    <div className="prose prose-lg max-w-none text-slate-600">
      <p>
        Reduce diagnostic errors by up to 40%. Our AI scans patient history
        against current prescriptions to flag contraindications immediately.
      </p>
    </div>
  </div>
);

// --- THE REGISTRY ---
export const FEATURE_REGISTRY: FeatureRegistryItem[] = [
  {
    id: "smart-pharmacy",
    category: "Inventory",
    title: "Smart Pharmacy",
    component: <SmartPharmacyFeature />,
  },
  {
    id: "ai-diagnostics",
    category: "Clinical",
    title: "AI Diagnostics",
    component: <AiDiagnosticsFeature />,
  },
  {
    id: "telehealth",
    category: "Patient Care",
    title: "Telehealth Suite",
    // Placeholder for future custom component
    component: (
      <div className="p-12 border-2 border-dashed border-slate-200 rounded-3xl text-center text-slate-400">
        <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <h3 className="font-bold text-lg">Telehealth Component Coming Soon</h3>
        <p>You can build a custom layout here.</p>
      </div>
    ),
  },
  {
    id: "security-core",
    category: "Infrastructure",
    title: "Security Core",
    component: (
      <div className="bg-slate-900 text-white p-8 rounded-3xl">
        <ShieldCheck className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-2xl font-bold mb-4">Enterprise Grade Security</h3>
        <p className="text-slate-400">
          AES-256 Encryption standard across all endpoints.
        </p>
      </div>
    ),
  },
];

// Helper to get unique categories for the sidebar
export const getCategories = () =>
  Array.from(new Set(FEATURE_REGISTRY.map((f) => f.category)));

// Helper to get features for a category
export const getFeaturesByCategory = (cat: string) =>
  FEATURE_REGISTRY.filter((f) => f.category === cat);

// Helper to get a specific feature
export const getFeatureById = (id: string) =>
  FEATURE_REGISTRY.find((f) => f.id === id);
