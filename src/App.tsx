import Header from './components/Header/Header'
import MonstersWrapper from './components/MonstersWrapper/MonstersWrapper'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import FormatSelect from './components/FormatSelect/FormatSelect';

import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  return (
    <ThemeProvider theme={theme}>
      <div className='container'>
        <Header 
          toggleTheme={toggleTheme}
        />
        <FormatSelect />
        <div className="content">
          <MonstersWrapper />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
