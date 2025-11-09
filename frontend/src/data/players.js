// 필승 원더독스 선수단 데이터
export const players = [
  // 아웃사이드 히터
  {
    id: 1,
    name: '표승주',
    number: 19,
    position: 'OH',
    role: 'captain',
    birth: '1992.08.07',
    height: '182cm',
    weight: '77kg',
    team: '필승 원더독스',
    career: [
      '前 도로공사, GS칼텍스, IBK기업은행, 정관장',
      '前 국가대표'
    ],
    stats: {
      attack: { attempts: 245, success: 98, blocked: 23, rate: '40.0%' },
      defense: { digs: 67, blocks: 12, receives: 89, serves: 15 },
      games: []
    }
  },
  {
    id: 2,
    name: '백채림',
    number: 8,
    position: 'OH',
    birth: '1998.01.07',
    height: '173cm',
    weight: '59kg',
    team: '現 수원시청',
    career: [
      '前 도로공사, 현대건설',
      '現 수원시청'
    ],
    stats: {
      attack: { attempts: 189, success: 72, blocked: 18, rate: '38.1%' },
      defense: { digs: 54, blocks: 8, receives: 76, serves: 11 },
      games: []
    }
  },
  {
    id: 3,
    name: '한송희',
    number: 1,
    position: 'OH',
    birth: '2000.04.16',
    height: '172cm',
    weight: '65kg',
    team: '現 포항시체육회',
    career: [
      '前 GS칼텍스, 도로공사',
      '現 포항시체육회 소속'
    ],
    stats: {
      attack: { attempts: 156, success: 61, blocked: 15, rate: '39.1%' },
      defense: { digs: 48, blocks: 7, receives: 62, serves: 9 },
      games: []
    }
  },
  {
    id: 4,
    name: '타미라',
    number: 10,
    position: 'OH',
    birth: '1999.11.29',
    height: '175cm',
    weight: '62kg',
    team: '現 다르한 모글스',
    career: [
      '몽골 국적',
      '現 목포과학대학교 재학 중',
      '前 에나코리 몬티, 現 다르한 모글스 소속'
    ],
    stats: {
      attack: { attempts: 134, success: 52, blocked: 12, rate: '38.8%' },
      defense: { digs: 39, blocks: 6, receives: 51, serves: 8 },
      games: []
    }
  },
  {
    id: 5,
    name: '인쿠시',
    number: 3,
    position: 'OH',
    birth: '2005.03.06',
    height: '179cm',
    weight: '67kg',
    team: '現 다르한 모글스',
    career: [
      '몽골 국적',
      '現 목포과학대학교 재학 중',
      '前 에나코리 몬티, 現 다르한 모글스 소속'
    ],
    stats: {
      attack: { attempts: 98, success: 38, blocked: 9, rate: '38.8%' },
      defense: { digs: 32, blocks: 5, receives: 44, serves: 7 },
      games: []
    }
  },
  // 아포짓 스파이커
  {
    id: 6,
    name: '윤영인',
    number: 9,
    position: 'OP',
    birth: '1999.03.09',
    height: '178cm',
    weight: '-',
    team: '現 수원시청',
    career: [
      '프로경력 無',
      '現 수원시청 소속'
    ],
    stats: {
      attack: { attempts: 167, success: 68, blocked: 14, rate: '40.7%' },
      defense: { digs: 28, blocks: 9, receives: 35, serves: 12 },
      games: []
    }
  },
  // 세터
  {
    id: 7,
    name: '이나연',
    number: 6,
    position: 'S',
    birth: '1992.03.25',
    height: '173cm',
    weight: '62kg',
    team: '現 흥국생명',
    career: [
      '前 GS칼텍스, IBK기업은행, 현대건설, 포항시체육회',
      '現 흥국생명 (프로 재데뷔)'
    ],
    stats: {
      attack: { attempts: 45, success: 18, blocked: 3, rate: '40.0%' },
      defense: { digs: 89, blocks: 4, receives: 112, serves: 19 },
      games: []
    }
  },
  {
    id: 8,
    name: '이진',
    number: 2,
    position: 'S',
    birth: '2001.02.03',
    height: '173cm',
    weight: '57kg',
    team: '現 대구시청',
    career: [
      '前 IBK기업은행',
      '現 대구시청 배구단, 에나코리 몬티 소속'
    ],
    stats: {
      attack: { attempts: 38, success: 15, blocked: 2, rate: '39.5%' },
      defense: { digs: 76, blocks: 3, receives: 98, serves: 16 },
      games: []
    }
  },
  {
    id: 9,
    name: '구솔',
    number: 14,
    position: 'S',
    birth: '2001.07.23',
    height: '181cm',
    weight: '68kg',
    team: '現 아제라일 바쿠',
    career: [
      '前 KGC인삼공사, 페퍼저축은행',
      '現 아제라일 바쿠 소속'
    ],
    stats: {
      attack: { attempts: 52, success: 21, blocked: 4, rate: '40.4%' },
      defense: { digs: 82, blocks: 5, receives: 105, serves: 18 },
      games: []
    }
  },
  // 미들 블로커
  {
    id: 10,
    name: '문명화',
    number: 15,
    position: 'MB',
    birth: '1995.09.04',
    height: '189cm',
    weight: '73kg',
    team: '現 대구시청',
    career: [
      '前 KGC인삼공사, GS칼텍스',
      '現 대구시청 배구단 소속'
    ],
    stats: {
      attack: { attempts: 178, success: 89, blocked: 8, rate: '50.0%' },
      defense: { digs: 34, blocks: 45, receives: 28, serves: 14 },
      games: []
    }
  },
  {
    id: 11,
    name: '김나희',
    number: 7,
    position: 'MB',
    role: 'vice-captain',
    birth: '1989.02.17',
    height: '178cm',
    weight: '63kg',
    team: '現 수원시청',
    career: [
      '前 흥국생명',
      '現 수원시청 소속'
    ],
    stats: {
      attack: { attempts: 145, success: 72, blocked: 7, rate: '49.7%' },
      defense: { digs: 29, blocks: 38, receives: 24, serves: 11 },
      games: []
    }
  },
  {
    id: 12,
    name: '김현정',
    number: 5,
    position: 'MB',
    birth: '1998.08.28',
    height: '180cm',
    weight: '70kg',
    team: '現 수원시청',
    career: [
      '前 GS칼텍스, IBK기업은행, 도로공사',
      '現 수원시청 소속'
    ],
    stats: {
      attack: { attempts: 132, success: 65, blocked: 6, rate: '49.2%' },
      defense: { digs: 26, blocks: 34, receives: 21, serves: 10 },
      games: []
    }
  },
  // 리베로
  {
    id: 13,
    name: '최수빈',
    number: 17,
    position: 'L',
    birth: '1994.04.02',
    height: '-',
    weight: '-',
    team: '필승 원더독스',
    career: [
      '前 KGC인삼공사, IBK기업은행'
    ],
    stats: {
      attack: { attempts: 12, success: 5, blocked: 1, rate: '41.7%' },
      defense: { digs: 156, blocks: 0, receives: 198, serves: 6 },
      games: []
    }
  },
  {
    id: 14,
    name: '구혜인',
    number: 23,
    position: 'L',
    birth: '2003.09.23',
    height: '169cm',
    weight: '65kg',
    team: '現 대구시청',
    career: [
      '前 IBK기업은행',
      '現 대구시청 소속'
    ],
    stats: {
      attack: { attempts: 8, success: 3, blocked: 0, rate: '37.5%' },
      defense: { digs: 134, blocks: 0, receives: 172, serves: 5 },
      games: []
    }
  }
]

// 코칭스태프 데이터
export const staff = {
  coaches: [
    {
      name: '김연경',
      role: '감독',
      birth: '1988.02.26',
      height: '192cm',
      weight: '73kg',
      career: [
        '4개국 리그 MVP',
        '11-12 CEV 챔피언스 리그 MVP',
        '2012 런던 올림픽 MVP',
        '흥국생명 영구결번'
      ]
    },
    {
      name: '김태영',
      role: '수석코치',
      career: ['前 현대건설 코치']
    },
    {
      name: '이연주',
      role: '코치',
      birth: '1990.03.01',
      height: '180cm',
      weight: '69kg',
      career: ['前 KT&G-KGC인삼공사']
    },
    {
      name: '정우성',
      role: '코치',
      career: [
        '경희대학교 출신',
        '現 우리카드 유소년 클럽 강사',
        '대학체전 : 소년선수촌 출연'
      ]
    }
  ],
  support: [
    {
      name: '정종일',
      role: '트레이너',
      career: ['前 대한항공 수석 트레이닝 코치']
    },
    {
      name: '이상화',
      role: '트레이너',
      birth: '1971.05.11',
      height: '174cm',
      weight: '77kg',
      career: ['前 흥국생명 수석 트레이닝 코치']
    },
    {
      name: '박예진',
      role: '트레이너',
      career: ['前 신한은행 의무팀 트레이너']
    },
    {
      name: '채상민',
      role: '전력분석관',
      career: ['前 현대건설 전력분석관']
    },
    {
      name: '남예린',
      role: '전력분석관',
      career: ['한봄고-서울여대 출신']
    },
    {
      name: '이경하',
      role: '팀 매니저',
      career: ['前 GS칼텍스 매니저']
    },
    {
      name: '부승관',
      role: '팀 매니저',
      birth: '1998.01.16',
      height: '175cm',
      weight: '60kg',
      career: ['세븐틴 멤버']
    }
  ]
}

// 포지션별 그룹화
export const playersByPosition = {
  OH: players.filter(p => p.position === 'OH'),
  OP: players.filter(p => p.position === 'OP'),
  S: players.filter(p => p.position === 'S'),
  MB: players.filter(p => p.position === 'MB'),
  L: players.filter(p => p.position === 'L')
}
