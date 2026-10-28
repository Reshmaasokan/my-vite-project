import { useState } from "react";

export default function OnclickWithToggle() {
  const [isLogin, setIsLogin] = useState(false);
  const message = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <div className="h3 text-primary text-center">
        Click the button to see the Details
      </div>
      <div className="text-center text-primary mt-3">
        {isLogin && <span>Welcome User!!!!</span>}
        <br />
        <button className="btn btn-success" onClick={message}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
}
