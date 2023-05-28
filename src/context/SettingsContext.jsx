import { createContext, useState, useEffect } from 'react'

export const SettingsContext = createContext()

export const SettingsContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  useEffect(() => {
    const userSettings = window.localStorage.getItem('user-settings')
    if (!userSettings) return
    const { isDark, isMuted } = JSON.parse(userSettings)
    if (isMuted !== undefined) setIsMuted(isMuted)
    if (isDark !== undefined) {
      setIsDark(isDark)
    } else {
      const themeUser = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(themeUser)
    }
  }, [])
  const changeIsDark = () => {
    setIsDark((a) => {
      const userSettings = window.localStorage.getItem('user-settings')
      const userSettingsParsed = JSON.parse(userSettings)
      window.localStorage.setItem('user-settings', JSON.stringify({ ...userSettingsParsed, isDark: !a }))
      return !a
    })
  }
  const changeIsMuted = () => {
    setIsMuted((a) => {
      const userSettings = window.localStorage.getItem('user-settings')
      const userSettingsParsed = JSON.parse(userSettings)
      window.localStorage.setItem('user-settings', JSON.stringify({ ...userSettingsParsed, isMuted: !a }))
      return !a
    })
  }
  return (
    <SettingsContext.Provider value={{ isDark, changeIsDark, isMuted, changeIsMuted }}>
      {children}
    </SettingsContext.Provider>
  )
}
