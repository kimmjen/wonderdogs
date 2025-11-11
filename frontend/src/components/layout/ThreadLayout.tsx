import { ReactNode } from 'react'

interface ThreadLayoutProps {
  left?: ReactNode
  center: ReactNode
  right?: ReactNode
}

/**
 * 쓰레드 방식의 3단 레이아웃
 * - left: 헤더/네비게이션 영역 (w-64)
 * - center: 메인 컨텐츠 영역 (flex-1)
 * - right: 상세 정보/설명 영역 (w-80)
 */
const ThreadLayout = ({
  left,
  center,
  right
}: ThreadLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Left Sidebar - 헤더/네비게이션 */}
      {left && (
        <aside className="w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto sticky top-0 h-screen flex-shrink-0">
          <div className="p-6">
            {left}
          </div>
        </aside>
      )}

      {/* Center Content - 메인 컨텐츠 */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          {center}
        </div>
      </main>

      {/* Right Sidebar - 상세 정보 */}
      {right && (
        <aside className="w-140 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto sticky top-0 h-screen flex-shrink-0">
          <div className="p-6">
            {right}
          </div>
        </aside>
      )}
    </div>
  )
}

export default ThreadLayout

