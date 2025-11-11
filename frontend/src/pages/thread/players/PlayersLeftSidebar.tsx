// import { Badge, VolleyballCourt } from '../../../components/common'
// import { staff } from '../../../data/players'
// import { Player } from '../../../types'

// This component is not currently used

type PositionKey = 'OH' | 'OP' | 'S' | 'MB' | 'L' | 'COACH' | 'STAFF'

interface PlayersLeftSidebarProps {
  selectedPosition: PositionKey
  onPositionChange: (position: PositionKey) => void
}

export const PlayersLeftSidebar = ({ selectedPosition, onPositionChange }: PlayersLeftSidebarProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          선수단
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          2025-26 시즌 로스터
        </p>
      </div>

      <nav className="space-y-2">
        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 px-4 py-2">
          선수 포지션
        </div>
        <button
          onClick={() => onPositionChange('OH')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedPosition === 'OH'
              ? 'bg-orange-500 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>아웃사이드 히터</span>
            <span className="text-xs opacity-70">OH</span>
          </div>
        </button>
        <button
          onClick={() => onPositionChange('OP')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedPosition === 'OP'
              ? 'bg-purple-500 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>아포짓 스파이커</span>
            <span className="text-xs opacity-70">OP</span>
          </div>
        </button>
        <button
          onClick={() => onPositionChange('S')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedPosition === 'S'
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>세터</span>
            <span className="text-xs opacity-70">S</span>
          </div>
        </button>
        <button
          onClick={() => onPositionChange('MB')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedPosition === 'MB'
              ? 'bg-green-500 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>미들 블로커</span>
            <span className="text-xs opacity-70">MB</span>
          </div>
        </button>
        <button
          onClick={() => onPositionChange('L')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedPosition === 'L'
              ? 'bg-yellow-500 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>리베로</span>
            <span className="text-xs opacity-70">L</span>
          </div>
        </button>

        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 px-4 py-2 mt-4">
          코칭스태프
        </div>
        <button
          onClick={() => onPositionChange('COACH')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedPosition === 'COACH'
              ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          감독 & 코치
        </button>
        <button
          onClick={() => onPositionChange('STAFF')}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
            selectedPosition === 'STAFF'
              ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          지원 스태프
        </button>
      </nav>
    </div>
  )
}

