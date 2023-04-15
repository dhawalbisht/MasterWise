import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(usersCollectionRef);
        const userData = querySnapshot.docs.map((doc) => doc.data());
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Age:</strong>{" "}
            {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
