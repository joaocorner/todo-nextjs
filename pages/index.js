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
      <Card title="Task 1" description="This is a task" />
    </StyledMain>
  );
};

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  button {
    background-color: #212529;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #000;
    }
  }
`;

const Card = ({ title, description, id, deleteTask }) => {
  return (
    <StyledCard>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </StyledCard>
  );
};
