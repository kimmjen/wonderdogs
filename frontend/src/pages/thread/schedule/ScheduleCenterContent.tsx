import { Badge } from '../../../components/common'
import { GameResult } from '../../../data/games'

interface ScheduleCenterContentProps {
  games: GameResult[]
  selectedGame: GameResult | null
  onGameClick: (game: GameResult) => void
}

export const ScheduleCenterContent = ({
  games,
  selectedGame,
  onGameClick
}: ScheduleCenterContentProps) => {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          경기 일정 & 결과
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          필승 원더독스의 모든 경기 정보를 확인하세요
        </p>
      </div>

      {/* 전적 요약 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">총 경기</div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            {games.filter(g => g.date !== '미정').length}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">승리</div>
          <div className="text-2xl font-black text-green-600 dark:text-green-400">
            {games.filter(g => g.result === '승').length}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">패배</div>
          <div className="text-2xl font-black text-red-600 dark:text-red-400">
            {games.filter(g => g.result === '패').length}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">승률</div>
          <div className="text-2xl font-black text-wonderdogs-primary dark:text-wonderdogs-accent">
            {(() => {
              const completed = games.filter(g => g.date !== '미정').length
              const wins = games.filter(g => g.result === '승').length
              return completed > 0 ? `${((wins / completed) * 100).toFixed(1)}%` : '0%'
            })()}
          </div>
        </div>
      </div>

      {/* 경기 목록 */}
      <div className="space-y-4">
        {games.map((game) => {
          const isSelected = selectedGame?.round === game.round
          const isUpcoming = game.date === '미정'

          return (
            <div
              key={game.round}
              onClick={() => onGameClick(game)}
              className={`
                relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 
                transition-all duration-300 cursor-pointer
                ${isSelected 
                  ? 'border-wonderdogs-primary dark:border-wonderdogs-accent ring-4 ring-wonderdogs-primary/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-wonderdogs-primary/50 hover:shadow-xl'
                }
              `}
            >
              {/* 라운드 번호 */}
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br from-wonderdogs-primary to-wonderdogs-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm">R{game.round}</span>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* 날짜 & 장소 */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {game.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {game.location}
                      </span>
                    </div>
                  </div>

                  {/* 상대팀 */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      vs {game.opponent}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="primary" size="sm">
                        {game.opponentType === '프로' ? '🏆 프로팀' :
                         game.opponentType === '여고' ? '🎓 여고' :
                         game.opponentType === '대학' ? '🎓 대학' :
                         game.opponentType === '실업' ? '💼 실업' :
                         '🌏 일본고교'}
                      </Badge>
                    </div>
                  </div>

                  {/* 요약 */}
                  {game.summary && !isUpcoming && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {game.summary}
                    </p>
                  )}
                </div>

                {/* 결과 */}
                <div className="ml-6 flex flex-col items-end">
                  {isUpcoming ? (
                    <Badge variant="default" size="lg" className="mb-2">
                      예정
                    </Badge>
                  ) : (
                    <>
                      <Badge
                        variant={game.result === '승' ? 'success' : 'danger'}
                        size="lg"
                        className="mb-2"
                      >
                        {game.result}
                      </Badge>
                      <div className="text-center">
                        <div className="text-2xl font-black text-gray-900 dark:text-white">
                          {game.score.wonderdogs} - {game.score.opponent}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          세트 스코어
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* 호버 인디케이터 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-wonderdogs-primary to-wonderdogs-secondary opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

