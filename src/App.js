import styled from "styled-components"

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-gap: 1em;
	grid-template-areas:
		"header"
		"main"
		"footer";
`
const Header = styled.div`
	grid-area: header;
`
const NavBar = styled.div`
	background: #eee;
	padding: 1em;
`
const Main = styled.div`
	grid-area: main;
	overflow: auto;
	background: #eee;
	padding: 1em;
`

const RightSideBar = styled.div`
	background: #ddd;
	padding: 1em;
`

const Footer = styled.div`
	grid-area: footer;
	background: lightgray;
	grid-area: 2 / 1 / 3 / 4;
`

export const App = () => {
	return (
		<>
			<Wrapper>
				<Header />
				<NavBar>
					<p>Link 1</p>
					<p>Link 2</p>
					<p>Link 3</p>
				</NavBar>
				<Main>
					Main - Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to make a type specimen book.
				</Main>
				<RightSideBar>
					Sidebar - It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at its
					layout.
				</RightSideBar>
			</Wrapper>
			<Footer>Copywright Footer</Footer>
		</>
	)
}
