export interface RecruitmentItem {
  id: number;
  title: string;
  description: string;
  bgImage: string;
  personImage: string;
}

export interface RecruitmentCardProps {
  item: RecruitmentItem;
}
export interface RewardListSectionProps {
  title: string;
  items: string[];
}
