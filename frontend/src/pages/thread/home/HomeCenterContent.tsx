import { useState, useEffect } from 'react'

const posters = [
  '/images/poster/프로그램.webp',
  '/images/poster/포스터1.webp',
  '/images/poster/포스터2.webp',
  '/images/poster/포스터3.webp',
  '/images/poster/포스터4.webp',
  '/images/poster/포스터5.webp',
]

export const HomeCenterContent = () => {
  const [currentPoster, setCurrentPoster] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prev) => (prev + 1) % posters.length)
    }, 5000) // 5초마다 변경

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      {/* 프로그램 포스터 슬라이드 */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <div className="relative aspect-[3/4]">
          {posters.map((poster, index) => (
            <img
              key={poster}
              src={poster}
              alt={`신인감독 김연경 ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentPoster ? 'opacity-100' : 'opacity-0'
              }`}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ))}
        </div>

        {/* 포스터 인디케이터 */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {posters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPoster(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentPoster
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

