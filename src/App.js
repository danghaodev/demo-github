import "./App.css";
import Game from "./tic-tac-toe/Game";
import Calculator from "./calculator/Calculator";
import ListToDo from "./to-do-app/ListToDo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationMenu from "./navigation/NavigationMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import GroceryList from "./grocery/GroceryList";
import GroceryListRedux from "./grocery/GroceryListRedux";
import ListToDoRedux from "./to-do-app/ListToDoRedux";
import RandomQuote from "./random-quote/RandomQuote";
import MenuList from "./menu/MenuList";
import Reviews from "./review/Reviews";
import TabList from "./tab/TabList";
import Timeline from "./timeline/TimeLine";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path="/" exact element={<Game />} />
          <Route path="/calculator" exact element={<Calculator />} />
          <Route path="/listtodo" exact element={<ListToDo />} />
          <Route path="/listtodoRedux" exact element={<ListToDoRedux />} />
          <Route path="/grocery" exact element={<GroceryList />} />
          <Route path="/groceryRedux" exact element={<GroceryListRedux />} />
          <Route path="/randomQuote" exact element={<RandomQuote />} />
          <Route path="/menu" exact element={<MenuList />} />
          <Route path="/tab" exact element={<TabList />} />
          <Route path="/review" exact element={<Reviews />} />
          <Route path="/timeline" exact element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
