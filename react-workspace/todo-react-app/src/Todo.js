import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import "@mui/icons-material";
import { DeleteOutlined } from "@mui/icons-material";

function Todo(props) {
  console.log(props);
  console.log(props.number);
  // console.log(props.onEvent());
  // console.log(typeof props.onEvent());

  let result = useState("str");

  let [str, setStr] = result;
  // console.log(str);
  // str[1]("changed str");

  const [item, setItem] = useState(props.item);
  console.log(item);
  // console.log(item.a);

  const deleteItem = props.deleteItem;
  const [readOnly, setReadOnly] = useState(true);
  const editItem = props.editItem;

  // turnOffReadOnly 함수 작성
  const trunOffReadOnly = () => {
    setReadOnly(false);
  };

  // turnOnReadOnly 함수 작성
  const trunOnReadOnly = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // deleteEventHandler 작성
  const deleteEventHandler = () => {
    deleteItem(item);
  };

  const editEventHandler = (e) => {
    item.title = e.target.value;
    editItem();
  };

  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
  };

  return (
    // <div className="Todo">
    //   <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
    //   <label id={item.id}>{item.title}</label>
    // </div>
    <ListItem key={item.id}>
      <Checkbox checked={item.done} onChange={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          onClick={trunOffReadOnly}
          onKeyDown={trunOnReadOnly}
          onChange={editEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
