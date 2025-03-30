import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  const minHeight = 40; // Collapsed (40vh)
  const midHeight = 70; // Expanded (70vh)
  const maxHeight = 95; // Full-Screen (95vh)
  const [currentHeight, setCurrentHeight] = useState(minHeight);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (!isOpen) setCurrentHeight(minHeight);
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-50 flex items-end ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <motion.div
        className="fixed left-0 right-0 w-full max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-t-2xl shadow-lg p-4"
        style={{ bottom: 0, height: `${currentHeight}vh` }}
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDrag={(event, info) => {
          const newHeight = currentHeight - info.delta.y * 0.2;
          if (newHeight >= minHeight && newHeight <= maxHeight) setCurrentHeight(newHeight);
        }}
        onDragEnd={(event, info) => {
          if (info.velocity.y > 300) {
            onClose();
          } else {
            // Snap to nearest position
            if (currentHeight > midHeight + 10) {
              setCurrentHeight(maxHeight);
            } else if (currentHeight > minHeight + 10) {
              setCurrentHeight(midHeight);
            } else {
              setCurrentHeight(minHeight);
            }
          }
        }}
      >
        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mb-4 cursor-pointer" />

        {/* Content */}
        {children}
      </motion.div>
    </div>
  );
}
