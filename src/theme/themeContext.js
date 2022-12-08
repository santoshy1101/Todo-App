import React, { Children, createContext } from 'react'

export const themeContext =createContext()

const ThemeContextProvider = ({Children}) => {
  return (
    <ThemeContext.Provider>
    {Children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext