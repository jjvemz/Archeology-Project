import { useState, useEffect } from 'react';

interface UseRotatingImageReturn {
  currentImage: string;
  opacity: number;
  isTransitioning: boolean;
}

/**
 * Custom hook for managing rotating images with fade transitions
 * @param imagePool - Array of image paths to rotate through
 * @param intervalMs - Time between rotations in milliseconds (default: 3000ms)
 * @returns Object containing currentImage, opacity, and isTransitioning state
 */
export function useRotatingImage(
  imagePool: string[],
  intervalMs: number = 12000
): UseRotatingImageReturn {
  const [currentImage, setCurrentImage] = useState<string>(() => {
    if (imagePool.length === 0) return '';
    return imagePool[Math.floor(Math.random() * imagePool.length)];
  });

  const [opacity, setOpacity] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    if (imagePool.length === 0) return;

    const getRandomImage = (exclude: string): string => {
      const available = imagePool.filter((img) => img !== exclude);
      if (available.length === 0) return exclude;
      return available[Math.floor(Math.random() * available.length)];
    };

    const rotateImage = () => {
      setIsTransitioning(true);
      setOpacity(0); // Fade out

      const fadeOutTimer = setTimeout(() => {
        const newImage = getRandomImage(currentImage);
        setCurrentImage(newImage);
        setOpacity(1); // Fade in
        setIsTransitioning(false);
      }, 500); // Wait for fade-out transition

      return fadeOutTimer;
    };

    const intervalId = setInterval(rotateImage, intervalMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [imagePool, intervalMs]);

  return { currentImage, opacity, isTransitioning };
}
