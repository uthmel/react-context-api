import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import RightSide from './components/RightSide';
import defaultTweets from './assets/data/tweets.js';
import user from './assets/data/user.js';

export const AppContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    theme === 'light'
      ? document.body.style.backgroundColor = 'white'
      : document.body.style.backgroundColor = 'black';
  }, [theme]);

  return (
    <AppContext.Provider value={{ user, tweets, setTweets }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="container">
          <Header />
          <Tweets />
          <RightSide />
        </div>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export { App };

