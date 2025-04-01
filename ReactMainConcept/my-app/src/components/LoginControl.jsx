import React, { useState, useEffect } from "react";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    console.log("useEffect like componentDidUpdate");
  }, []);

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={handleLogIn}>Login</button>
      ) : (
        <button onClick={handleLogOut}>Logout</button>
      )}
    </div>
  );
}
