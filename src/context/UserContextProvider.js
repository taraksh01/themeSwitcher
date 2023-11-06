import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "TestUser",
    email: "test@example.com",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
