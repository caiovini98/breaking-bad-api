import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/UI/Header";
import Characters from "./components/Characters/Characters";
import Search from "./components/UI/Search";

const App = () => {
  const [items, setItems] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(results.data);
      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
