import colors, { colorList } from '../colors';

const Instruction = ({ trueChoice, score }) => {
  const colorIndex = (score / 5) % colorList.length;
  const color = colorList[colorIndex];

  return (
    <div className="instruction">
      <p data-testid="gameInstructions">
        Hey! Taste your eyes, can you find this color? :{' '}
      </p>
      <div className="choice-border" style={{ borderColor: colors[color][0] }}>
        <span
          style={{
            backgroundColor: colors[color][trueChoice],
          }}
          className="true-choice"
          data-testid="colorBox"></span>
      </div>
    </div>
  );
};
export default Instruction;
