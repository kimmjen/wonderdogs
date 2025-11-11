import { Badge } from '../../../components/common'
import { programData, ratings } from '../../../data/program'

export const HomeRightSidebar = () => {
  return (
    <div className="space-y-6">
      {/* 방송 정보 */}
      <div className="bg-wonderdogs-primary dark:bg-wonderdogs-secondary rounded-xl p-6 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-4">방송 정보</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📺</span>
            </div>
            <div>
              <div className="text-sm opacity-90">방송사</div>
              <div className="font-bold">MBC</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
            <div>
              <div className="text-sm opacity-90">방영</div>
              <div className="font-bold">매주 토요일</div>
            </div>
          </div>
        </div>
      </div>

      {/* 팀 목표 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">최종 목표</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Team Objective</p>
        </div>
        <p className="text-base text-gray-800 dark:text-gray-200 font-semibold leading-relaxed">
          {programData.objective}
        </p>
      </div>

      {/* 프로그램 소개 */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          프로그램 소개
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed mb-4">
          {programData.description}
        </p>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Badge variant="accent" className="mb-3">기획 의도</Badge>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            레전드 배구선수 김연경이 감독으로 써 내려가는 새로운 역사의 첫 페이지.
            신인감독이자 신(神)인 감독의 도전이 시작됩니다.
          </p>
        </div>
      </div>

      {/* 팀 컨셉 */}
      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          팀 컨셉
        </h3>
        <div className="space-y-3">
          {programData.concept.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="w-6 h-6 rounded-full bg-wonderdogs-primary dark:bg-wonderdogs-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-white">{index + 1}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 시청률 */}
      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          시청률 추이
        </h3>
        <div className="space-y-3">
          {ratings.map((rating) => (
            <div
              key={rating.episode}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900 dark:text-white">
                  {rating.episode}회
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {rating.date}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">전국</div>
                  <div className="text-lg font-bold text-wonderdogs-primary dark:text-wonderdogs-secondary">
                    {rating.nationwide}%
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">수도권</div>
                  <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                    {rating.seoul}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

