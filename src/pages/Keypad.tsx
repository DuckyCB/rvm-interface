import { useState } from "react";
import styled from "styled-components";



export const Keypad = () => {
  const [ci, setCi] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [confirmar, setConfirmar] = useState<boolean>(false);

  const handleNumber = (number: string) => {
    if (quantity <= 9) {
        setQuantity((currentQuantity) => currentQuantity + 1);
        setCi((currentCi) => currentCi + number);
    } else {
        setError("la cédula no puede tener más de 9 digitos")
    }
  };

  const handleClear = () => {
    setCi("");
    setError("");
    setQuantity(0);
  };

  const handleAcecpt = () => {
    // TODO: Verificar si la cedula esta bien
    const exists = false;
    if (exists) {
      console.log("accept", ci);
    } else {
      setError("la cédula no se encuentra en el sistema, pulsa confirmar para guardar igual en el sistema")
      setConfirmar(true);
    }
  };

  return (
    <PageContainer>
      <h1>Ingrese su telefono</h1>
      <CiContainer>
        <CiTextContainer>
            <h2>{ci}</h2>
        </CiTextContainer>
      </CiContainer>
      <Keypadcontainer>
        <Button onClick={() => handleNumber("1")}>1</Button>
        <Button onClick={() => handleNumber("2")}>2</Button>
        <Button onClick={() => handleNumber("3")}>3</Button>
        <Button onClick={() => handleNumber("4")}>4</Button>
        <Button onClick={() => handleNumber("5")}>5</Button>
        <Button onClick={() => handleNumber("6")}>6</Button>
        <Button onClick={() => handleNumber("7")}>7</Button>
        <Button onClick={() => handleNumber("8")}>8</Button>
        <Button onClick={() => handleNumber("9")}>9</Button>
        <ButtonClear onClick={() => handleClear()}>Borrar</ButtonClear>
        <Button onClick={() => handleNumber("0")}>0</Button>
        <ButtonAccept onClick={() => handleAcecpt()}>Aceptar</ButtonAccept>
      </Keypadcontainer>
      <ErrorContainer>
        {error}
      </ErrorContainer>
      {confirmar && 
        <ButtonAccept onClick={() => handleAcecpt()}>
          Confirmar
        </ButtonAccept>
      }
    </PageContainer>
  );
};

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const CiContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #1a1a1a;
    border-radius: 15px;
`;

const CiTextContainer = styled.div`
    height: 2rem;
`;

const Keypadcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

const Button = styled.button`
  background-color: #474747;
  :hover {
    background-color: #878787;
  }
`;

const ButtonClear = styled.button`
  background-color: red;
  :hover {
    background-color: lightcoral;
  }
`;

const ButtonAccept = styled.button`
  background-color: green;
  :hover {
    background-color: lightgreen;
  }
`;

const ErrorContainer = styled.h3`
    color: red;
    font-weight: bold;
`;
