import React, { useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvasScale = window.devicePixelRatio;

  const canvasHeight = 800 * canvasScale; // temporarily hardcoded values
  const canvasWidth = 800 * canvasScale; // temporarily hardcoded values

  const handleContextMenu: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    console.log('handleContextMenu triggered - NOT YET IMPLMENTED');
    return;
  };

  const handlePointerDown: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.log('handlePointerDown triggered - NOT YET IMPLMENTED');
    return;
  };

  const handleDoubleClick: (event: React.MouseEvent) => void = (
    event: React.MouseEvent,
  ) => {
    console.log('handleDoubleClick triggered - NOT YET IMPLMENTED');
    return;
  };

  const handlePointerMove: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.log('handlePointerMove triggered - NOT YET IMPLMENTED');
    return;
  };

  const handlePointerUp: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.log('handlePointerUp triggered - NOT YET IMPLMENTED');
    return;
  };

  const removePointer: (event: React.PointerEvent) => void = (
    event: React.PointerEvent,
  ) => {
    console.log('removePointer triggered - NOT YET IMPLMENTED');
    return;
  };

  const handleTouchMove: (
    event: React.TouchEvent<HTMLCanvasElement>,
  ) => void = (event: React.TouchEvent<HTMLCanvasElement>) => {
    console.log('handleTouchMove triggered - NOT YET IMPLMENTED');
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
