import { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { MdOutlineAddCircle } from "react-icons/md";

const TodoCreate = (props) => {
  const [titleValue, setTitleValue] = useState("");

  const createTodo = () => {
    if (titleValue.length > 0) {
      const newTodo = {
        title: titleValue,
        status: "pending"
      };
      props.onCreateTodo(newTodo);
      setTitleValue("");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Write your todo...."
        aria-label="Write your todo"
        aria-describedby="basic-addon2"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        onKeyDown={(e) => handleEnterPress(e)}
      />
      <Button
        onClick={(e) => createTodo()}
        variant="info"
        id="button-addon2"
        className="d-flex justify-content-between align-items-center"
      >
        <MdOutlineAddCircle style={{ fontSize: "20px" }} />
        <div className="ms-1">New</div>
      </Button>
    </InputGroup>
  );
};
export default TodoCreate;
