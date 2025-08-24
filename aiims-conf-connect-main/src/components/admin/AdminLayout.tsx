
import { useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Calendar, Layout, Users, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleLogout = () => {
    // In a real app, here you would also clear auth tokens/cookies
    navigate("/login");
  };
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 bg-medical-800 text-white">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span className="text-xl font-bold">AIIMS Admin</span>
          </div>
        </div>
        <div className="flex-1 px-4 py-6 space-y-1">
          <Link to="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-medical-700">
              <Layout className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-medical-700">
              <Users className="mr-2 h-5 w-5" />
              Registrations
            </Button>
          </Link>
        </div>
        <div className="p-4 border-t border-medical-700">
          <Button 
            variant="outline" 
            className="w-full border-white text-white hover:bg-medical-700"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
      
      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="bg-white border-b md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-medical-700" />
              <span className="text-xl font-bold text-medical-700">AIIMS Admin</span>
            </div>
            <Button variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </header>
        
        {/* Mobile sidebar */}
        <div className={cn(
          "fixed inset-0 z-40 md:hidden",
          sidebarOpen ? "block" : "hidden"
        )}>
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative flex flex-col w-72 max-w-xs bg-medical-800 text-white h-full">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  <span className="text-xl font-bold">AIIMS Admin</span>
                </div>
                <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>
            <div className="flex-1 px-4 py-6 space-y-1">
              <Link to="/admin/dashboard" onClick={() => setSidebarOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-medical-700">
                  <Layout className="mr-2 h-5 w-5" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/admin/dashboard" onClick={() => setSidebarOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-medical-700">
                  <Users className="mr-2 h-5 w-5" />
                  Registrations
                </Button>
              </Link>
            </div>
            <div className="p-4 border-t border-medical-700">
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-medical-700"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
