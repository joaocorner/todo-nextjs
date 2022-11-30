import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";

function HomePage() {
  return (
    <div>
      <CSSReset />
      <Header />
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
    height: 200px;
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
