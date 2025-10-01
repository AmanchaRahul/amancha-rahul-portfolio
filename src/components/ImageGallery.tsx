import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const displayImages = images.slice(0, 4);
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const opacity = useTransform(x, xInput, [0, 1, 0]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevImage();
    } else if (info.offset.x < -swipeThreshold) {
      nextImage();
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 relative">
        {displayImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer bg-muted/20 group"
            whileHover={{ scale: 1.02, rotateZ: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(index);
              }
            }}
            aria-label={`View ${title} screenshot ${index + 1} in fullscreen`}
          >
            <img
              src={image}
              alt={`${title} screenshot ${index + 1} - Project demonstration`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}

        {/* Tap to view hint on mobile */}
        <div className="col-span-2 text-center text-xs text-muted-foreground mt-2 md:hidden">
          Tap image to view • Swipe in fullscreen to navigate
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image gallery - Press Escape to close`}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md mx-auto"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  src={images[selectedImageIndex]}
                  alt={`${title} screenshot ${selectedImageIndex + 1} - Full screen view of project demonstration`}
                  className="w-full h-auto object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  loading="eager"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  style={{ x }}
                />
              </AnimatePresence>

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                {selectedImageIndex + 1} / {images.length}
              </div>

              {/* Swipe Hint for Mobile */}
              <motion.div
                className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-xs md:hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                ← Swipe to navigate →
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
