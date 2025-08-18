import HeaderSection from "./components/HeaderSection";
import NewIdolReward from "./components/NewIdolReward";
import NoticeSection from "./components/NoticeSection";
import OtherRewards from "./components/OtherRewards";
import RevenueReward from "./components/RevenueReward";

export default function RewardPolicy() {
  return (
    <div className="section">
      <HeaderSection />
      {/* Notice Section is using before:left-[49%] to avoid overflow */}
      <NoticeSection />
      <NewIdolReward />
      <RevenueReward />
      <OtherRewards />
    </div>
  );
}
