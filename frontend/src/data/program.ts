export interface ProgramInfo {
  title: string
  subtitle: string
  description: string
  poster: string
  broadcaster: string
  airtime: string
  objective: string
  concept: string[]
}

export interface Commentary {
  name: string
  role: string
  photo: string
}

export const programData: ProgramInfo = {
  title: '신인감독 김연경',
  subtitle: '필승 원더독스',
  description: `'20년 차 베테랑 선수 김연경'이 '0년 차 신인감독 김연경'이 되어 돌아왔다!

프로팀 방출 선수, 프로팀이 꿈인 실업팀 선수 그리고 은퇴한 선수까지.
배구계의 숨은 보석들을 찾아 김연경 감독이 직접 창단한 신생 배구단 '필승 원더독스'

팀의 최종 목표는 배구계 판도를 뒤흔들 '프로팀 제8구단'이 되는 것

패배는 곧 팀 해체 위기!
진짜 구단주가 나타날 때까지 오직 승리로만 경쟁력을 증명해야 한다!`,
  poster: '/images/poster/프로그램.webp',
  broadcaster: 'MBC',
  airtime: '매주 토요일 저녁 9시 10분',
  objective: '배구계 판도를 뒤흔들 프로팀 제8구단 되기',
  concept: [
    '레전드 배구선수 김연경의 감독 도전기',
    'Under에서 Wonder로 도약하는 신생 배구단',
    '진짜 구단주를 찾기 위한 승리의 여정',
    '배구계 숨은 보석들의 재기 스토리'
  ]
}

// 포스터 갤러리
export const posters = [
  '/images/poster/포스터1.webp',
  '/images/poster/포스터2.webp',
  '/images/poster/포스터3.webp',
  '/images/poster/포스터4.webp',
  '/images/poster/포스터5.webp',
  '/images/poster/프로그램.webp'
]
// 해설진
export const commentary: Commentary[] = [
  {
    name: '이숙자',
    role: '해설',
    photo: '/images/commentary/이숙자.webp'
  },
  {
    name: '이호근',
    role: '해설',
    photo: '/images/commentary/이호근.webp'
  }
]



export const ratings = [
  { episode: 1, date: '2025.09.28', nationwide: 2.2, seoul: '-' },
  { episode: 2, date: '2025.10.05', nationwide: 4.0, seoul: 4.4 },
  { episode: 3, date: '2025.10.12', nationwide: 4.7, seoul: 5.1 },
  { episode: 4, date: '2025.10.19', nationwide: 3.9, seoul: 4.1 },
  { episode: 5, date: '2025.10.26', nationwide: 4.1, seoul: 4.3 },
]

