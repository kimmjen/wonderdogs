import { Link, useLocation } from 'react-router-dom'

interface NavItem {
  path: string
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { path: '/', label: '홈', icon: '' },
  { path: '/players', label: '선수단', icon: '' },
  { path: '/schedule', label: '경기 일정', icon: '' },
  { path: '/stats', label: '통계', icon: '' },
  { path: '/components', label: '컴포넌트', icon: '' },
]

export const ThreadNavigation = () => {
  const location = useLocation()

  return (
    <div className="space-y-6">
      {/* 로고 */}
      <div className="text-center">
        <Link to="/">
          <img
            src="/logo.webp"
            alt="필승 원더독스"
            className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          필승 원더독스
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Under → Wonder
        </p>
      </div>

      {/* 네비게이션 */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                block px-4 py-3 rounded-lg font-semibold text-center
                transition-all duration-200
                ${
                  isActive
                    ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

    </div>
  )
}

