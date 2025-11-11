import { ThreadLayout, ThreadNavigation } from '../components/layout'
import { HomeCenterContent, HomeRightSidebar } from './thread'

function Home() {
  return (
    <ThreadLayout
      left={<ThreadNavigation />}
      center={<HomeCenterContent />}
      right={<HomeRightSidebar />}
    />
  )
}

export default Home
