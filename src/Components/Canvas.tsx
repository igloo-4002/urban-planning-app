import React, { useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvasScale = window.devicePixelRatio;

  const canvasHeight = 800 * canvasScale; // temporarily hardcoded values
  const canvasWidth = 800 * canvasScale; // temporarily hardcoded values

  const handleContextMenu: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    console.warn('handleContextMenu triggered - NOT YET IMPLMENTED');
    return;
  };

  const handlePointerDown: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.warn('handlePointerDown triggered - NOT YET IMPLMENTED');
    return;
  };

  const handleDoubleClick: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    console.warn('handleDoubleClick triggered - NOT YET IMPLMENTED');
    return;
  };

  const handlePointerMove: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.warn('handlePointerMove triggered - NOT YET IMPLMENTED');
    return;
  };

  const handlePointerUp: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.warn('handlePointerUp triggered - NOT YET IMPLMENTED');
    return;
  };

  const removePointer: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.warn('removePointer triggered - NOT YET IMPLMENTED');
    return;
  };

  const handleTouchMove: (
    event: React.TouchEvent<HTMLCanvasElement>,
  ) => void = (event: React.TouchEvent<HTMLCanvasElement>) => {
    console.warn('handleTouchMove triggered - NOT YET IMPLMENTED');
    return;
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: canvasHeight,
        height: canvasWidth,
      }}
      onContextMenu={handleContextMenu}
      onPointerDown={handlePointerDown}
      onDoubleClick={handleDoubleClick}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={removePointer}
      onTouchMove={handleTouchMove}
    ></canvas>
  );
};

export default Canvas;
