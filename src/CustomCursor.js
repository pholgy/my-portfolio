import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y);
      if (!target) return;
      
      const clickableElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
      const hasClickableRole = target.getAttribute('role') === 'button';
      const isClickable = clickableElements.includes(target.tagName) || hasClickableRole;
      
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  // Cursor ring styles
  const cursorSize = isPointer ? 32 : 24;
  const cursorStyles = {
    cursor: {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 9999,
      mixBlendMode: 'difference',
      transform: 'translate(-50%, -50%)',
      top: 0,
      left: 0,
    },
  };

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          ...cursorStyles.cursor,
          x: position.x,
          y: position.y,
          opacity: isClicking ? 0.7 : 1
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <div 
          style={{
            width: 8,
            height: 8,
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          ...cursorStyles.cursor,
          x: position.x,
          y: position.y,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isHidden ? 0 : 1,
          width: isPointer ? 40 : 32,
          height: isPointer ? 40 : 32,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
          opacity: { duration: 0.15 },
        }}
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: `1.5px solid ${isPointer ? '#4f46e5' : 'white'}`,
            opacity: isPointer ? 0.9 : 0.5,
            transition: 'border-color 0.3s ease, opacity 0.3s ease',
          }}
          animate={{
            scale: isClicking ? 0.9 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;