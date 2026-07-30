'use client';

import React from 'react';
import { ThemeContext, useThemeInit } from '../../hooks/useTheme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeState = useThemeInit();

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}
