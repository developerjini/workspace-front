import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { signout } from "./service/ApiService";

import React from "react";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">
              오늘의 할일
              {/* {localStorage.getItem("username")}의 할일  */}
            </Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
