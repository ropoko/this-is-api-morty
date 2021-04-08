import { useEffect, useState } from 'react';

import Header from './components/Header/';
import Card from './components/Card/';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import useLocalState from './hooks/useLocalState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import axios from 'axios';

function App() {
  const [theme, setTheme] = useLocalState<DefaultTheme>('theme', light);

  const [counter, setCounter] = useState(1);
  const [rick, setRick] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      const { data } = res;
      const { results } = data;
      const newRick: any = [];

      console.log(counter)

      results.forEach((rick: any, index: number) => {
        newRick[index + 1] = {
          id: index,
          name: rick.name,
          url: `https:rickandmortyapi.com/api/character/avatar/${index + 1}.jpeg`
        };
      });
      setRick(newRick);
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === 'light'  ? dark : light);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <div className="grid-ricks">
            { rick.map((rick: {name: string; id: number; url: string;}) => (
              <Card 
                key={rick.id} 
                image={rick.url} 
                name={rick.name} 
              />
            ))}
          </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
