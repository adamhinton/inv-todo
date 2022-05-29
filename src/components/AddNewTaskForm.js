import React from "react";
import styled from "styled-components";

const AddNewTaskForm = (props) => {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        console.log("blah blah blah");
      }}
    >
      <StyledLabel>Add New Task</StyledLabel>
      <StyledInput placeholder="Enter Task Description..."></StyledInput>
      <StyledButton type="submit">+ Add Task</StyledButton>
    </StyledForm>
  );
};

export default AddNewTaskForm;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  border: none;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #0d98ba;
  color: white;
`;
