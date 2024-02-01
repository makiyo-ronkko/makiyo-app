import React, { useState } from 'react';
import styles from './PixelArtCanvas.module.css';

interface PixelArtCanvasProps {
  selectedColor: string | undefined;
  id: string;
  setPixels: (value: string[]) => void;
  pixels: string[];
  pixelHistory: string[][];
  setPixelHistory: (value: string[][]) => void;
}

export const PixelArtCanvas = ({
  selectedColor,
  id,
  setPixels,
  pixels,
  pixelHistory,
  setPixelHistory,
}: PixelArtCanvasProps) => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const addToHistory = (newPixels: string[]) => {
    const newHistory = [...pixelHistory];
    newHistory.push(newPixels);
    setPixelHistory(newHistory);
  };

  const handlePixelClick = (index: number) => {
    const newPixels = [...pixels];
    if (!selectedColor) return;

    newPixels[index] = selectedColor;
    setPixels(newPixels);
    addToHistory(newPixels);
  };

  const handlePixelDrag = (index: number) => {
    if (isDrawing) {
      const newPixels = [...pixels];
      if (!selectedColor) return;

      newPixels[index] = selectedColor;
      setPixels(newPixels);
      addToHistory(newPixels);
    }
  };

  const handleMouseDown = (index: number) => {
    setIsDrawing(true);
    handlePixelDrag(index);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleTouchStart = (index: number) => {
    setIsDrawing(true);
    handlePixelDrag(index);
  };

  const handleTouchMove = (index: number) => {
    if (isDrawing) {
      handlePixelDrag(index);
    }
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  return (
    <div className={styles.pixelCanvas} id={id}>
      {pixels.map((color, index) => (
        <div
          key={index}
          className={styles.pixel}
          style={{ backgroundColor: color }}
          onClick={() => handlePixelClick(index)}
          onMouseDown={() => handleMouseDown(index)}
          onMouseEnter={() => handlePixelDrag(index)}
          onMouseUp={handleMouseUp}
          onTouchStart={() => handleTouchStart(index)}
          onTouchMove={() => handleTouchMove(index)}
          onTouchEnd={handleTouchEnd}
        ></div>
      ))}
    </div>
  );
};
