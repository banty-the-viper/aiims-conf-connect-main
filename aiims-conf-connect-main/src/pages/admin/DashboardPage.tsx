
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, FileText, Download, ChevronDown, Search, PlusCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for registered users
const mockRegistrations = [
  {
    id: 1,
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh.kumar@example.com",
    organization: "AIIMS Delhi",
    designation: "Senior Cardiologist",
    registrationType: "earlyBird",
    specialization: "Cardiology",
    registrationDate: "2025-05-10",
  },
  {
    id: 2,
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@example.com",
    organization: "AIIMS Rishikesh",
    designation: "Neurosurgeon",
    registrationType: "regular",
    specialization: "Neurology",
    registrationDate: "2025-06-15",
  },
  {
    id: 3,
    firstName: "Amit",
    lastName: "Patel",
    email: "amit.patel@example.com",
    organization: "AIIMS Jodhpur",
    designation: "Oncologist",
    registrationType: "student",
    specialization: "Oncology",
    registrationDate: "2025-07-05",
  },
  {
    id: 4,
    firstName: "Sunita",
    lastName: "Reddy",
    email: "sunita.reddy@example.com",
    organization: "AIIMS Bhopal",
    designation: "Professor",
    registrationType: "regular",
    specialization: "Internal Medicine",
    registrationDate: "2025-06-22",
  },
  {
    id: 5,
    firstName: "Vikram",
    lastName: "Singh",
    email: "vikram.singh@example.com",
    organization: "AIIMS Patna",
    designation: "Resident Doctor",
    registrationType: "student",
    specialization: "Pediatrics",
    registrationDate: "2025-07-12",
  },
  {
    id: 6,
    firstName: "Meera",
    lastName: "Joshi",
    email: "meera.joshi@example.com",
    organization: "AIIMS Raipur",
    designation: "Head of Department",
    registrationType: "earlyBird",
    specialization: "Radiology",
    registrationDate: "2025-05-18",
  },
  {
    id: 7,
    firstName: "Rahul",
    lastName: "Gupta",
    email: "rahul.gupta@example.com",
    organization: "AIIMS Bhubaneswar",
    designation: "Surgeon",
    registrationType: "regular",
    specialization: "Surgery",
    registrationDate: "2025-06-30",
  },
  {
    id: 8,
    firstName: "Kavita",
    lastName: "Verma",
    email: "kavita.verma@example.com",
    organization: "AIIMS Nagpur",
    designation: "Medical Researcher",
    registrationType: "earlyBird",
    specialization: "Psychiatry",
    registrationDate: "2025-05-25",
  },
];

// Helper functions
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const getRegistrationTypeLabel = (type: string) => {
  switch (type) {
    case "earlyBird":
      return "Early Bird";
    case "student":
      return "Student";
    case "regular":
      return "Regular";
    default:
      return type;
  }
};

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState("all");

  // Filter registrations based on search query and current tab
  const filteredRegistrations = mockRegistrations.filter((registration) => {
    const matchesSearch =
      searchQuery === "" ||
      registration.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      registration.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      registration.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      registration.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      registration.specialization.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      currentTab === "all" || registration.registrationType === currentTab;

    return matchesSearch && matchesTab;
  });

  // Calculate statistics
  const totalRegistrations = mockRegistrations.length;
  const earlyBirdCount = mockRegistrations.filter(r => r.registrationType === "earlyBird").length;
  const regularCount = mockRegistrations.filter(r => r.registrationType === "regular").length;
  const studentCount = mockRegistrations.filter(r => r.registrationType === "student").length;

  // Mock function to handle CSV export
  const handleExportCSV = () => {
    // In a real application, this would generate and download a CSV file
    alert("CSV export would happen here in a real application");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button onClick={handleExportCSV} className="bg-medical-600 hover:bg-medical-700">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
        
        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-medical-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRegistrations}</div>
              <p className="text-xs text-gray-500">Overall registrations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Early Bird</CardTitle>
              <Calendar className="h-4 w-4 text-medical-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{earlyBirdCount}</div>
              <p className="text-xs text-gray-500">Early bird registrations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Regular</CardTitle>
              <FileText className="h-4 w-4 text-medical-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{regularCount}</div>
              <p className="text-xs text-gray-500">Regular registrations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Student</CardTitle>
              <Users className="h-4 w-4 text-medical-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentCount}</div>
              <p className="text-xs text-gray-500">Student registrations</p>
            </CardContent>
          </Card>
        </div>

        {/* Registrations Table */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Registrations</CardTitle>
            <CardDescription>
              Manage conference registrations. Use the tabs and search to filter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search registrants..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Tabs 
                  defaultValue="all" 
                  className="w-full sm:w-auto"
                  onValueChange={(value) => setCurrentTab(value)}
                >
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="earlyBird">Early Bird</TabsTrigger>
                    <TabsTrigger value="regular">Regular</TabsTrigger>
                    <TabsTrigger value="student">Student</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Organization
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Specialization
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Registered On
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {filteredRegistrations.map((registration) => (
                        <tr key={registration.id}>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {registration.firstName} {registration.lastName}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {registration.email}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {registration.organization}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {registration.specialization}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              registration.registrationType === "earlyBird"
                                ? "bg-green-100 text-green-800"
                                : registration.registrationType === "student"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>
                              {getRegistrationTypeLabel(registration.registrationType)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {formatDate(registration.registrationDate)}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <ChevronDown className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Registration</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  Cancel Registration
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredRegistrations.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No registrations found</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
