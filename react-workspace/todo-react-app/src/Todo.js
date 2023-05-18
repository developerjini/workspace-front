import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox } from "@mui/material";

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

  return (
    // <div className="Todo">
    //   <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
    //   <label id={item.id}>{item.title}</label>
    // </div>
    <ListItem key={item.id}>
      <Checkbox checked={item.done} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked" }}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
    </ListItem>
  );
}

export default Todo;
