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
      <label>Add New Task</label>
      <input placeholder="Enter Task Description..."></input>
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default AddNewTaskForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;
