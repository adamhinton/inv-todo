import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Inventora Tasks</h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
`;
