import { useParams, useNavigate } from 'react-router-dom'
import { players } from '../data/players'
import { PlayerDetail, Button, Alert } from '../components/common'

function PlayerDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const player = players.find(p => p.id === parseInt(id))

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Alert type="error" title="선수를 찾을 수 없습니다">
            요청하신 선수 정보를 찾을 수 없습니다.
          </Alert>
          <div className="mt-4 text-center">
            <Button onClick={() => navigate('/players')}>
              선수단으로 돌아가기
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/players')}
          className="mb-4"
        >
          ← 선수단으로 돌아가기
        </Button>
      </div>
      <PlayerDetail player={player} />
    </div>
  )
}

export default PlayerDetailPage
