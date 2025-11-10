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
      <Card className="overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
        <div className="flex flex-col items-center">
          {/* 선수 사진 - 크게 */}
          <div className="w-full aspect-square bg-gradient-to-br from-wonderdogs-light to-gray-100 flex items-center justify-center overflow-hidden">
            {photo ? (
              <img 
                src={photo} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="text-6xl font-bold text-wonderdogs-primary/30">
                #{number}
              </div>
            )}
          </div>
          
          {/* 카드 정보 */}
          <div className="p-6 text-center w-full">
            {/* 등번호 */}
            <div className="text-3xl font-bold text-wonderdogs-primary mb-1">
              #{number}
            </div>
            
            {/* 선수 이름 */}
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              {name}
            </h3>
            
            {/* 포지션 */}
            <Badge variant={positionColors[position] || 'default'} className="mb-2">
              {position}
            </Badge>
            
            {/* 소속팀 (현재 소속) */}
            {team && (
              <p className="text-xs text-gray-500 mt-2 truncate">{team}</p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default PlayerCard
