import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";

function HomePage() {
  return (
    <div>
      <CSSReset />
      <Header />
      <Main />
    </div>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: #212529;
  color: #fff;
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.5rem;
  justify-content: space-between;

  a {
    color: #fff;
  }

  h1 {
    font-size: 2rem;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 350px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    height: 120px;
    justify-content: space-around;
    ul {
      width: 100%;
      justify-content: space-around;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <a href="#">ToDo List</a>{" "}
      </h1>
      <ul>
        <li>
          <a href="#">New Task</a>
        </li>
        <li>
          <a href="#">Columns</a>
        </li>
        <li>
          <a href="#">Tag</a>
        </li>
      </ul>
    </StyledHeader>
  );
};

const StyledMain = styled.main`
  background-color: #9d9d9d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 20px;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>ToDo List</h1>
      <p>Let's get some work done!</p>
    </StyledMain>
  );
};
