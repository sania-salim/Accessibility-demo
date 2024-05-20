import useTheme from "../../useTheme"
import { StyledToggleButton } from "./ToggleButton.style";


const ToggleButton = () => {

    const [theme, toggleTheme] =useTheme();
    
  return (
    <StyledToggleButton onClick={()=>toggleTheme}>

    </StyledToggleButton>
  )
}

export default ToggleButton;