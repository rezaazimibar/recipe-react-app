import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav>
            <GiKnifeFork />
            <Logo to={"/"}>delivery</Logo>
          </Nav>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </div>
    </>
  );
};
const Logo = styled(Link)`
  font-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
