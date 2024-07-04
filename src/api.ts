/***************************************************************************************
 * pretend this file describes a remote API.  you should not need to edit anything here.
 ***************************************************************************************/

import bell from "../server/bell.png";
import cherries from "../server/cherries.png";
import duck from "../server/duck.png";

/**
 * @description spins one wheel in a slot machine.  returns an object containing a url to an image and an internal ID of that image
 * @async
 * @return Promise<{ id: number; url: string }>
 */
async function spinWheel() {
  await new Promise((res) => setTimeout(res, 375 + 250 * Math.random()));

  const id = Math.floor(Math.random() * 3);
  const url = [bell, cherries, duck][id];

  return {
    id,
    url
  };
}

export { spinWheel };
