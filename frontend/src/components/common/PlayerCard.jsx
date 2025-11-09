import { Link } from 'react-router-dom'
import { Card, Badge, Avatar } from '../common'

const PlayerCard = ({ player }) => {
  const { id, name, number, position, photo, team } = player

  // 포지션별 색상
  const positionColors = {
    'OH': 'primary',
    'OP': 'secondary',
    'S': 'accent',
    'MB': 'success',
    'L': 'warning'
  }

  return (
    <Link to={`/players/${id}`}>
      <Card className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="flex flex-col items-center text-center">
          {/* 선수 사진 */}
          <Avatar 
            src={photo} 
            alt={name}
            size="xl"
            fallback={`#${number}`}
            className="mb-4 ring-4 ring-wonderdogs-light"
          />
          
          {/* 등번호 */}
          <div className="text-4xl font-bold text-wonderdogs-primary mb-2">
            #{number}
          </div>
          
          {/* 선수 이름 */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {name}
          </h3>
          
          {/* 포지션 */}
          <Badge variant={positionColors[position] || 'default'}>
            {position}
          </Badge>
          
          {/* 소속팀 (현재 소속) */}
          {team && (
            <p className="text-sm text-gray-500 mt-2">{team}</p>
          )}
        </div>
      </Card>
    </Link>
  )
}

export default PlayerCard
