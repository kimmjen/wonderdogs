import { Badge } from '../../../components/common'
import { programData, ratings } from '../../../data/program'

interface HomeLeftSidebarProps {
  selectedTab: 'about' | 'ratings' | 'team'
  onTabChange: (tab: 'about' | 'ratings' | 'team') => void
}

export const HomeLeftSidebar = ({ selectedTab, onTabChange }: HomeLeftSidebarProps) => {
  return (
    <div className="space-y-6">
      <div>
        <img
          src="/logo.webp"
          alt="필승 원더독스"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
          필승 원더독스
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Under → Wonder
        </p>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => onTabChange('about')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedTab === 'about'
              ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          프로그램 소개
        </button>
        <button
          onClick={() => onTabChange('ratings')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedTab === 'ratings'
              ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          시청률
        </button>
        <button
          onClick={() => onTabChange('team')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedTab === 'team'
              ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          팀 정보
        </button>
      </nav>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span className="font-semibold">방송사:</span>
            <span>{programData.broadcaster}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span className="font-semibold">방영:</span>
            <span>{programData.airtime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

