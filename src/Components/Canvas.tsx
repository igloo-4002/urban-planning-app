import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const canvasScale = window.devicePixelRatio;

  // const canvasHeight = 800 * canvasScale; // temporarily hardcoded values
  // const canvasWidth = 800 * canvasScale; // temporarily hardcoded values

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

  const draw: () => void = () => {
    const canvas = canvasRef.current;
    const GRID_SIZE = 50;

    if (canvas === null) return;

    const ctx = canvas.getContext('2d');

    if (ctx === null) return;

    const left = 0.5 - Math.ceil(canvas.width / GRID_SIZE) * GRID_SIZE;
    const top = 0.5 - Math.ceil(canvas.height / GRID_SIZE) * GRID_SIZE;
    const right = 2 * canvas.width;
    const bottom = 2 * canvas.height;

    ctx.clearRect(left, top, right - left, bottom - top);
    ctx.beginPath();

    for (let x = left; x < right; x += GRID_SIZE) {
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
    }

    for (let y = top; y < bottom; y += GRID_SIZE) {
      ctx.moveTo(left, y);
      ctx.lineTo(right, y);
    }

    ctx.strokeStyle = '#888';
    ctx.stroke();
  };

  useEffect(() => {
    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        background: 'silver',
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
