
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import RegistrationDetailsPage from "./pages/RegistrationDetailsPage";
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./components/admin/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import NotFound from "./pages/NotFound";
import EventsPage from "./pages/EventsPage";
import PreConferenceWorkshopPage from "./pages/PreConferenceWorkshopPage";
import MainConferencePage from "./pages/MainConferencePage";
import SpeakersPage from "./pages/SpeakersPage";
import AbstractPage from "./pages/AbstractPage";
import TravelPage from "./pages/TravelPage";
import PlacesPage from "./pages/PlacesPage";
import PSIMembersPage from "./pages/PSIMembersPage";
import OrganizingCommitteePage from "./pages/OrganizingCommitteePage";
import SymposiumPage from "./pages/SymposiumPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/pre-conference" element={<PreConferenceWorkshopPage />} />
            <Route path="/events/main-conference" element={<MainConferencePage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/abstract" element={<AbstractPage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/psi-members" element={<PSIMembersPage />} />
            <Route path="/organizing-committee" element={<OrganizingCommitteePage />} />
            {/* <Route path="/symposium" element={<SymposiumPage />} /> */}

          </Route>

          {/* Registration pages (outside of standard layout) */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registration-details" element={<RegistrationDetailsPage />} />

          {/* Auth routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
