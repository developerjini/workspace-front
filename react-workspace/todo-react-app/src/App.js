import "@mui/material";
import "./App.css";
import Todo from "./Todo";
import { useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";

function App() {
  // const [item, setItem] = useState({ id: 1, done: true, title: "제목" });
  const [items, setItems] = useState([
    { id: 1, done: true, title: "제목1" },
    { id: 2, done: false, title: "제목2" },
  ]);

  let str = [];
  for (let i = 0; i < items.length; i++) {
    str.push(<Todo item={items[i]} />);
  }

  const addItem = (item) => {
    item.id = "ID-" + items.length; // key를 위한 id
    item.done = false; // done 초기화
    // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야한다.
    setItems([...items, item]);
    console.log(items);
  };

  let todoItems =
    items.length > 0 &&
    items.map((item) => (
      <Paper style={{ margin: 16 }}>
        <List>
          <Todo item={item} key={item.id} />
        </List>
      </Paper>
    ));

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
      {/* <Todo
        number={10}
        item={item}
        onEvent={function () {
          console.log("message");
        }}
      /> */}
      {/* {str} */}
      {/* {todoItems} */}
    </div>
  );
}

export default App;