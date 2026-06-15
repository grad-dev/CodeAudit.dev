"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const PersistentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white px-4 py-3 flex items-center justify-center z-[100] text-sm font-medium shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
          <div className="flex-1 text-center">
            🚀 CodeAudit.dev is launching soon.{" "}
            <Link href="?waitlist=true" scroll={false} className="underline font-bold hover:text-blue-200 transition-colors">
              Join the Waitlist →
            </Link>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 hover:bg-blue-700 p-1.5 rounded-full transition-colors flex items-center justify-center"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
