"use client";

import React, { useState } from "react";
import ApplicationHeader from "./ApplicationHeader";
import { motion, AnimatePresence } from "framer-motion";
import { LightRays } from "@/components/ui/background/lightrays";
import ApplicationSelect, { RoleType } from "./ApplicationSelect";
import ApplicationFillOutScreen from "./ApplicationFillOutScreen";

const ApplicationPage = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>(null);

  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(role);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedRole(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {!selectedRole ? (
              <motion.div
                key="select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <ApplicationHeader />
                <ApplicationSelect onSelectRole={handleRoleSelect} />
              </motion.div>
            ) : (
              <motion.div
                key="fill"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ApplicationFillOutScreen
                  selectedRole={selectedRole}
                  onBack={handleBack}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationPage;
