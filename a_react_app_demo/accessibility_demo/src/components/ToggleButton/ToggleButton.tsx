import useTheme from "../../useTheme"
import { ThemeToggleButton } from "./ToggleButton.style";
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { MouseEventHandler } from "react";


const ToggleButton = () => {

    const [theme, toggleTheme] =useTheme();
    
  return (
    <ThemeToggleButton onClick={toggleTheme as MouseEventHandler<HTMLButtonElement>}>
      {theme === 'light' ? <img src={sun} alt="Sun icon" /> : <img src={moon} alt="Moon icon" />}
    </ThemeToggleButton>
  )
}

export default ToggleButton;