/* eslint-disable no-param-reassign */
import data from '../../../data';
import ResetBall from './ResetBall';

export default function AllBroken(bricks, player, canvas, ballObj) {
  const { brickObj, paddleProps } = data;
  //   if (bricks.length === 0) {
  //     return;
  //   }
  let total = 0;
  for (let i = 0; i < bricks.length; i += 1) {
    if (bricks[i].broke === true) {
      total += 1;
    }
  }
  if (total === bricks.length) {
    player.level += 1;
    ResetBall(ballObj, canvas, paddleProps);
    brickObj.y = 50;
  }
}
