import { Link, useLocation } from 'react-router-dom'
import { Button } from '../common'
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  
  const navItems = [
    { path: '/', label: '홈' },
    { path: '/players', label: '선수단' },
    { path: '/schedule', label: '경기일정' },
    { path: '/stats', label: '통계' },
  ]
  
  return (
    <header className="bg-wonderdogs-gradient shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-3xl font-bold text-white">
              🐕 원더독스
            </div>
          </Link>
          
          {/* 네비게이션 */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2 rounded-lg font-semibold transition-all duration-200
                  ${location.pathname === item.path
                    ? 'bg-white text-wonderdogs-primary'
                    : 'text-white hover:bg-white/20'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* 테마 토글 & CTA 버튼 */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="테마 변경"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <Button variant="accent" size="sm">
              팬 가입
            </Button>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
