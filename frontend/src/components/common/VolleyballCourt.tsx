import { Player } from '../../types'

interface VolleyballCourtProps {
  players: Player[]
  onPlayerClick?: (player: Player) => void
  selectedPlayerId?: number
}

/**
 * 배구 코트 컴포넌트 (한쪽 코트만 사용)
 * 포지션별로 모든 선수 표시
 */
const VolleyballCourt = ({ players, onPlayerClick, selectedPlayerId }: VolleyballCourtProps) => {
  // 포지션별로 선수 그룹화
  const playersByPosition = players.reduce((acc, player) => {
    if (!acc[player.position]) {
      acc[player.position] = []
    }
    acc[player.position].push(player)
    return acc
  }, {} as Record<string, Player[]>)

  // 포지션별 기본 위치 (한쪽 코트만 사용)
  const positionLayout: Record<string, { x: number; y: number; label: string; color: string }> = {
    'OH': { x: 20, y: 30, label: '아웃사이드 히터', color: 'from-orange-500 to-red-500' },
    'OP': { x: 80, y: 30, label: '아포짓 스파이커', color: 'from-purple-500 to-pink-500' },
    'S': { x: 50, y: 50, label: '세터', color: 'from-blue-500 to-cyan-500' },
    'MB': { x: 50, y: 30, label: '미들 블로커', color: 'from-green-500 to-emerald-500' },
    'L': { x: 50, y: 70, label: '리베로', color: 'from-yellow-500 to-amber-500' }
  }

  // 같은 포지션의 여러 선수를 가로로 배치
  const getPlayerPositions = (position: string, players: Player[]) => {
    const basePos = positionLayout[position]
    if (!basePos) return []

    if (players.length === 1) {
      return [{ ...basePos, player: players[0] }]
    }

    // 여러 명일 때 가로로 분산
    const spacing = Math.min(15, 30 / players.length)
    const startX = basePos.x - (spacing * (players.length - 1)) / 2

    return players.map((player, idx) => ({
      ...basePos,
      x: startX + (spacing * idx),
      player
    }))
  }

  // 모든 선수 위치 계산
  const allPlayerPositions = Object.entries(playersByPosition).flatMap(([position, players]) =>
    getPlayerPositions(position, players)
  )

  return (
    <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-4 border-orange-400 dark:border-orange-600 shadow-2xl overflow-hidden">
      {/* 코트 바닥 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_100%)]"></div>

      {/* 코트 라인 */}
      <div className="absolute inset-8 border-2 border-white/50 dark:border-white/30 rounded-lg">
        {/* 3m 라인 (어택 라인) */}
        <div className="absolute left-0 right-0 top-[40%] h-0.5 bg-white/50 dark:bg-white/30"></div>
        {/* 센터 라인 */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/30 dark:bg-white/20"></div>
      </div>

      {/* 네트 (상단) */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-white dark:bg-gray-300 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent"></div>
      </div>

      {/* 선수 카드들 */}
      {allPlayerPositions.map((pos, idx) => {
        const isSelected = pos.player.id === selectedPlayerId

        return (
          <div
            key={`${pos.player.id}-${idx}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 hover:z-30"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            onClick={() => onPlayerClick?.(pos.player)}
          >
            <div className={`
              relative w-24 h-32 rounded-xl overflow-hidden shadow-xl
              ${isSelected ? 'ring-4 ring-wonderdogs-accent scale-110 z-40' : ''}
              transition-all duration-300 hover:shadow-2xl
            `}>
              {/* 포지션 배경 그라디언트 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pos.color} opacity-90`}></div>

              {/* 선수 사진 */}
              {pos.player.photo ? (
                <img
                  src={pos.player.photo}
                  alt={pos.player.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black text-white/30">
                    {pos.player.number}
                  </span>
                </div>
              )}

              {/* 그라디언트 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

              {/* 상단 정보 */}
              <div className="absolute top-0 left-0 right-0 p-1.5 flex justify-between items-start">
                <span className="text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded-full">
                  #{pos.player.number}
                </span>
                <span className="text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded-full">
                  {pos.player.position}
                </span>
              </div>

              {/* 하단 정보 */}
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <div className="text-sm font-bold text-white text-center drop-shadow-lg">
                  {pos.player.name}
                </div>
                <div className="text-xs text-white/90 text-center">
                  {pos.player.height} | {pos.player.position === 'S' ? '세터' :
                    pos.player.position === 'OH' ? 'OH' :
                    pos.player.position === 'OP' ? 'OP' :
                    pos.player.position === 'MB' ? 'MB' : '리베로'}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* 코트 레이블 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          필승 원더독스 ({players.length}명)
        </span>
      </div>

      {/* 포지션 범례 (좌측 상단) */}
      <div className="absolute top-4 left-4 space-y-1">
        {Object.entries(positionLayout).map(([pos, data]) => {
          const count = playersByPosition[pos]?.length || 0
          if (count === 0) return null

          return (
            <div key={pos} className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${data.color}`}></div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {pos} ({count})
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VolleyballCourt

