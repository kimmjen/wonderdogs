import { Badge, Avatar, Card, Tabs } from '../common'

const PlayerDetail = ({ player }) => {
  const { 
    name, 
    number, 
    position, 
    photo, 
    birth, 
    height, 
    weight, 
    career,
    team,
    stats 
  } = player

  // 포지션 한글 변환
  const positionNames = {
    'OH': '아웃사이드 히터',
    'OP': '아포짓 스파이커',
    'S': '세터',
    'MB': '미들 블로커',
    'L': '리베로'
  }

  // 통계 데이터
  const attackStats = stats?.attack || {}
  const defenseStats = stats?.defense || {}

  // 탭 컨텐츠
  const tabs = [
    {
      label: '프로필',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">생년월일</p>
              <p className="font-semibold">{birth || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">신체</p>
              <p className="font-semibold">{height && weight ? `${height}, ${weight}` : '-'}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500">현 소속</p>
              <p className="font-semibold">{team || '-'}</p>
            </div>
          </div>
          {career && career.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-2">경력</p>
              <ul className="space-y-1">
                {career.map((item, idx) => (
                  <li key={idx} className="text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    },
    {
      label: '시즌 통계',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 공격 통계 */}
          <Card variant="primary" className="p-4">
            <h4 className="font-bold text-lg mb-4 text-wonderdogs-primary">공격 스탯</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">총 공격 시도</span>
                <span className="font-bold">{attackStats.attempts || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">성공</span>
                <span className="font-bold text-green-600">{attackStats.success || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">블록 당함</span>
                <span className="font-bold text-red-600">{attackStats.blocked || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">성공률</span>
                <span className="font-bold text-wonderdogs-primary">
                  {attackStats.rate || '0%'}
                </span>
              </div>
            </div>
          </Card>

          {/* 수비 통계 */}
          <Card variant="primary" className="p-4">
            <h4 className="font-bold text-lg mb-4 text-wonderdogs-primary">수비 스탯</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">디그</span>
                <span className="font-bold">{defenseStats.digs || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">블록</span>
                <span className="font-bold">{defenseStats.blocks || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">리시브</span>
                <span className="font-bold">{defenseStats.receives || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">서브</span>
                <span className="font-bold">{defenseStats.serves || 0}</span>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      label: '경기 기록',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-wonderdogs-light">
              <tr>
                <th className="px-4 py-3 text-left">날짜</th>
                <th className="px-4 py-3 text-left">상대팀</th>
                <th className="px-4 py-3 text-center">결과</th>
                <th className="px-4 py-3 text-center">득점</th>
                <th className="px-4 py-3 text-center">어택</th>
                <th className="px-4 py-3 text-center">블록</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {stats?.games && stats.games.length > 0 ? (
                stats.games.map((game, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{game.date}</td>
                    <td className="px-4 py-3">{game.opponent}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge variant={game.result === 'W' ? 'success' : 'danger'} size="sm">
                        {game.result === 'W' ? '승' : '패'}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center font-semibold">{game.points}</td>
                    <td className="px-4 py-3 text-center">{game.attacks}</td>
                    <td className="px-4 py-3 text-center">{game.blocks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                    경기 기록이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 상단: 선수 프로필 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* 왼쪽: 사진 + 기본 정보 */}
        <Card className="p-8 text-center lg:col-span-1">
          <Avatar 
            src={photo}
            alt={name}
            size="2xl"
            fallback={`#${number}`}
            className="mx-auto mb-6 ring-4 ring-wonderdogs-primary"
          />
          <div className="text-5xl font-bold text-wonderdogs-primary mb-2">
            #{number}
          </div>
          <h1 className="text-3xl font-bold mb-3">{name}</h1>
          <Badge variant="primary" size="lg" className="mb-4">
            {positionNames[position] || position}
          </Badge>
        </Card>

        {/* 오른쪽: 주요 통계 */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <Card variant="primary" className="p-6 text-center">
            <div className="text-4xl font-bold text-wonderdogs-primary mb-2">
              {attackStats.rate || '0%'}
            </div>
            <p className="text-gray-600 font-semibold">공격 성공률</p>
          </Card>
          <Card variant="primary" className="p-6 text-center">
            <div className="text-4xl font-bold text-wonderdogs-primary mb-2">
              {attackStats.success || 0}
            </div>
            <p className="text-gray-600 font-semibold">총 득점</p>
          </Card>
          <Card variant="primary" className="p-6 text-center">
            <div className="text-4xl font-bold text-wonderdogs-primary mb-2">
              {defenseStats.blocks || 0}
            </div>
            <p className="text-gray-600 font-semibold">블록</p>
          </Card>
          <Card variant="primary" className="p-6 text-center">
            <div className="text-4xl font-bold text-wonderdogs-primary mb-2">
              {defenseStats.digs || 0}
            </div>
            <p className="text-gray-600 font-semibold">디그</p>
          </Card>
        </div>
      </div>

      {/* 하단: 탭 (상세 정보, 통계, 경기 기록) */}
      <Card className="p-6">
        <Tabs tabs={tabs} />
      </Card>
    </div>
  )
}

export default PlayerDetail
