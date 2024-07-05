import { ImgHTMLAttributes, useEffect, useState } from 'react';

import bell from '../../assets/bell.png';
import cherries from '../../assets/cherries.png';
import duck from '../../assets/duck.png';

interface SlotProps {
  isSpinning: boolean;
  slotImage: number;
}

interface SlotImage {
  id: number;
  image: ImgHTMLAttributes<HTMLImageElement>;
}

// Requirement: Render three images next to each other, centered horizontally on the page,
// representing the three spinning wheels of a slot machine.
//
// Assumption: The initial three images are the bell, cherries, and duck logo.
// These images' URLs are stored on the client side for this reason.
//
// If users should not see these logos until the slot machine finishes fetching the results,
// placeholder images can be displayed with a spin animation instead until the image URLs are fetched from the API.
const defaultSlotImages: SlotImage[] = [
  {
    id: 0,
    image: {
      src: bell,
      alt: 'Bell Logo',
    },
  },
  {
    id: 1,
    image: {
      src: cherries,
      alt: 'Cherries Logo',
    },
  },
  {
    id: 2,
    image: {
      src: duck,
      alt: 'Duck Logo',
    },
  },
];

function Slot({ isSpinning, slotImage }: SlotProps) {
  const [currSlotImageIndex, setSlotImageIndex] = useState<number>(slotImage);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isSpinning) {
      // Change the slot images every 50ms to simulate the slot "spinning".
      interval = setInterval(() => {
        setSlotImageIndex(Math.floor(Math.random() * 3));
      }, 50);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isSpinning]);

  return (
    <div className='slot'>
      {isSpinning ? (
        <img
          {...defaultSlotImages[currSlotImageIndex].image}
          width='150'
          height='150'
        />
      ) : (
        <img {...defaultSlotImages[slotImage].image} width='150' height='150' />
      )}
    </div>
  );
}

export default Slot;
