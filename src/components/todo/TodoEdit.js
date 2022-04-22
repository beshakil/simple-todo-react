import { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { MdSave } from "react-icons/md";

const TodoEdit = ({ todo, index, onUpdateTodo }) => {
  const [updateTitleValue, setUpdateTitleValue] = useState(todo.title);
  const [status, setStatus] = useState(todo.status);

  const createUpdateTodo = () => {
    if (updateTitleValue.length > 0) {
      const newTodo = {
        title: updateTitleValue,
        status
      };
      onUpdateTodo(index, newTodo);
      // setUpdateTitleValue("");
    }
  };

  const handleEnterSubmission = (e) => {
    if (e.key === "Enter") {
      createUpdateTodo();
    }
  };

  return (
    <InputGroup style={{ width: "60%" }}>
      <FormControl
        placeholder="Write your todo...."
        aria-label="Write your todo"
        aria-describedby="basic-addon2"
        value={updateTitleValue}
        onChange={(e) => setUpdateTitleValue(e.target.value)}
        onKeyDown={(e) => handleEnterSubmission(e)}
      />
      &nbsp; &nbsp;
      <select
        name="status"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <Button
        onClick={(e) => createUpdateTodo()}
        variant="info"
        id="button-addon2"
        className="d-flex justify-content-between align-items-center"
      >
        <MdSave style={{ fontSize: "20px" }} />
        <div className="ms-1">Save</div>
      </Button>
    </InputGroup>
  );
};
export default TodoEdit;
