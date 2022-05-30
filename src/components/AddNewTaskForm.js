import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { persistTodosToLocalStorage } from "../App";

const AddNewTaskForm = (props) => {
  const { todoList, setTodoList } = props;
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();

        const taskObject = {
          text: taskDescription,
          completed: false,
        };

        // Don't want to let user submit empty task, this would probably be an accident
        taskDescription.length && setTodoList([...todoList, taskObject]);
        setTaskDescription("");
        persistTodosToLocalStorage([...todoList, taskObject]);
      }}
    >
      <StyledLabel>Add New Task</StyledLabel>
      <StyledInput
        data-testid="add-new-task-input"
        value={taskDescription}
        type="text"
        placeholder="Enter Task Description..."
        onChange={(e) => {
          setTaskDescription(e.target.value);
        }}
      ></StyledInput>
      <StyledButton type="submit">+ Add Task</StyledButton>
    </StyledForm>
  );
};

export default AddNewTaskForm;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 3%;
  font-weight: bold;
`;

const StyledInput = styled.input`
  border: none;
  margin-left: 5%;
  width: 400px;

  @media (max-width: 650px) {
    width: 300px;
  }

  @media (max-width: 450px) {
    width: 180px;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  background-color: #0d98ba;
  color: white;
  font-size: 0.75rem;
`;
