import React, { useEffect, useRef } from 'react';
import BallMovement from './BallMovement';
import data from '../../data';
import wallCollision from './util/WallCollision';

export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const { ballObj } = data;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      BallMovement(ctx, ballObj);

      wallCollision(ballObj, canvas);

      requestAnimationFrame(render);
    };
    render();
  }, []);

  return <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />;
}
