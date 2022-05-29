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
      <input placeholder="Enter Task Description..."></input>
      <StyledButton type="submit">+ Add Task</StyledButton>
    </StyledForm>
  );
};

export default AddNewTaskForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #0d98ba;
`;
