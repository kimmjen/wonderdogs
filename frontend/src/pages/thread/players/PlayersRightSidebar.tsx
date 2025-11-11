import { Player } from '../../../types'
import { Badge } from '../../../components/common'
import { games } from '../../../data/games'

interface PlayersRightSidebarProps {
  selectedPlayer: Player | null
}

export const PlayersRightSidebar = ({ selectedPlayer }: PlayersRightSidebarProps) => {
  if (!selectedPlayer) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            선수를 선택해주세요
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            코트에서 선수를 클릭하면<br/>
            상세 정보를 확인할 수 있습니다
          </p>
        </div>
      </div>
    )
  }

  const { name, number, position, photo, birth, height, weight, stats, career } = selectedPlayer

  // 포지션 한글 변환
  const positionNames: Record<string, string> = {
    'OH': '아웃사이드 히터',
    'OP': '아포짓 스파이커',
    'S': '세터',
    'MB': '미들 블로커',
    'L': '리베로'
  }

  // SNS 링크 (실제로는 player 데이터에서 가져와야 함)
  const snsLinks = {
    instagram: `https://instagram.com/${name}`,
    youtube: `https://youtube.com/@${name}`
  }

  return (
    <div className="space-y-6">
      {/* 선수 프로필 카드 */}
      <div className="bg-gradient-to-br from-wonderdogs-primary to-wonderdogs-secondary rounded-2xl p-6 text-white shadow-xl">
        <div className="flex flex-col items-center">
          {/* 선수 사진 */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            {photo ? (
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-white/20 flex items-center justify-center">
                      <span class="text-4xl font-black text-black dark:text-white/50">${number}</span>
                    </div>
                  `
                }}
              />
            ) : (
              <div className="w-full h-full bg-white/20 flex items-center justify-center">
                <span className="text-4xl font-black text-black dark:text-white/50">{number}</span>
              </div>
            )}
          </div>

          {/* 이름 & 포지션 */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="text-2xl font-black text-black dark:text-white">{name}</h2>
              <Badge variant="accent" className="text-sm">
                #{number}
              </Badge>
            </div>
            <p className="text-black dark:text-white/90 font-semibold">
              {positionNames[position] || position}
            </p>
          </div>

          {/* 기본 정보 */}
          <div className="grid grid-cols-3 gap-3 w-full mb-4">
            <div className="text-center bg-white/10 rounded-lg p-2 text-black dark:text-white">
              <div className="text-xs opacity-80">생년월일</div>
              <div className="font-bold text-sm">{birth || '-'}</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-2 text-black dark:text-white">
              <div className="text-xs opacity-80">신장</div>
              <div className="font-bold text-sm">{height || '-'}</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-2 text-black dark:text-white">
              <div className="text-xs opacity-80">체중</div>
              <div className="font-bold text-sm">{weight || '-'}</div>
            </div>
          </div>

          {/* SNS 링크 */}
          <div className="flex gap-3">
            <a
              href={snsLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={snsLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 원더독스 기록 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-wonderdogs-primary rounded-full"></span>
          원더독스 기록
        </h3>

        <div className="space-y-4">
          {/* 공격 기록 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">공격 성공률</span>
              <span className="text-lg font-black text-wonderdogs-primary">
                {stats?.attack?.rate || '0%'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-xs text-gray-500 dark:text-gray-400">시도</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  {stats?.attack?.attempts || 0}
                </div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-xs text-gray-500 dark:text-gray-400">성공</div>
                <div className="text-sm font-bold text-green-600 dark:text-green-400">
                  {stats?.attack?.success || 0}
                </div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-xs text-gray-500 dark:text-gray-400">블로킹</div>
                <div className="text-sm font-bold text-red-600 dark:text-red-400">
                  {stats?.attack?.blocked || 0}
                </div>
              </div>
            </div>
          </div>

          {/* 수비 기록 */}
          <div>
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">수비 기록</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-xs text-gray-600 dark:text-gray-400">디그</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {stats?.defense?.digs || 0}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-xs text-gray-600 dark:text-gray-400">블로킹</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {stats?.defense?.blocks || 0}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-xs text-gray-600 dark:text-gray-400">리시브</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {stats?.defense?.receives || 0}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-xs text-gray-600 dark:text-gray-400">서브</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {stats?.defense?.serves || 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 원더독스 팀 경기 기록 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          팀 최근 경기
        </h3>

        {games.filter(g => g.date !== '미정').length > 0 ? (
          <div className="space-y-3">
            {games
              .filter(g => g.date !== '미정')
              .slice(-5)
              .reverse()
              .map((game, idx) => (
              <div
                key={idx}
                className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {game.date} · {game.location}
                    </div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">
                      vs {game.opponent}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {game.opponentType === '프로' ? '🏆 프로팀' :
                       game.opponentType === '여고' ? '🎓 여고' :
                       game.opponentType === '대학' ? '🎓 대학' :
                       game.opponentType === '실업' ? '💼 실업' :
                       '🌏 일본고교'}
                    </div>
                  </div>
                  <Badge variant={game.result === '승' ? 'success' : 'danger'} size="sm">
                    {game.result}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 dark:text-gray-400">
                    세트 스코어
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {game.score.wonderdogs} - {game.score.opponent}
                  </span>
                </div>
                {game.summary && (
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 italic border-l-2 border-blue-500 pl-2">
                    {game.summary}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 dark:text-gray-500 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              경기 기록이 없습니다
            </p>
          </div>
        )}
      </div>

      {/* 경력 사항 */}
      {career && career.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-500 rounded-full"></span>
            경력 사항
          </h3>
          <ul className="space-y-2">
            {career.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-wonderdogs-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

