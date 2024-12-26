import { useEffect, useState } from "react";
import Card from "./components/Card";
import LoadingSpiner from "./components/LoadingSpiner";


function App() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState();

  useEffect(() => {
    async function fetchUser() {
      setIsFetching(true);
      try {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
        if (!response.ok) {
          throw new Error("Failed to fetch the user.");
        }
        const data = await response.json();
        // console.log(data.results);
        const userData = data.results;
        setUsers(userData);
        setIsFetching(false);
      } catch (error) {
        setIsError(error.message || "Could not able to fetch the user data, please try again latter.");
        setIsFetching(false);
      }
    }
    fetchUser();
  }, [])

  return (
    <>
      {/* <h1>Employer card</h1> */}
      {isFetching && <LoadingSpiner />}
      {!isFetching && !isError &&
        users.length>0 && users.map(user=><Card key={user.id.value} firstName={user.name.first} lastName={user.name.last} gender={user.gender} phoneNumber={user.phone} imageSrc={user.picture.large} />)
      }

      {isError&&<p>{isError}</p>}

    </>
  )
}

export default App;
