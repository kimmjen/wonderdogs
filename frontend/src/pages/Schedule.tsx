import { useState } from 'react'
import { ThreadLayout, ThreadNavigation } from '../components/layout'
import { games, GameResult } from '../data/games'
import { ScheduleCenterContent } from './thread/schedule/ScheduleCenterContent'
import { ScheduleRightSidebar } from './thread/schedule/ScheduleRightSidebar'

function Schedule() {
  const [selectedGame, setSelectedGame] = useState<GameResult | null>(null)

  return (
    <ThreadLayout
      left={<ThreadNavigation />}
      center={
        <ScheduleCenterContent
          games={games}
          selectedGame={selectedGame}
          onGameClick={setSelectedGame}
        />
      }
      right={<ScheduleRightSidebar selectedGame={selectedGame} />}
    />
  )
}

export default Schedule

