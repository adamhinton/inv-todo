import React from "react";
import styled from "styled-components";

const AddNewTaskForm = (props) => {
  return (
    <form>
      <label>Add New Task</label>
      <input placeholder="Enter Task Description..."></input>
    </form>
  );
};

export default AddNewTaskForm;

const StyledForm = styled.form``;
