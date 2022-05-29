import React from "react";
import styled from "styled-components";
import { useState } from "react";

const AddNewTaskForm = (props) => {
  const { todoList, setTodoList } = props;
  const nextId = todoList.length + 1;
  console.log("nextId:", nextId);
  const [taskDescription, setTaskDescription] = useState("");
  //   {
  //     id: number,
  //     text: string,
  //     isCompleted: boolean,
  //   },

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        console.log("blah blah blah");
      }}
    >
      <StyledLabel>Add New Task</StyledLabel>
      <StyledInput
        type="text"
        onChange={(e) => {
          setTaskDescription(e.target.value);
          console.log("taskDescription:", taskDescription);
        }}
        placeholder="Enter Task Description..."
      ></StyledInput>
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
  margin-bottom: 3%;
  font-weight: bold;
`;

const StyledInput = styled.input`
  border: none;
  margin-left: 5%;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #0d98ba;
  color: white;
  border-radius: 10px;
  padding: 2% 3%;
  font-size: 0.75rem;
`;
