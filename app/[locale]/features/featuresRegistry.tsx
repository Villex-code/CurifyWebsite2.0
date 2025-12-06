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
import TaskManagementFeature from "./FeaturesRegistry/TaskManagementFeature";
import StorageFeature from "./FeaturesRegistry/StorageFeature";
import FinancialFeature from "./FeaturesRegistry/FinancialFeature";
import AnalyticsFeature from "./FeaturesRegistry/AnalyticsFeature";
import PersonnelFeature from "./FeaturesRegistry/PersonnelFeature";
import AppointmentFeature from "./FeaturesRegistry/AppointmentFeature";
import PatientDashboardFeature from "./FeaturesRegistry/PatientDashboardFeature";
import PatientProfileFeature from "./FeaturesRegistry/PatientProfileFeature";
import ReportingFeature from "./FeaturesRegistry/ReportingFeature";
import AuditLogFeature from "./FeaturesRegistry/AuditLogFeature";
import AdmissionsFeature from "./FeaturesRegistry/AdmissionsFeature";
import ClinicsFeature from "./FeaturesRegistry/ClinicsFeature";
import FileManagerFeature from "./FeaturesRegistry/FileManagerFeature";
import ProtocolsFeature from "./FeaturesRegistry/ProtocolsFeature";

// --- TYPE DEFINITION ---
export type FeatureRegistryItem = {
  id: string;
  category: string;
  title: string;
  component: React.ReactNode; // This holds the actual UI
};

// --- THE REGISTRY ---
export const FEATURE_REGISTRY: FeatureRegistryItem[] = [
  {
    id: "task-management",
    category: "Clinical",
    title: "Task & Prescription Workflow",
    component: <TaskManagementFeature />,
  },
  {
    id: "smart-storage",
    category: "Inventory",
    title: "Storage & Inventory",
    component: <StorageFeature />,
  },
  {
    id: "financial-management",
    category: "Financials",
    title: "Financial Management & Payments",
    component: <FinancialFeature />,
  },
  {
    id: "personnel-management",
    category: "Administration",
    title: "Personnel & Staff Management",
    component: <PersonnelFeature />,
  },
  {
    id: "analytics-bi",
    category: "Clinical", // or Admin
    title: "Advanced Analytics & Reporting",
    component: <AnalyticsFeature />,
  },
  {
    id: "appointment-calendar",
    category: "Administration",
    title: "Appointment & Calendar Management",
    component: <AppointmentFeature />,
  },
  {
    id: "patient-dashboard",
    category: "Clinical",
    title: "Patient Dashboard & Search",
    component: <PatientDashboardFeature />,
  },
  {
    id: "patient-profile",
    category: "Clinical",
    title: "Patient Profile & Clinical Management",
    component: <PatientProfileFeature />,
  },
  {
    id: "reporting-privacy",
    category: "Administrative", // or Security
    title: "Reporting & Privacy Controls",
    component: <ReportingFeature />,
  },
  {
    id: "audit-log",
    category: "Security",
    title: "Personnel Actions & Audit Log",
    component: <AuditLogFeature />,
  },
  {
    id: "admissions-referrals",
    category: "Administrative",
    title: "Admissions & Referrals",
    component: <AdmissionsFeature />,
  },
  {
    id: "clinics-infrastructure",
    category: "Administration",
    title: "Clinics & Infrastructure",
    component: <ClinicsFeature />,
  },
  {
    id: "file-manager",
    category: "Administrative",
    title: "Global File Manager",
    component: <FileManagerFeature />,
  },
  {
    id: "protocols-templates",
    category: "Clinical", // or Configuration
    title: "Protocols & Templates",
    component: <ProtocolsFeature />,
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
