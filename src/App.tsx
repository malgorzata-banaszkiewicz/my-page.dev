import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Menu } from './components/Header/Menu';
import { MainPage } from './components/MainPage/MainPage';
import { Projects } from './components/Projects/Projects';
import { NotFound } from './NotFound';
import { MenuSection } from './components/Header/MenuSection';
import { Main } from './components/Main/Main';
import { DefaultTheme, ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './components/Theme/theme';
import { ThemeButton } from './components/Header/ThemeButton';
import { pageTitles } from './routing/routing';
import { All } from './components/All/All';


function App() {
  const [currentPage, setCurrentPage] = useState<string>(window.location.pathname);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const mode = (event:React.MouseEvent <HTMLButtonElement, MouseEvent>) => {event.preventDefault(), isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true)};

  let buttonText = isDarkMode ? '🌞Light Theme' : '🌙Dark Theme';

  const GlobalStyles = createGlobalStyle`
  body{
   background-color: ${ isDarkMode ? theme.dark.primary : theme.light.primary };
   color: ${ isDarkMode ? theme.dark.text : theme.light.text };
  }
`
createGlobalStyle<{theme: DefaultTheme}>

  useEffect(() => {
    document.title = pageTitles[currentPage]
  }, [currentPage]);
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>},
  {
    path: '/aboutme',
    element: <AboutMe></AboutMe>},
  {
    path: '/projects',
    element: <Projects></Projects>},
  {
    path: '/contact',
    element: <Contact></Contact>},
  {
    path:'/*',
    element: <NotFound></NotFound>}
]);
  return (
      <All>
    
      <ThemeProvider theme={theme}>

      <MenuSection color={isDarkMode}>

        <ThemeButton onClick={mode} color={isDarkMode}>{buttonText}</ThemeButton>
        <Header color={isDarkMode}>Menu:</Header>
        <nav>
        <Menu
          color={isDarkMode}
          isSelected={ currentPage === '/' } onClick={() => {
            setCurrentPage('/')
            window.history.pushState(null, '', '/')
          }}> Main Page
        </Menu>

        <Menu
          color={isDarkMode}
          isSelected={ currentPage === '/aboutme' } onClick={() => {
            setCurrentPage('/aboutme')
            window.history.pushState(null, '', '/aboutme')
          }}>About me
        </Menu>

        <Menu
          color={isDarkMode}
          isSelected={ currentPage === '/projects' } onClick={() => {
            setCurrentPage('/projects')
            window.history.pushState(null, '', '/projects')
          }}>Projects
        </Menu>

        <Menu
          color={isDarkMode}
          isSelected={ currentPage === '/contact' } onClick={() => {
            setCurrentPage('/contact')
            window.history.pushState(null, '', '/contact')
          }}> Contact
        </Menu>

        </nav>
        </MenuSection>

      <Main>
        <RouterProvider router={router}></RouterProvider>
      </Main>

      <Footer color={isDarkMode}> </Footer>
      </ThemeProvider>
      <GlobalStyles />
      
    </All>
  )
}
export default App
