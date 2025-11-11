import { GameResult } from '../../../data/games'
import { Badge } from '../../../components/common'

interface ScheduleRightSidebarProps {
  selectedGame: GameResult | null
}

export const ScheduleRightSidebar = ({ selectedGame }: ScheduleRightSidebarProps) => {
  if (!selectedGame) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            경기를 선택해주세요
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            왼쪽에서 경기를 클릭하면<br/>
            상세 정보를 확인할 수 있습니다
          </p>
        </div>
      </div>
    )
  }

  const isUpcoming = selectedGame.date === '미정'

  return (
    <div className="space-y-6">
      {/* 경기 헤더 */}
      <div className="bg-gradient-to-br from-wonderdogs-primary to-wonderdogs-secondary rounded-2xl p-6 text-white shadow-xl">
        <div className="text-center">
          <div className="text-sm opacity-90 mb-2">ROUND {selectedGame.round}</div>
          <h2 className="text-2xl font-black mb-4">
            필승 원더독스<br/>
            vs<br/>
            {selectedGame.opponent}
          </h2>
          {!isUpcoming && (
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-4xl font-black">{selectedGame.score.wonderdogs}</div>
                <div className="text-xs opacity-75">원더독스</div>
              </div>
              <div className="text-2xl font-bold">-</div>
              <div className="text-center">
                <div className="text-4xl font-black">{selectedGame.score.opponent}</div>
                <div className="text-xs opacity-75">상대팀</div>
              </div>
            </div>
          )}
          <Badge
            variant={isUpcoming ? 'default' : selectedGame.result === '승' ? 'success' : 'danger'}
            className="text-base px-6 py-2"
          >
            {isUpcoming ? '예정' : selectedGame.result}
          </Badge>
        </div>
      </div>

      {/* 경기 정보 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          경기 정보
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">날짜</span>
            <span className="font-semibold text-gray-900 dark:text-white">{selectedGame.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">장소</span>
            <span className="font-semibold text-gray-900 dark:text-white">{selectedGame.location}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">상대 유형</span>
            <Badge variant="primary" size="sm">
              {selectedGame.opponentType === '프로' ? '🏆 프로팀' :
               selectedGame.opponentType === '여고' ? '🎓 여고' :
               selectedGame.opponentType === '대학' ? '🎓 대학' :
               selectedGame.opponentType === '실업' ? '💼 실업' :
               '🌏 일본고교'}
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">방송</span>
            <span className="font-semibold text-gray-900 dark:text-white">{selectedGame.broadcaster}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">캐스터</span>
            <span className="font-semibold text-gray-900 dark:text-white">{selectedGame.caster}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">해설</span>
            <span className="font-semibold text-gray-900 dark:text-white">{selectedGame.commentator}</span>
          </div>
        </div>
      </div>

      {/* 세트별 스코어 */}
      {!isUpcoming && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-500 rounded-full"></span>
            세트별 스코어
          </h3>

          <div className="space-y-3">
            {Object.entries(selectedGame.sets).map(([setNum, scores]) => {
              const setNumber = parseInt(setNum.replace('set', ''))
              const isWon = scores.wonderdogs > scores.opponent

              return (
                <div
                  key={setNum}
                  className={`p-3 rounded-lg ${
                    isWon 
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                      : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {setNumber}세트
                    </span>
                    <div className="flex items-center gap-4">
                      <span className={`text-lg font-bold ${
                        isWon ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {scores.wonderdogs}
                      </span>
                      <span className="text-gray-500">-</span>
                      <span className={`text-lg font-bold ${
                        !isWon ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {scores.opponent}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* 라인업 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-purple-500 rounded-full"></span>
          라인업
        </h3>

        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">감독</div>
            <div className="font-bold text-gray-900 dark:text-white">{selectedGame.lineup.coach}</div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {selectedGame.lineup.players.map((player, idx) => (
              <div key={idx} className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {player}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 경기 요약 */}
      {selectedGame.summary && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-yellow-500 rounded-full"></span>
            경기 요약
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {selectedGame.summary}
          </p>
        </div>
      )}

      {/* 특이사항 */}
      {selectedGame.notes && selectedGame.notes.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-red-500 rounded-full"></span>
            특이사항
          </h3>
          <ul className="space-y-2">
            {selectedGame.notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-wonderdogs-primary mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

