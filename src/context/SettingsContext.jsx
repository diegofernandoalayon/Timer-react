// TODO: crear el context para tener el theme global, con el estado controlar los icons,
import { createContext, useState } from 'react'

export const SettingsContext = createContext()

export const SettingsContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const changeIsDark = () => setIsDark((a) => !a)
  return (
    <SettingsContext.Provider value={{ isDark, changeIsDark }}>
      {children}
    </SettingsContext.Provider>
  )
}
