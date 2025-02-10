import { useState } from 'react';
import colors, { colorList } from '../colors';

const ColorOptions = ({
  trueChoice,
  setScore,
  score,
  statusGame,
  setStatusGame,
}) => {
  const colorIndex = (score / 5) % colorList.length;
  const color = colorList[colorIndex];

  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleClick(event, index) {
    const target = event.target;
    const classToAdd = trueChoice == index ? 'green' : 'red';
    setStatusGame(trueChoice == index ? 'Bravo 😁' : 'Try again 😓');

    target.classList.add(classToAdd);

    trueChoice == index && setScore(score + 5);

    setTimeout(() => {
      target.classList.remove(classToAdd);
    }, 1500);
  }
  return (
    <>
      <div className="choices">
        {dummyArray.map((el, ind) => (
          <span
            key={el}
            style={{
              backgroundColor: colors[color][ind],
            }}
            className="choice"
            onClick={(event) => handleClick(event, ind)}
            data-testid="colorOption"></span>
        ))}
      </div>
      <p data-testid="gameStatus">{statusGame}</p>
    </>
  );
};
export default ColorOptions;
