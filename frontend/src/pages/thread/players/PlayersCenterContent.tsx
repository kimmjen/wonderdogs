import { Badge, VolleyballCourt } from '../../../components/common'
import { staff } from '../../../data/staffs'
import { Player } from '../../../types'

type PositionKey = 'ALL' | 'OH' | 'OP' | 'S' | 'MB' | 'L' | 'COACH' | 'STAFF'

interface PlayersCenterContentProps {
  selectedPosition: PositionKey
  players: Player[]
  selectedPlayer: Player | null
  onPlayerClick: (player: Player) => void
  onPositionChange: (position: PositionKey) => void
}

export const PlayersCenterContent = ({
  selectedPosition,
  players,
  selectedPlayer,
  onPlayerClick,
  onPositionChange
}: PlayersCenterContentProps) => {
  return (
    <div className="space-y-2">
      {/* 헤더 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          필승 원더독스 선수단
        </h2>

        {/* 포지션 필터 */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onPositionChange('ALL')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'ALL'
                ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            전체 선수
          </button>
          <button
            onClick={() => onPositionChange('OH')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'OH'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            아웃사이드 히터
          </button>
          <button
            onClick={() => onPositionChange('OP')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'OP'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            아포짓 스파이커
          </button>
          <button
            onClick={() => onPositionChange('S')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'S'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            세터
          </button>
          <button
            onClick={() => onPositionChange('MB')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'MB'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            미들 블로커
          </button>
          <button
            onClick={() => onPositionChange('L')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'L'
                ? 'bg-yellow-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            리베로
          </button>
          <button
            onClick={() => onPositionChange('COACH')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'COACH'
                ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            코칭스태프
          </button>
          <button
            onClick={() => onPositionChange('STAFF')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedPosition === 'STAFF'
                ? 'bg-wonderdogs-primary dark:bg-wonderdogs-secondary text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            지원스태프
          </button>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      {selectedPosition === 'ALL' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 배구 코트 - 2/3 */}
          <div className="lg:col-span-2">
            <VolleyballCourt
              players={players.filter(p => ['OH', 'OP', 'S', 'MB', 'L'].includes(p.position))}
              onPlayerClick={onPlayerClick}
              selectedPlayerId={selectedPlayer?.id}
            />
          </div>

          {/* 스태프 영역 - 1/3 */}
          <div className="space-y-4">
            {/* 코칭스태프 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-wonderdogs-primary"></span>
                코칭스태프
              </h3>
              <div className="space-y-3">
                {staff.coaches.map((coach, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <img
                      src={coach.photo || `/images/${coach.name}.webp`}
                      alt={coach.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-wonderdogs-primary"
                      onError={(e) => {
                        e.currentTarget.src = '/logo.webp'
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-wonderdogs-primary dark:text-wonderdogs-accent">
                        {coach.role}
                      </div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {coach.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 지원스태프 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                지원스태프
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {staff.support.map((person, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <img
                      src={person.photo || `/images/${person.name}.webp`}
                      alt={person.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                      onError={(e) => {
                        e.currentTarget.src = '/logo.webp'
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {person.role}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {person.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : selectedPosition === 'COACH' ? (
        <div className="grid gap-6">
          {staff.coaches.map((coach, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <img
                  src={coach.photo || `/images/${coach.name}.webp`}
                  alt={coach.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-wonderdogs-primary dark:border-wonderdogs-secondary"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.webp'
                  }}
                />
                <div className="flex-1">
                  <Badge variant="accent" className="mb-2">{coach.role}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {coach.name}
                  </h3>
                  {coach.birth && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {coach.birth} {coach.height && `| ${coach.height}`} {coach.weight && `| ${coach.weight}`}
                    </p>
                  )}
                  {coach.career && (
                    <div className="space-y-1">
                      {coach.career.slice(0, 3).map((item, i) => (
                        <p key={i} className="text-sm text-gray-700 dark:text-gray-300">
                          • {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : selectedPosition === 'STAFF' ? (
        <div className="grid grid-cols-2 gap-4">
          {staff.support.map((person, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={person.photo || `/images/${person.name}.webp`}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.webp'
                  }}
                />
                <div>
                  <Badge variant="primary" size="sm" className="mb-1">
                    {person.role}
                  </Badge>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {person.name}
                  </h4>
                </div>
              </div>
              {person.career && person.career[0] && (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {person.career[0]}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <VolleyballCourt
          players={players.filter(p => p.position === selectedPosition)}
          onPlayerClick={onPlayerClick}
          selectedPlayerId={selectedPlayer?.id}
        />
      )}
    </div>
  )
}

