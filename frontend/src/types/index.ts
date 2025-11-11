// 선수 타입
export interface Player {
  id: number;
  name: string;
  number: number;
  position: 'OH' | 'OP' | 'S' | 'MB' | 'L';
  role?: 'captain' | 'vice-captain';
  birth: string;
  height: string;
  weight: string;
  team: string;
  photo?: string;
  career: string[];
  stats: {
    attack: {
      attempts: number;
      success: number;
      blocked: number;
      rate: string;
    };
    defense: {
      digs: number;
      blocks: number;
      receives: number;
      serves: number;
    };
    games: Game[];
  };
}

// 경기 타입
export interface Game {
  date: string;
  opponent: string;
  result: 'W' | 'L';
  points: number;
  attacks: number;
  blocks: number;
}

// 코치/스태프 타입
export interface Coach {
  name: string;
  role: string;
  birth?: string;
  height?: string;
  weight?: string;
  photo?: string;
  career: string[];
}

export interface Staff {
  name: string;
  role: string;
  birth?: string;
  height?: string;
  photo?: string;
  weight?: string;
  career?: string[];
}

// 스태프 데이터 타입
export interface StaffData {
  coaches: Coach[];
  support: Staff[];
}

// 포지션별 선수 그룹 타입
export interface PlayersByPosition {
  OH: Player[];
  OP: Player[];
  S: Player[];
  MB: Player[];
  L: Player[];
}

// 탭 타입
export interface Tab {
  label: string;
  content: React.ReactNode;
}

// 테마 타입
export type Theme = 'light' | 'dark';

// 테마 컨텍스트 타입
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

