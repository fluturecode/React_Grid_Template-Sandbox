import styled from "styled-components"

export const HolyGrailWrapper = styled.div`
	display: grid;
	height: 100vh;
`
export const HeaderWrapper = styled.div`
	grid-area: header;
`
export const LeftSideBarWrapper = styled.div`
	grid-area: header;
`
export const NavBar = styled.div`
	background: #eee;
	padding: 1em;
`
export const MainWrapper = styled.div`
	grid-area: main;
	overflow: auto;
	background: #eee;
	padding: 1em;
`

export const RightSideBar = styled.div`
	background: #ddd;
	padding: 1em;
`

export const Footer = styled.div`
	grid-area: footer;
	background: lightgray;
	grid-area: 2 / 1 / 3 / 4;
`
