import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { render } from 'react-dom'
import App from './App'
import { LanguageProvider } from './contexts/languageName'
import { ThemeProvider } from './contexts/theme'
import TodoApp from './components/TodoApp/TodoApp'
import './index.css'

render(
  <ThemeProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/TodoApp" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </ThemeProvider>
  ,
  document.getElementById('root')
)
