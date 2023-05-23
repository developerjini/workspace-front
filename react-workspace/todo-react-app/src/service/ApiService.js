import { API_BASE_URL } from "../api-config";

// API_BASE_URL
export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken); //  Bearer에 공백 반드시 있어야함
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // Get method
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 403) {
        window.location.href = "/login"; // redirect
      } else {
        new Error(response);
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO).then((response) => {
    console.log(response);
    // alert("로그인 토큰 :" + response.token);
    if (response.token) {
      // 로컬스토리지에 토큰 저장
      localStorage.setItem("ACCESS_TOKEN", response.token);

      // token이 존재하는 경우 Todo 화면으로 리디렉트
      window.location.href = "/";
    }
  });
}

export function signout() {
  localStorage.setItem("ACCESS_TOKEN", null);
  // localStorage.removeItem("ACCESS_TOKEN");
  window.location.href = "/login";
}
