import { useRouter } from "next/router";
import React from "react";

const Login = () => {
  const router = useRouter();
  const onLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <input placeholder={"Username"} />
      <input placeholder={"Password"} type={"password"} />
      <button onClick={onLogin} type={"button"}>
        Log In
      </button>
    </>
  );
};
export default Login;
