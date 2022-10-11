import axios from "axios";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  let id = 0;

  const postRequest = async (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/todos", {
        id: id + 1,
        title: todo,
      })
      .then(function (res) {
        const { data } = res;
        console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Posting Form Data With Axios</h1>
      <div className="table-cont">
        <form className="input-group" onSubmit={(e) => postRequest(e)}>
          <input
            type="text"
            placeholder="My todo is..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            name="text"
            className="input"
          />{" "}
          <button type="submit" className="button--submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default App;
