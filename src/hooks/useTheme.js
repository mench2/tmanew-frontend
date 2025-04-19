import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../themes';

export const useTheme = () => {
  const [theme, setTheme] = useState(null);
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    // Получаем цветовую схему из Telegram
    const colorScheme = tg.colorScheme;
    const themeParams = tg.themeParams;

    // Если есть параметры темы от Telegram, используем их
    if (themeParams) {
      setTheme({
        ...(colorScheme === 'dark' ? darkTheme : lightTheme),
        ...themeParams
      });
    } else {
      // Иначе используем стандартные темы
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    }

    // Слушаем изменения темы
    tg.onEvent('themeChanged', () => {
      const newColorScheme = tg.colorScheme;
      const newThemeParams = tg.themeParams;
      
      setTheme({
        ...(newColorScheme === 'dark' ? darkTheme : lightTheme),
        ...newThemeParams
      });
    });
  }, [tg]);

  return theme;
}; 