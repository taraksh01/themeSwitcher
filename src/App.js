import { useContext } from "react";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";
import { useState } from "react";

const App = () => {
  // const { name, email } = user;
  return (
    <UserContextProvider>
      <Profile />
      <SetProfile />
    </UserContextProvider>
  );
};

const Profile = () => {
  const { user } = useContext(UserContext);
  const { name, email } = user;
  return (
    <>
      <h1 className="text-center text-3xl text-green-500 font-bold">Profile</h1>
      <h1 className="text-center text-xl text-green-500">{name}</h1>
      <h2 className="text-center text-xl text-green-500">{email}</h2>
    </>
  );
};

const SetProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ name, email });
  };
  return (
    <>
      <h1 className="text-center text-3xl text-pink-500">Set Profile</h1>
      <div className="flex flex-col items-center gap-3  text-pink-500">
        <input
          type="text"
          className="border border-gray-500 valid:border-green-300 invalid:border-red-400 rounded-md p-1"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          className="border border-gray-500 valid:border-green-300 invalid:border-red-400 rounded-md p-1"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleChange}
        >
          Update Profile
        </button>
      </div>
    </>
  );
};
export default App;
