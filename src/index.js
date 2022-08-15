import { render } from 'react-dom'
import App from './App'
import { LanguageProvider } from './contexts/languageName'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
  ,
  document.getElementById('root')
)
