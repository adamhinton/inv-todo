import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Inventora Tasks</h1>
      <StyledDeleteAllButton>Delete All</StyledDeleteAllButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 3%;
  align-items: center;
`;

const StyledDeleteAllButton = styled.button`
  border: none;
  background-color: #0d98ba;
  width: 150px;
  color: white;
  height: 50%;
  margin-left: 200px;
  font-size: 1.25rem;
  padding: 15px 30px;
  border-radius: 10px;
`;
