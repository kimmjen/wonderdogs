const Footer = () => {
  return (
    <footer className="bg-wonderdogs-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 팀 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">필승 원더독스</h3>
            <p className="text-gray-300">
              신인감독 김연경과 함께하는<br />
              배구 여정을 응원해주세요!
            </p>
          </div>
          
          {/* 빠른 링크 */}
          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-wonderdogs-accent transition-colors">홈</a></li>
              <li><a href="/players" className="hover:text-wonderdogs-accent transition-colors">선수단</a></li>
              <li><a href="/schedule" className="hover:text-wonderdogs-accent transition-colors">경기일정</a></li>
              <li><a href="/stats" className="hover:text-wonderdogs-accent transition-colors">통계</a></li>
              <li><a href="/components" className="hover:text-wonderdogs-accent transition-colors">🔧 Component Library</a></li>
            </ul>
          </div>
          
          {/* 소셜 미디어 */}
          <div>
            <h3 className="text-xl font-bold mb-4">팔로우</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-wonderdogs-accent transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-wonderdogs-accent transition-colors">📷</a>
              <a href="#" className="text-2xl hover:text-wonderdogs-accent transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-wonderdogs-accent transition-colors">📺</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 필승 원더독스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
