import styled from "styled-components";

export const Welcome = () => {
  return (
    <div>
        <h1>Buenos dias</h1>
        <Image src="/mastra.png" />
        <h2>Ingrese una botella</h2>
  </div>
  );
};

const Image = styled.img`
    height: 300px;
`;
