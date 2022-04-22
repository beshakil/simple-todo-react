import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { MdDeleteSweep } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import TodoCreate from "./TodoCreate";
import TodoEdit from "./TodoEdit";
import TodoEmpty from "./TodoEmpty";

const TodoList = () => {
  const [todoEditing, setTodoEditing] = useState(true);

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Fisrt task",
      status: "pending"
    },
    {
      id: 2,
      title: "Fisrt Two",
      status: "pending"
    },
    {
      id: 3,
      title: "Fisrt Three",
      status: "done"
    }
  ]);

  // const onCreateTodo = (newTodo) => {
  //   console.log(newTodo);
  //   const finalTodoList = [newTodo, ...todo];
  //   setTodo(finalTodoList);
  // };

  const onCreateTodo = (newTodo) => {
    let createTodo = todo.slice();
    createTodo.unshift(newTodo);
    setTodo(createTodo);
  };

  // const handleListDelete = (index) => {
  //   console.log("Delete", index);
  //   const listDelete = todo.filter((todo, idx) => index !== idx);
  //   setTodo(listDelete);
  // };

  const handleListDelete = (index) => {
    let newtodo = todo.slice();
    newtodo.splice(index, 1);
    setTodo(newtodo);
  };

  const onUpdateTodo = (index, newTodo) => {
    let createTodo = todo.slice();
    createTodo[index] = newTodo;
    setTodo(createTodo);
    setTodoEditing(null);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center todo-title">My Todos</Card.Title>
        <TodoCreate onCreateTodo={onCreateTodo} />
        <ListGroup>
          {todo.length === 0 && <TodoEmpty />}
          {todo.map((todo, index) => (
            <ListGroup.Item
              variant={todo.status === "pending" ? "info" : "warning"}
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {todoEditing === index ? (
                <TodoEdit
                  todo={todo}
                  index={index}
                  onUpdateTodo={onUpdateTodo}
                />
              ) : (
                <>
                  {todo.status === "pending" && (
                    <p className="m-0">{todo.title}</p>
                  )}
                  {todo.status === "done" && (
                    <p className="m-0">
                      <del>{todo.title}</del>
                    </p>
                  )}
                </>
              )}

              <div>
                {todoEditing === index ? (
                  <Button
                    variant="outline-danger"
                    onClick={() => setTodoEditing(null)}
                  >
                    <MdCancel className="fs-4" />
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={() => setTodoEditing(index)}
                  >
                    Edit
                  </Button>
                )}

                <Button
                  variant="outline-danger"
                  className="ms-2"
                  onClick={() => handleListDelete(index)}
                >
                  <MdDeleteSweep className="fs-4" />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default TodoList;
