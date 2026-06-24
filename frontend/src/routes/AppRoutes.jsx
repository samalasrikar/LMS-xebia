import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AdminLayout from "../shared/layouts/AdminLayout";

// Course Pages
import CourseInventoryPage from "../features/courses/pages/CourseInventoryPage";
import CreateCoursePage from "../features/courses/pages/CreateCoursePage";
import EditCoursePage from "../features/courses/pages/EditCoursePage";
import CourseDetailsPage from "../features/courses/pages/CourseDetailsPage";
import ManageStudentsPage from "../features/courses/pages/ManageStudentsPage";

// Other Feature Pages
import CurriculumBuilderPage from "../features/curriculum/pages/CurriculumBuilderPage";
import CategoryManagementPage from "../features/categories/pages/CategoryManagementPage";
import AnalyticsDashboardPage from "../features/analytics/pages/AnalyticsDashboardPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Navigate to="/courses" replace />} />

        <Route path="/courses" element={<CourseInventoryPage />} />
        <Route path="/courses/create" element={<CreateCoursePage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/courses/:id/edit" element={<EditCoursePage />} />
        <Route path="/courses/:id/students" element={<ManageStudentsPage />} />
        <Route path="/courses/:id/curriculum" element={<CurriculumBuilderPage />} />

        <Route path="/categories" element={<CategoryManagementPage />} />
        <Route path="/analytics" element={<AnalyticsDashboardPage />} />

        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen text-2xl font-semibold">
              404 | Page Not Found
            </div>
          }
        />
      </Route>
    </Routes>
  );
}