import "@mui/material";
import "./App.css";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";
import { call } from "./service/ApiService";
import Navigation from "./Navigation";

function App() {
  // const [item, setItem] = useState({ id: 1, done: true, title: "제목" });
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([
    { id: "ID-1", done: true, title: "제목1" },
    { id: "ID-2", done: false, title: "제목2" },
  ]);

  let str = [];
  for (let i = 0; i < items.length; i++) {
    str.push(<Todo item={items[i]} />);
  }

  const addItem = (item) => {
    // item.id = "ID-" + items.length; // key를 위한 id
    // item.done = false; // done 초기화
    // // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야한다.
    // setItems([...items, item]);
    // console.log(items);
    call("/todo", "POST", item).then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    // // 삭제할 아이템을 찾는다.
    // const newItems = items.filter((e) => e.id !== item.id);
    // // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    // setItems([...newItems]);
    call("/todo", "DELETE", item).then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    // setItems([...items]);
    call("/todo", "PUT", item).then((response) => setItems(response.data));
  };

  // const requestOptions = {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // };

  useEffect(() => {
    // fetch("http://localhost:8080/todo", requestOptions)
    //   .then((respnse) => Response.json())
    //   .then(
    //     (response) => {
    //       setItems(response.data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    call("/todo", "GET", null).then((response) => setItems(response.data));
    setLoading(false);
  }, []);

  let todoItems = items && items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );

  /* 로딩중이 아닐 때 렌더링 할 부분 */
  let todoListPage = (
    <div>
      <Navigation />
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );

  /* 로딩중일 때 렌더링 할 부분 */
  let loadingPage = <h1> 로딩 중... </h1>;
  let content = loadingPage;

  if (!loading) {
    /* 로딩중이 아니면 todoListPage를 선택 */
    content = todoListPage;
  }

  /* 선택한 content 렌더링 */
  return <div className="App">{content}</div>;
  // return (
  //   <div className="App">

  //     loading ? <h1> 로딩 중..</h1>
  //     ) : (
  //     <Navigation />
  //     <Container maxWidth="md">
  //       <AddTodo addItem={addItem} />
  //       <div className="TodoList">{todoItems}</div>
  //     </Container>
  //     {/* <Todo
  //       number={10}
  //       item={item}
  //       onEvent={function () {
  //         console.log("message");
  //       }}
  //     /> */}
  //     {/* {str} */}
  //     {/* {todoItems} */}
  //   </div>
  // );
}

export default App;
