export interface CultureSectionData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl: string;
}

export interface ProblemCard {
  number: string;
  title: string;
}

export interface ProblemsSectionData {
  title: string;
  cards: ProblemCard[];
}

export interface StrategyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

export interface StrategySectionData {
  items: StrategyItem[];
}
