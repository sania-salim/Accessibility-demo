import { Button } from "./components/Button/Button"
import NavBar from "./components/NavBar/NavBar";
import { iThemeMap, theme}  from "./theme";
import useTheme from './useTheme'
import { ThemeProvider } from "styled-components";
import GlobalStyles from './GlobalStyles'
import Content from "./components/Content/Content";

function App() {

  const [currentTheme] = useTheme();

  const applyTheme = theme[currentTheme as keyof iThemeMap];

  return (
    <ThemeProvider theme={applyTheme}>
      <GlobalStyles/>
       <NavBar/>
       <Content/>
    </ThemeProvider>
    
  )
}

export default App;
