import type { NextPage } from "next";
import styled from "@emotion/styled";

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
					<li>
						<button>
							<span>이벤트</span>
						</button>
					</li>
					<li>
						<button>
							<span>사이드</span>
						</button>
					</li>
					<li>
						<button>
							<span>음료</span>
						</button>
					</li>
					<li>
						<button>세트</button>
					</li>
				</ul>
			</Tab>
		</Wrapper>
	);
};

export default Home;
