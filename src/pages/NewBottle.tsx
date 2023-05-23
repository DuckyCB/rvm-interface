import styled from "styled-components";
import { BottleType } from "../App";

export type NewBottleProps = {
  newBottle: BottleType;
  handleFinish: () => void;
}

export const NewBottle = ({newBottle, handleFinish}: NewBottleProps) => {
  return (
    <NewBottleContainer>
      <h1>Botella ingresada correctamente</h1>
      <h3>{newBottle.brand}  -  {newBottle.points} puntos</h3>
      <h2>Puede ingresar una nueva botella o finalizar</h2>
      <ButtonFinish onClick={handleFinish}>Finalizar</ButtonFinish>
    </NewBottleContainer>
  );
};

const NewBottleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ButtonFinish = styled.button`
  background-color: green;
  :hover {
    background-color: lightgreen;
  }
`;
