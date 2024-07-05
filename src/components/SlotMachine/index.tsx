import { useState } from 'react';

import { spinWheel } from '../../apis';
import Slot from '../Slot';

function SlotMachine() {
  const [currSlotImages, setCurrSlotImages] = useState<number[]>([0, 1, 2]);
  const [isSpinning, setIsSpinning] = useState<boolean[]>(Array(3).fill(false));
  const [isSlotMachineLoading, setIsSlotMachineLoading] =
    useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const spin = async () => {
    setMessage('');
    setIsSpinning(Array(3).fill(true));
    setIsSlotMachineLoading(true);

    // Call the spinWheel API function to fetch the results for each slot.
    Promise.all([spinWheel(), spinWheel(), spinWheel()])
      // Display the complete slot machine results to users only after all requests are finished.
      // This approach prevents slots results from being displayed out of order in case requests are fulfilled at different times,
      // and avoids user confusion by preventing partial results during the spin if one or more requests fail.
      .then((results) => {
        for (let i = 0; i < results.length; i++) {
          // Add delays to each slot so that the first slot's result displays first,
          // the second slot's result displays second, and the third slot's result displays last.
          setTimeout(() => {
            setCurrSlotImages((prevSlotImages) => {
              const updatedSlotImages = [...prevSlotImages];
              updatedSlotImages[i] = results[i].id;
              return updatedSlotImages;
            });
            setIsSpinning((prevIsSpinning) => {
              const updatedIsSpinning = [...prevIsSpinning];
              updatedIsSpinning[i] = false;
              return updatedIsSpinning;
            });

            // This ensures that the message is displayed after the third image is displayed.
            if (i === results.length - 1) {
              setIsSlotMachineLoading(false);
              // If the results for all three slots are the same,
              // display a message to the user indicating that they've won.
              if (results.every(({ id }) => id === results[0].id)) {
                setMessage('Congratulations 🥳🎉 You won!');
              }
            }
          }, i * 500);
        }
      })
      // If an error occurs, show an error message instead.
      .catch((error) => {
        console.error(
          'There was an error fetching the slot machine results...',
          error
        );
        setMessage(
          'Oops, something happened with our slot machine 😢 Please try again!'
        );
        setIsSpinning(Array(3).fill(false));
      });
  };

  return (
    <div className='slot-machine'>
      <div className={`slots${isSlotMachineLoading ? ' slots--spinning' : ''}`}>
        {currSlotImages.map((currSlotImage, index) => (
          <Slot
            key={`slot-${index}`}
            isSpinning={isSpinning[index]}
            slotImage={currSlotImage}
          />
        ))}
      </div>
      <div className='slot-machine__buttons'>
        <button
          className='slot-machine__button'
          disabled={isSlotMachineLoading}
          onClick={spin}>
          <span className='slot-machine__label'>Spin</span>
        </button>
      </div>
      {message && <div className='slot-machine__message'>{message}</div>}
    </div>
  );
}

export default SlotMachine;
