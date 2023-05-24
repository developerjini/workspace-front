import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { signin, socialLogin } from "./service/ApiService";
import { Link } from "react-router-dom";

const Login = () => {
  // 로그인 버튼 이벤트
  const handleSumit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");
    // ApiService의 signin 메서드를 사용해 로그인.
    signin({ username, password }).then((resp) => {
      console.log(resp);
      console.log(resp.status);
    });
  };

  const handleSocialLogin = (provider) => {
    socialLogin(provider);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSumit}>
        {" "}
        {/* submit 버튼을 누르면 hanleSubmit이 실행됨 */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="아이디"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => handleSocialLogin("github")}
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#000" }}
            >
              깃허브로 로그인하기
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => handleSocialLogin("google")}
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#4285f4" }}
            >
              구글로 로그인
            </Button>
          </Grid>
          <Grid item>
            <Link to="/signup" variant="body2">
              계정이 없습니까? 여기서 가입하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
