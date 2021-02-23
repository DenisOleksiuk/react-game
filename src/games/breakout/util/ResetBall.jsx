/* eslint-disable no-param-reassign */
export default function ResetBall(ballObj, paddleProps) {
  ballObj.x = paddleProps.x;
  ballObj.y = paddleProps.y - 80;
  ballObj.dx = 6 * (Math.random() * 2 - 1);
  ballObj.dy = -6;
}
