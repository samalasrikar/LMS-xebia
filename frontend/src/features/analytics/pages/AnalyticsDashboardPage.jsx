import KPISection from "../components/KPISection";
import EnrollmentChart from "../components/EnrollmentChart";
import RiskCoursesTable from "../components/RiskCoursesTable";

export default function AnalyticsDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-purple-950">
        Analytics Dashboard
      </h1>

      <KPISection />

      <EnrollmentChart />

      <RiskCoursesTable />
    </div>
  );
}