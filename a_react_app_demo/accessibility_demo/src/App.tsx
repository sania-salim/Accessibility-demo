import NavBar from "./components/NavBar/NavBar";
import { iThemeMap, theme}  from "./theme";
import useTheme from './useTheme'
import { ThemeProvider } from "styled-components";
import GlobalStyles from './GlobalStyles'
import Content from "./components/Content/Content";
import { Subscription } from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";


function App() {

  const [currentTheme] = useTheme();

  const applyTheme = theme[currentTheme as keyof iThemeMap];

  return (
    <ThemeProvider theme={applyTheme}>
      <GlobalStyles/>
       <NavBar/>
       <Content/>
       <Subscription/> 
       <Video/>
       <Footer/>  
    </ThemeProvider>
    
  )
}

export default App;
