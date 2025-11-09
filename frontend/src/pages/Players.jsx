import { playersByPosition, staff } from '../data/players'
import { PlayerCard, Card, Badge } from '../components/common'

function Players() {
  const positions = [
    { key: 'OH', name: '아웃사이드 히터', icon: '⚡' },
    { key: 'OP', name: '아포짓 스파이커', icon: '🔥' },
    { key: 'S', name: '세터', icon: '🎯' },
    { key: 'MB', name: '미들 블로커', icon: '🛡️' },
    { key: 'L', name: '리베로', icon: '🏐' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-wonderdogs-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            필승 원더독스 선수단
          </h1>
          <p className="text-xl text-white/90">
            2025-26 시즌 로스터
          </p>
        </div>
      </section>

      {/* 코칭스태프 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-wonderdogs-dark">
            👔 코칭스태프
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.coaches.map((coach, idx) => (
              <Card key={idx} className="p-6">
                <Badge variant="accent" className="mb-3">{coach.role}</Badge>
                <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                {coach.birth && (
                  <p className="text-sm text-gray-600 mb-2">
                    {coach.birth} {coach.height && `| ${coach.height}`}
                  </p>
                )}
                {coach.career && (
                  <ul className="text-sm text-gray-600 space-y-1">
                    {coach.career.slice(0, 2).map((item, i) => (
                      <li key={i} className="truncate">• {item}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 선수단 - 포지션별 */}
      {positions.map((pos) => (
        <section key={pos.key} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-wonderdogs-dark">
              {pos.icon} {pos.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {playersByPosition[pos.key].map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 지원 스태프 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-wonderdogs-dark">
            🤝 지원 스태프
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {staff.support.map((person, idx) => (
              <Card key={idx} className="p-4">
                <Badge variant="primary" size="sm" className="mb-2">
                  {person.role}
                </Badge>
                <h4 className="font-bold">{person.name}</h4>
                {person.career && (
                  <p className="text-xs text-gray-600 mt-1 truncate">
                    {person.career[0]}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Players
