import styled from 'styled-components';

export const NavbarContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  gap: ${({ options: { gap } }) => gap};
  font-size: ${({ options: { fontSize } }) => fontSize};
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;

  border-bottom: 2px solid #fff;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-bottom: ${({ color }) => `2px solid ${color}`};
  }
`;

const addTotalPointsToUser = () => {
  const pointsArray = questions.map(question => {
    const userAnswer = userAnswers.find(
      answer => answer.answer === question.id
    );
    const selectedAnswer = question.answers.find(
      answer => answer.id === userAnswer
    );
    return selectedAnswer.points;
  });

  const totalUserPoints = {};

  for (let i = 0; i < pointsArray.length; i++) {
    const currentQuestion = pointsArray[i];
    for (let key in currentQuestion) {
      if (totalUserPoints[key]) {
        totalUserPoints[key] = currentQuestion[key];
      } else {
        totalUserPoints[key] += currentQuestion[key];
      }
    }
  }

  console.log(totalUserPoints);
};
