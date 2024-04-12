import { useEffect, useState, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { Monster } from "./types/Monster.type";
import { getData } from "./utils/data.utils";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonster] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonster(users);
    }

    fetchUsers()
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="app">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onchangeHandler={onSearchChange}
        className="monster-search-box"
        placeholder="search monster"
      />
      <br />
      <SearchBox
        onchangeHandler={onTitleChange}
        className="title-search-box"
        placeholder="set titlte"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
