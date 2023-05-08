import styled from "styled-components";

export const Welcome = () => {
  return (
    <div>
        <Title>Buenos dias</Title>
        <Image src="src\assets\mastra.png" />
        <SubTitle>Ingrese una botella</SubTitle>
  </div>
  );
};

const Title = styled.h1`
    font-size: 3rem;
`;

const Image = styled.img`
    height: 300px;
`;

const SubTitle = styled.h2`
    font-size: 2rem;
`;
