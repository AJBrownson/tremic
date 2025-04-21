"use client";

import { useEffect } from "react";

type DialogProps = {
  type: "success" | "error";
  message: string;
  show: boolean;
  onClose: () => void;
};

export default function Dialog({ type, message, show, onClose }: DialogProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-gray-800" : "text-red-800";
  const borderColor =
    type === "success" ? "border-green-300" : "border-red-300";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>

      {/* Modal content */}
      <div
        className={`relative z-10 max-w-md w-full mx-auto px-6 py-4 border ${bgColor} ${borderColor} ${textColor} shadow-lg text-center`}
      >
        <p className="font-kumbh text-lg font-semibold">{message}</p>
      </div>
    </div>
  );
}
