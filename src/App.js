import {
	HolyGrailWrapper,
	HeaderWrapper,
	NavBar,
	MainWrapper,
	RightSideBar,
	Footer,
	LeftSideBarWrapper,
} from "./styledApp.js"

export const App = () => {
	return (
		<>
			<HolyGrailWrapper>
				<HeaderWrapper>HEADER</HeaderWrapper>
				<LeftSideBarWrapper>
					<NavBar>
						<p>Link 1</p>
						<p>Link 2</p>
						<p>Link 3</p>
					</NavBar>
				</LeftSideBarWrapper>
				<MainWrapper>MAIN CONTENT</MainWrapper>
				<RightSideBar>SIDEBAR</RightSideBar>
			</HolyGrailWrapper>
			<Footer>Copywright FOOTER</Footer>
		</>
	)
}
