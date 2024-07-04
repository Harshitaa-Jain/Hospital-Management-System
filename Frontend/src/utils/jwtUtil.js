// jwtUtil.js
export const getAuthorizationHeader = () => {
    const jwtToken = sessionStorage.getItem('token');

    console.log("token is ="+jwtToken);
    debugger;
    return `Bearer ${jwtToken}`;
  };
  