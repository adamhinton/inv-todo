import React from "react";
import styled from "styled-components";
import { useState } from "react";

const AddNewTaskForm = (props) => {
  const { todoList, setTodoList } = props;
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
        const nextId = todoList.length + 1;
        const taskObject = {
          id: nextId,
          text: taskDescription,
          completed: false,
        };

        setTodoList([...todoList, taskObject]);
        setTaskDescription("");
      }}
    >
      <StyledLabel>Add New Task</StyledLabel>
      <StyledInput
        data-testid="add-new-task-input"
        value={taskDescription}
        type="text"
        onChange={(e) => {
          setTaskDescription(e.target.value);
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
