// import { Button } from "../Button/Button";
import ToggleButton from "../ToggleButton/ToggleButton";
import { HeaderContainer,HeaderGrouped,Logo,NavLinksContainer } from "./NavBar.style";


const NavBar = () => {
  return (
    <HeaderContainer>
        <Logo href="">Newsletter</Logo>
        <HeaderGrouped>
        <ToggleButton></ToggleButton>
            <NavLinksContainer>
                <a href="">Our whales</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </NavLinksContainer>
        </HeaderGrouped>
        
    </HeaderContainer>
  )
}

export default NavBar;