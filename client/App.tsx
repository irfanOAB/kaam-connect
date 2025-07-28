import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import LanguageSelection from "./pages/LanguageSelection";
import Onboarding from "./pages/Onboarding";
import RoleSelection from "./pages/RoleSelection";
import PhoneVerification from "./pages/PhoneVerification";
import WorkerHome from "./pages/WorkerHome";
import JobProviderHome from "./pages/JobProviderHome";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/language-selection" element={<LanguageSelection />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/phone-verification" element={<PhoneVerification />} />
          <Route path="/worker-home" element={<WorkerHome />} />
          <Route path="/job-provider-home" element={<JobProviderHome />} />
          <Route path="/post-job" element={<PlaceholderPage title="Post a Job" description="Create a new job posting to find the perfect worker for your needs." />} />
          <Route path="/my-jobs" element={<PlaceholderPage title="My Jobs" description="View and manage all your job postings and applications." />} />
          <Route path="/browse-workers" element={<PlaceholderPage title="Browse Workers" description="Find skilled workers in your area by browsing profiles and ratings." />} />
          <Route path="/worker-profile" element={<PlaceholderPage title="Worker Profile" description="Set up your professional profile to attract more job opportunities." />} />
          <Route path="/chat" element={<PlaceholderPage title="Chat" description="Communicate directly with workers or job providers securely." />} />
          <Route path="/wallet" element={<PlaceholderPage title="Wallet & Payments" description="Manage your earnings, payments, and transaction history." />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" description="Customize your app preferences, language, and account settings." />} />
          <Route path="/help" element={<PlaceholderPage title="Help & Support" description="Get assistance, view FAQs, and contact our support team." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
