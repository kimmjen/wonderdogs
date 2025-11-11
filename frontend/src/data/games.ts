// 경기 타입 정의
export interface GameResult {
  round: number
  date: string
  location: string
  opponent: string
  opponentType: '여고' | '프로' | '대학' | '실업' | '일본고교'
  result: '승' | '패'
  score: {
    wonderdogs: number
    opponent: number
  }
  sets: {
    set1: { wonderdogs: number; opponent: number }
    set2: { wonderdogs: number; opponent: number }
    set3: { wonderdogs: number; opponent: number }
    set4?: { wonderdogs: number; opponent: number }
    set5?: { wonderdogs: number; opponent: number }
  }
  lineup: {
    coach: string
    players: string[]
  }
  broadcaster: string
  caster: string
  commentator: string
  summary?: string
  notes?: string[]
}

// 팀 전적
export interface TeamRecord {
  totalGames: number
  wins: number
  losses: number
  winRate: string
  winStreak: number
}

// 전체 전적
export const teamRecord: TeamRecord = {
  totalGames: 7,
  wins: 3,
  losses: 2,
  winRate: '0.600',
  winStreak: 2
}

// 경기 목록
export const games: GameResult[] = [
  // 1R: 전주 근영여자고등학교
  {
    round: 1,
    date: '2024.11.05',
    location: '전주실내체육관',
    opponent: '전주 근영여자고등학교',
    opponentType: '여고',
    result: '승',
    score: { wonderdogs: 3, opponent: 1 },
    sets: {
      set1: { wonderdogs: 25, opponent: 19 },
      set2: { wonderdogs: 20, opponent: 25 },
      set3: { wonderdogs: 25, opponent: 22 },
      set4: { wonderdogs: 25, opponent: 22 }
    },
    lineup: {
      coach: '김연경',
      players: ['백채림(OH)', '윤영인(OP)', '문명화(MB)', '김나희(MB)', '이나연(S)', '인쿠시(OH)', '구혜인(L)']
    },
    broadcaster: 'MBC',
    caster: '이호근',
    commentator: '이숙자',
    summary: '원더독스가 찬란한 첫걸음을 내딛습니다.',
    notes: [
      '결장: 표승주(종아리 파열), 한송희(소속팀 일정)',
      '김연경 감독의 빠른 판단과 전술 전환이 승리의 결정적 요소'
    ]
  },

  // 2R: 화성 IBK기업은행 알토스
  {
    round: 2,
    date: '2024.11.10',
    location: '안산 상록수체육관',
    opponent: '화성 IBK기업은행 알토스',
    opponentType: '프로',
    result: '패',
    score: { wonderdogs: 1, opponent: 3 },
    sets: {
      set1: { wonderdogs: 17, opponent: 25 },
      set2: { wonderdogs: 28, opponent: 26 },
      set3: { wonderdogs: 21, opponent: 25 },
      set4: { wonderdogs: 18, opponent: 25 }
    },
    lineup: {
      coach: '김연경',
      players: ['김나희(MB)', '인쿠시(OH)', '윤영인(OP)', '이진(S)', '표승주(OH)', '김현정(MB)', '구혜인(L)']
    },
    broadcaster: 'MBC',
    caster: '이호근',
    commentator: '이숙자',
    notes: [
      '이나연, 표승주, 최수빈, 이진, 김현정, 구혜인 모두 화성 IBK 출신',
      'IBK측 주전 멤버 4명(황민경, 최정민, 김하경, 김채원) 선발 출전'
    ]
  },

  // 3R: 오카야마 슈지츠고등학교
  {
    round: 3,
    date: '2024.11.15',
    location: '오카야마 슈지츠고등학교 제3체육관',
    opponent: '오카야마 슈지츠고등학교',
    opponentType: '일본고교',
    result: '패',
    score: { wonderdogs: 2, opponent: 3 },
    sets: {
      set1: { wonderdogs: 26, opponent: 24 },
      set2: { wonderdogs: 25, opponent: 22 },
      set3: { wonderdogs: 22, opponent: 25 },
      set4: { wonderdogs: 23, opponent: 25 },
      set5: { wonderdogs: 11, opponent: 15 }
    },
    lineup: {
      coach: '김연경',
      players: ['윤영인(OP)', '문명화(MB)', '표승주(OH)', '백채림(OH)', '김현정(MB)', '이나연(S)', '구혜인(L)']
    },
    broadcaster: 'MBC',
    caster: '이호근',
    commentator: '이숙자',
    summary: '첫 해외 원정 경기. 2세트를 따냈지만 후반 체력 방전으로 역전패',
    notes: [
      '필승 원더독스의 첫 해외 원정 경기',
      '오카야마 슈지츠고등학교는 2022·2024년 전일본 배구 고등학교 선수권 대회 여자부 우승팀'
    ]
  },

  // 4R: 광주여자대학교
  {
    round: 4,
    date: '2024.11.20',
    location: '청주체육관',
    opponent: '광주여자대학교',
    opponentType: '대학',
    result: '승',
    score: { wonderdogs: 3, opponent: 0 },
    sets: {
      set1: { wonderdogs: 25, opponent: 20 },
      set2: { wonderdogs: 25, opponent: 9 },
      set3: { wonderdogs: 25, opponent: 21 }
    },
    lineup: {
      coach: '김연경',
      players: ['백채림(OP)', '문명화(MB)', '인쿠시(OH)', '표승주(OH)', '김나희(MB)', '이나연(S)', '구혜인(L)']
    },
    broadcaster: 'MBC',
    caster: '이호근',
    commentator: '이숙자',
    summary: '셧아웃 승리. 인쿠시의 크로스 코트 샷이 빛났다',
    notes: [
      '양궁 선수 안산이 모교 응원석에서 모습을 비췄다'
    ]
  },

  // 5R: 수원시청 배구단
  {
    round: 5,
    date: '2024.11.25',
    location: '안산 상록수체육관',
    opponent: '수원시청 배구단',
    opponentType: '실업',
    result: '승',
    score: { wonderdogs: 3, opponent: 0 },
    sets: {
      set1: { wonderdogs: 25, opponent: 19 },
      set2: { wonderdogs: 25, opponent: 18 },
      set3: { wonderdogs: 25, opponent: 16 }
    },
    lineup: {
      coach: '김연경',
      players: ['한송희(OP)', '문명화(MB)', '인쿠시(OH)', '표승주(OH)', '김나희(MB)', '구솔(S)', '구혜인(L)']
    },
    broadcaster: 'MBC',
    caster: '이호근',
    commentator: '이숙자',
    summary: '블로킹 득점과 힘있는 공격으로 셧아웃 승리',
    notes: [
      '수원시청은 백채림, 윤영인, 김나희를 상대 팀에 내주어 가용 인원 -3'
    ]
  },

  // 6R: 대전 정관장 레드스파크스 (1세트만 진행)
  {
    round: 6,
    date: '2024.11.30',
    location: '대전 충무체육관',
    opponent: '대전 정관장 레드스파크스',
    opponentType: '프로',
    result: '패',
    score: { wonderdogs: 0, opponent: 1 },
    sets: {
      set1: { wonderdogs: 23, opponent: 24 },
      set2: { wonderdogs: 0, opponent: 0 },
      set3: { wonderdogs: 0, opponent: 0 }
    },
    lineup: {
      coach: '김연경',
      players: ['한송희(OP)', '문명화(MB)', '표승주(OH)', '인쿠시(OH)', '김현정(MB)', '구솔(S)', '구혜인(L)']
    },
    broadcaster: 'MBC',
    caster: '이호근',
    commentator: '이숙자',
    summary: '1세트 막바지 네트터치 오심 논란. 23:23에서 1점 내주며 세트 패배',
    notes: [
      '레드스파크스측은 2025 퓨처스 챔프전 출전 2군 선수들로 구성',
      '수원시청 해외 대회 출전으로 백채림, 윤영인, 김나희, 김현정 불참'
    ]
  },

  // 7R: 인천 흥국생명 핑크스파이더스 (미정)
  {
    round: 7,
    date: '미정',
    location: '미정',
    opponent: '인천 흥국생명 핑크스파이더스',
    opponentType: '프로',
    result: '승', // 임시
    score: { wonderdogs: 0, opponent: 0 },
    sets: {
      set1: { wonderdogs: 0, opponent: 0 },
      set2: { wonderdogs: 0, opponent: 0 },
      set3: { wonderdogs: 0, opponent: 0 }
    },
    lineup: {
      coach: '김연경',
      players: []
    },
    broadcaster: 'MBC',
    caster: '이호근',
    commentator: '이숙자',
    notes: [
      '김연경 감독이 현역때 몸담았던 친정팀과의 대결'
    ]
  }
]

// 선수별 경기 기록 매핑 함수
export const getPlayerGames = (playerName: string) => {
  return games
    .filter(game => game.lineup.players.some(p => p.includes(playerName)))
    .map(game => ({
      date: game.date,
      opponent: game.opponent,
      result: game.result,
      attack: 0, // 실제 데이터는 별도로 관리 필요
      block: 0,
      dig: 0,
      serve: 0
    }))
}

// 최근 경기 가져오기
export const getRecentGames = (count: number = 5) => {
  return games
    .filter(game => game.date !== '미정')
    .slice(-count)
    .reverse()
}

