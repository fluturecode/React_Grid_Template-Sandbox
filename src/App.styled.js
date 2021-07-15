import styled from "styled-components"

export const HolyGrailWrapper = styled.div`
	display: grid;
	height: 100vh;
	grid-template-rows: 1fr 4fr 1fr;
	grid-template-areas:
		"header header header"
		"nav main side"
		"nav main side"
		"footer footer footer";
`
export const HeaderWrapper = styled.div`
	grid-area: header;
	background: lightyellow;
`
export const LeftSideBarWrapper = styled.div`
	grid-area: nav;
	background: lightsteelblue;
`

export const NavBarWrapper = styled.div`
	background: lightpink;
`

export const MainWrapper = styled.div`
	grid-area: main;
	background: lightgreen;
`

export const RightSideBar = styled.div`
	grid-area: side;
	background: #ddd;
`

export const Footer = styled.div`
	grid-area: footer;
	background: lightgray;
`
