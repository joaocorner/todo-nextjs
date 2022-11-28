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
`;

const Header = () => {
  return <StyledHeader>ToDo List</StyledHeader>;
};
