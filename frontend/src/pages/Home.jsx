import { Button, Card } from '../components/common'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-wonderdogs-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            필승 원더독스
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            신인감독 김연경과 함께하는 배구의 새로운 여정
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="accent" size="lg">
              최신 경기 보기
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-wonderdogs-primary">
              선수단 소개
            </Button>
          </div>
        </div>
      </section>

      {/* 최근 경기 결과 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            최근 경기 결과
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">2024.11.05</div>
                <div className="text-2xl font-bold text-wonderdogs-primary mb-4">승리</div>
                <div className="text-xl font-semibold text-gray-800">원더독스 3 - 1 상대팀</div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">2024.11.03</div>
                <div className="text-2xl font-bold text-wonderdogs-primary mb-4">승리</div>
                <div className="text-xl font-semibold text-gray-800">원더독스 3 - 2 상대팀</div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">2024.11.01</div>
                <div className="text-2xl font-bold text-red-500 mb-4">패배</div>
                <div className="text-xl font-semibold text-gray-800">원더독스 1 - 3 상대팀</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 팀 통계 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            시즌 통계
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card variant="primary" className="p-6 text-center">
              <div className="text-4xl font-bold text-wonderdogs-primary mb-2">12</div>
              <div className="text-gray-600 font-semibold">총 경기</div>
            </Card>
            <Card variant="primary" className="p-6 text-center">
              <div className="text-4xl font-bold text-wonderdogs-primary mb-2">8</div>
              <div className="text-gray-600 font-semibold">승리</div>
            </Card>
            <Card variant="primary" className="p-6 text-center">
              <div className="text-4xl font-bold text-wonderdogs-primary mb-2">4</div>
              <div className="text-gray-600 font-semibold">패배</div>
            </Card>
            <Card variant="primary" className="p-6 text-center">
              <div className="text-4xl font-bold text-wonderdogs-primary mb-2">67%</div>
              <div className="text-gray-600 font-semibold">승률</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wonderdogs-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            원더독스의 여정을 함께하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            최신 소식과 독점 콘텐츠를 받아보세요
          </p>
          <Button variant="accent" size="lg">
            팬클럽 가입하기
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
