import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  @media (max-width: 767px) {
    background-color: pink;
    height: 100vh;
  }
`;

const Tab = styled.nav`
  ul {
    display: flex;

  }
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Tab>
        <ul>
          <li>이벤트</li>
          <li>사이드</li>
          <li>음료</li>
          <li>세트</li>
        </ul>
      </Tab>
    </Wrapper>
  );
}

export default Home;
