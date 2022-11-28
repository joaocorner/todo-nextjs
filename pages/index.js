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

const StyledHeader = styled.div``;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};
