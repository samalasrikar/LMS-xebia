import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Users, Layers, 
  CheckSquare, Bell, BarChart3, ShieldCheck, 
  Settings, LogOut, Menu, X, ChevronRight 
} from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Task 6: Sidebar Navigation items configuration
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Users', path: '/users', icon: Users },
    { name: 'Batches', path: '/batches', icon: Layers },
    { name: 'Assessments', path: '/assessments', icon: CheckSquare },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Approvals', path: '/approvals', icon: ShieldCheck },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Task 5: Sidebar Layout Navigation Panel */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Sidebar Header / Logo branding block */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
            <Layers className="h-6 w-6" />
            <span>LMS Dashboard</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Middle Links Navigation Row */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors group
                  ${isActive 
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} />
                  <span>{item.name}</span>
                </div>
                {isActive && <ChevronRight className="h-4 w-4" />}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Bottom Footer Profile Link */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors w-full">
            <LogOut className="h-5 w-5" />
            <span>Logout Account</span>
          </Link>
        </div>
      </aside>

      {/* Right Side Frame Viewport Core Layout */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Task 5: Top Navbar Frame Section */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900">
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900/40">
              <span>Environment: Workspace Development</span>
            </div>
          </div>

          {/* User profile dropdown trigger state template */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold leading-none">Admin Operator</p>
                <p className="text-xs text-slate-400 mt-1">srika@xebia.com</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-between text-white font-bold text-sm justify-center shadow-md shadow-blue-500/10">
                AO
              </div>
            </div>
          </div>
        </header>

        {/* Task 5: Main Content Area Router Frame Outlet */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-slate-900/40">
          {children}
        </main>

        {/* Task 5: Standard Sticky Bottom Footer */}
        <footer className="py-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center text-xs text-slate-400">
          <p>© 2026 Xebia LMS Platform Setup System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
