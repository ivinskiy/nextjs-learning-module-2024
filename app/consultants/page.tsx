import { Suspense } from "react";
import { AvailableSection } from "./components/AvailableSection";
import { UpcomingSection } from "./components/UpcomingSection";

const AvailablePage = async () => {
  return (
    <div className="flex justify-between gap-10 mt-10">
      <Suspense fallback={<span>LOADING AVAILABLE</span>}>
        <AvailableSection />
      </Suspense>
      <Suspense fallback={<span>LOADING UPCOMING</span>}>
        <UpcomingSection />
      </Suspense>
    </div>
  );
};

export default AvailablePage;
