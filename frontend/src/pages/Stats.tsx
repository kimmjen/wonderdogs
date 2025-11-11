import { ThreadLayout, ThreadNavigation } from '../components/layout'
import { Card } from '../components/common'
import { players } from '../data/players'

function Stats() {
  // 팀 통계
  const teamStats = {
    totalGames: 12,
    wins: 8,
    losses: 4,
    winRate: '66.7%',
    totalPoints: 342,
    avgPointsPerGame: 28.5
  }

  // 포지션별 선수 수
  const positionCounts = {
    OH: players.filter(p => p.position === 'OH').length,
    OP: players.filter(p => p.position === 'OP').length,
    S: players.filter(p => p.position === 'S').length,
    MB: players.filter(p => p.position === 'MB').length,
    L: players.filter(p => p.position === 'L').length,
  }

  return (
    <ThreadLayout
      left={<ThreadNavigation />}
      center={
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              팀 통계
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              필승 원더독스의 시즌 통계를 확인하세요
            </p>
          </div>

          {/* 팀 성적 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              시즌 성적
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-wonderdogs-primary dark:text-wonderdogs-secondary mb-2">
                  {teamStats.totalGames}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">총 경기</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {teamStats.wins}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">승리</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  {teamStats.losses}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">패배</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-wonderdogs-primary dark:text-wonderdogs-secondary mb-2">
                  {teamStats.winRate}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">승률</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {teamStats.totalPoints}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">총 득점</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {teamStats.avgPointsPerGame}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">경기당 평균</div>
              </Card>
            </div>
          </div>

          {/* 포지션별 선수 분포 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              포지션별 선수 분포
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-lg font-bold text-orange-500 mb-1">
                  아웃사이드 히터
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {positionCounts.OH}명
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-lg font-bold text-purple-500 mb-1">
                  아포짓 스파이커
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {positionCounts.OP}명
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-lg font-bold text-blue-500 mb-1">
                  세터
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {positionCounts.S}명
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-lg font-bold text-green-500 mb-1">
                  미들 블로커
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {positionCounts.MB}명
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-lg font-bold text-yellow-500 mb-1">
                  리베로
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {positionCounts.L}명
                </div>
              </Card>
            </div>
          </div>
        </div>
      }
      right={
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              통계 요약
            </h3>
            <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <div className="font-semibold mb-2">주요 성과</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>연승 기록: 3경기</li>
                  <li>최다 득점 경기: 35점</li>
                  <li>홈 경기 승률: 75%</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">팀 구성</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>총 선수: {players.length}명</li>
                  <li>평균 신장: 178cm</li>
                  <li>평균 나이: 26세</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">시즌 목표</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>승률 70% 이상</li>
                  <li>플레이오프 진출</li>
                  <li>제8구단 창단</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default Stats

