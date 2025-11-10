import Header from './Header'
import Footer from './Footer'
import { useTheme } from '../../context/ThemeContext'

const MainLayout = ({ children }) => {
  const { theme } = useTheme()
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
