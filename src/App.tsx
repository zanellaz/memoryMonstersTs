import Header from './components/Header/Header'
import MonstersWrapper from './components/MonstersWrapper/MonstersWrapper'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  return (
    <ThemeProvider theme={theme}>
        <Header 
          toggleTheme={toggleTheme}
        />
        <MonstersWrapper />
    </ThemeProvider>
  );
}

export default App;
