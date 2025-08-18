import Breadcrumb from "@/components/Breadcrumb";
import RecruimentContent from "@/components/policy/sections/RecruimentContent";
import RewardPolicy from "@/components/policy/sections/RewardPolicy";

export default function PolicyPage() {
  return (
    <div className="mx-auto">
      <Breadcrumb />

      <div>
        <RecruimentContent />
        <RewardPolicy />
      </div>
    </div>
  );
}
