import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./components/todo/TodoList";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container className="mt-8">
      <TodoList />
    </Container>
  );
}
