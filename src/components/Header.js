import styled from "styled-components";

const Header = (props) => {
  const { setTodoList } = props;

  return (
    <StyledHeader>
      <Styledh1>Inventora Tasks</Styledh1>
      <StyledDeleteAllButton
        onClick={() => {
          setTodoList([]);
        }}
      >
        Delete All
      </StyledDeleteAllButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: 5%;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 3%;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Styledh1 = styled.h1`
  margin-right: 300px;

  @media (max-width: 750px) {
    margin-right: 25%;
  }

  @media (max-width: 700px) {
    width: 80%;
    margin: 0;
  }
`;

const StyledDeleteAllButton = styled.button`
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  background-color: #0d98ba;
  color: white;
  width: 150px;
  height: 50%;
  font-size: 1.25rem;
`;
