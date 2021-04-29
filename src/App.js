import {
	HolyGrailWrapper,
	HeaderWrapper,
	NavBarWrapper,
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
					<NavBarWrapper>
						<p>Link 1</p>
						<p>Link 2</p>
						<p>Link 3</p>
					</NavBarWrapper>
				</LeftSideBarWrapper>
				<MainWrapper>MAIN CONTENT</MainWrapper>
				<RightSideBar>SIDEBAR</RightSideBar>
				<Footer>Copywright FOOTER</Footer>
			</HolyGrailWrapper>
		</>
	)
}
