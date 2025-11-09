import { useState, useEffect, useRef } from 'react'
import { 
  Button, 
  Card, 
  Input, 
  Badge, 
  Modal, 
  Tabs, 
  Avatar, 
  Loading, 
  Alert,
  PlayerCard
} from '../components/common'

function ComponentLibrary() {
  const [modalOpen, setModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Component Library
          </h1>
          <p className="text-xl text-gray-600">
            필승 원더독스 UI 컴포넌트 쇼케이스
          </p>
        </div>

        {/* 색상 팔레트 */}
        <section 
          id="colors" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('colors') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Color Palette</h2>
          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div>
                <div className="bg-wonderdogs-primary h-24 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold">Primary</p>
                <p className="text-xs text-gray-500">#0047AB</p>
              </div>
              <div>
                <div className="bg-wonderdogs-secondary h-24 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold">Secondary</p>
                <p className="text-xs text-gray-500">#00A3E0</p>
              </div>
              <div>
                <div className="bg-wonderdogs-accent h-24 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold">Accent</p>
                <p className="text-xs text-gray-500">#FFD700</p>
              </div>
              <div>
                <div className="bg-wonderdogs-dark h-24 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold">Dark</p>
                <p className="text-xs text-gray-500">#001F3F</p>
              </div>
              <div>
                <div className="bg-wonderdogs-light h-24 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold">Light</p>
                <p className="text-xs text-gray-500">#E6F2FF</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-wonderdogs-gradient h-24 rounded-lg mb-2"></div>
              <p className="text-sm font-semibold">Gradient</p>
              <p className="text-xs text-gray-500">Primary → Secondary</p>
            </div>
          </Card>
        </section>

        {/* Buttons */}
        <section 
          id="buttons" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('buttons') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Buttons</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Code Example</h3>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`<Button variant="primary" size="md">
  Click Me
</Button>`}</code>
                </pre>
              </div>
            </div>
          </Card>
        </section>

        {/* Cards */}
        <section 
          id="cards" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default" className="p-6">
              <h3 className="font-bold mb-2 text-gray-900">Default</h3>
              <p className="text-sm text-gray-600">기본 카드 스타일</p>
            </Card>
            <Card variant="primary" className="p-6">
              <h3 className="font-bold mb-2 text-gray-900">Primary</h3>
              <p className="text-sm text-gray-600">프라이머리 카드</p>
            </Card>
            <Card variant="gradient" className="p-6">
              <h3 className="font-bold mb-2 text-white">Gradient</h3>
              <p className="text-sm text-white/90">그라디언트 카드</p>
            </Card>
            <Card variant="dark" className="p-6">
              <h3 className="font-bold mb-2 text-white">Dark</h3>
              <p className="text-sm text-white/90">다크 카드</p>
            </Card>
          </div>
          <Card className="p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Code Example</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`<Card variant="primary" className="p-6">
  <h3>Title</h3>
  <p>Content</p>
</Card>`}</code>
            </pre>
          </Card>
        </section>

        {/* Badges */}
        <section 
          id="badges" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('badges') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Badges</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Input */}
        <section 
          id="input" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('input') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Input</h2>
          <Card className="p-8">
            <div className="space-y-6 max-w-md">
              <Input 
                label="기본 입력"
                placeholder="텍스트를 입력하세요"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input 
                label="이메일"
                type="email"
                placeholder="email@example.com"
              />
              <Input 
                label="에러 상태"
                error="이 필드는 필수입니다"
                placeholder="필수 입력"
              />
              <Input 
                label="비활성화"
                disabled
                placeholder="비활성화된 입력"
              />
            </div>
          </Card>
        </section>

        {/* Avatar */}
        <section 
          id="avatar" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('avatar') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Avatar</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sizes</h3>
                <div className="flex flex-wrap items-end gap-4">
                  <Avatar size="sm" fallback="S" />
                  <Avatar size="md" fallback="M" />
                  <Avatar size="lg" fallback="L" />
                  <Avatar size="xl" fallback="XL" />
                  <Avatar size="2xl" fallback="2XL" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">With Image</h3>
                <Avatar size="lg" src="https://via.placeholder.com/150" alt="User" />
              </div>
            </div>
          </Card>
        </section>

        {/* Modal */}
        <section 
          id="modal" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('modal') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Modal</h2>
          <Card className="p-8">
            <Button onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Modal Title"
              footer={
                <>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>
                    취소
                  </Button>
                  <Button onClick={() => setModalOpen(false)}>
                    확인
                  </Button>
                </>
              }
            >
              <p>모달 컨텐츠가 여기에 들어갑니다.</p>
              <p className="mt-4">다양한 크기와 스타일을 지원합니다.</p>
            </Modal>
          </Card>
        </section>

        {/* Tabs */}
        <section 
          id="tabs" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tabs</h2>
          <Card className="p-8">
            <Tabs
              tabs={[
                {
                  label: 'Tab 1',
                  content: <div className="p-4 bg-gray-50 rounded-lg">첫 번째 탭의 컨텐츠</div>
                },
                {
                  label: 'Tab 2',
                  content: <div className="p-4 bg-gray-50 rounded-lg">두 번째 탭의 컨텐츠</div>
                },
                {
                  label: 'Tab 3',
                  content: <div className="p-4 bg-gray-50 rounded-lg">세 번째 탭의 컨텐츠</div>
                }
              ]}
            />
          </Card>
        </section>

        {/* Alert */}
        <section 
          id="alert" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('alert') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Alert</h2>
          <div className="space-y-4">
            <Alert type="info" title="Information">
              정보성 알림 메시지입니다.
            </Alert>
            <Alert type="success" title="Success">
              성공적으로 처리되었습니다.
            </Alert>
            <Alert type="warning" title="Warning">
              주의가 필요한 사항입니다.
            </Alert>
            <Alert type="error" title="Error">
              오류가 발생했습니다.
            </Alert>
          </div>
        </section>

        {/* Loading */}
        <section 
          id="loading" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('loading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Loading</h2>
          <Card className="p-8">
            <div className="flex items-end gap-8">
              <div>
                <p className="text-sm mb-2">Small</p>
                <Loading size="sm" />
              </div>
              <div>
                <p className="text-sm mb-2">Medium</p>
                <Loading size="md" />
              </div>
              <div>
                <p className="text-sm mb-2">Large</p>
                <Loading size="lg" />
              </div>
            </div>
          </Card>
        </section>

        {/* PlayerCard */}
        <section 
          id="playercard" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('playercard') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Player Card</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlayerCard 
              player={{
                id: 1,
                name: '표승주',
                number: 19,
                position: 'OH',
                team: '필승 원더독스'
              }}
            />
            <PlayerCard 
              player={{
                id: 2,
                name: '윤영인',
                number: 9,
                position: 'OP',
                team: '現 수원시청'
              }}
            />
            <PlayerCard 
              player={{
                id: 3,
                name: '이나연',
                number: 6,
                position: 'S',
                team: '現 흥국생명'
              }}
            />
            <PlayerCard 
              player={{
                id: 4,
                name: '문명화',
                number: 15,
                position: 'MB',
                team: '現 대구시청'
              }}
            />
          </div>
        </section>

        {/* Typography */}
        <section 
          id="typography" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('typography') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Typography</h2>
          <Card className="p-8 space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Heading 1</h1>
            <h2 className="text-4xl font-bold text-gray-900">Heading 2</h2>
            <h3 className="text-3xl font-bold text-gray-900">Heading 3</h3>
            <h4 className="text-2xl font-bold text-gray-900">Heading 4</h4>
            <h5 className="text-xl font-bold text-gray-900">Heading 5</h5>
            <p className="text-base text-gray-800">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-sm text-gray-600">Small text - Secondary information</p>
          </Card>
        </section>

        {/* Grid System */}
        <section 
          id="grid" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Grid System</h2>
          <Card className="p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">12 columns</div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">6</div>
                <div className="col-span-6 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">6</div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">4</div>
                <div className="col-span-4 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">4</div>
                <div className="col-span-4 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">4</div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">3</div>
                <div className="col-span-3 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">3</div>
                <div className="col-span-3 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">3</div>
                <div className="col-span-3 bg-wonderdogs-light p-4 rounded text-center text-gray-800 font-semibold">3</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Usage Guidelines */}
        <section 
          id="usage" 
          ref={addToRefs}
          className={`mb-16 transition-all duration-700 ${
            visibleSections.has('usage') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Guidelines</h2>
          <Card className="p-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Import 방법</h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
                <code>{`import { 
  Button, 
  Card, 
  Input, 
  Badge,
  Modal,
  Tabs,
  Avatar,
  Loading,
  Alert,
  PlayerCard,
  PlayerDetail
} from '../components/common'`}</code>
              </pre>
              
              <h3 className="text-xl font-bold mb-4">컴포넌트 위치</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-2 py-1 rounded">src/components/common/</code> - 재사용 가능한 UI 컴포넌트</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">src/components/layout/</code> - 레이아웃 컴포넌트</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">src/data/</code> - 데이터 파일</li>
              </ul>

              <h3 className="text-xl font-bold mb-4 mt-6">Tailwind 커스텀 색상</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-2 py-1 rounded">bg-wonderdogs-primary</code></li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">bg-wonderdogs-secondary</code></li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">bg-wonderdogs-accent</code></li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">bg-wonderdogs-dark</code></li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">bg-wonderdogs-light</code></li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">bg-wonderdogs-gradient</code></li>
              </ul>
            </div>
          </Card>
        </section>

      </div>
    </div>
  )
}

export default ComponentLibrary
