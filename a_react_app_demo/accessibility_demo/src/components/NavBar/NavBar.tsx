// import { Button } from "../Button/Button";
import ToggleButton from "../ToggleButton/ToggleButton";
import { HeaderContainer,HeaderGrouped,NavLinksContainer } from "./NavBar.style";


const NavBar = () => {
  return (
    <HeaderContainer>
        <h1>Newsletter</h1>
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