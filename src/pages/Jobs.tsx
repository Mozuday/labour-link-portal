import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, IndianRupee, Building, Plus, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const { toast } = useToast();

  const jobs = [
    {
      id: 1,
      title: "Senior HR Manager",
      company: "Tech Solutions Inc.",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      salary: "₹12,00,000 - ₹15,00,000",
      description: "Lead HR initiatives, manage employee relations, and ensure compliance with labour standards.",
      postedDate: "2024-03-15",
      applicants: 25,
      requirements: ["5+ years HR experience", "Labour law knowledge", "Leadership skills"]
    },
    {
      id: 2,
      title: "Labour Relations Specialist",
      company: "Manufacturing Corp",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      salary: "₹8,00,000 - ₹10,00,000",
      description: "Handle collective bargaining, grievance procedures, and maintain positive labour relations.",
      postedDate: "2024-03-12",
      applicants: 18,
      requirements: ["Labour relations experience", "Negotiation skills", "Legal background preferred"]
    },
    {
      id: 3,
      title: "Compliance Officer",
      company: "Financial Services Ltd",
      location: "Delhi, NCR",
      type: "Contract",
      salary: "₹7,00,000 - ₹9,00,000",
      description: "Ensure organizational compliance with labour laws and regulatory requirements.",
      postedDate: "2024-03-10",
      applicants: 32,
      requirements: ["Compliance experience", "Attention to detail", "Regulatory knowledge"]
    },
    {
      id: 4,
      title: "Workplace Safety Coordinator",
      company: "Construction Plus",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      salary: "₹6,00,000 - ₹8,00,000",
      description: "Develop and implement safety programs, conduct training, and ensure workplace safety compliance.",
      postedDate: "2024-03-08",
      applicants: 15,
      requirements: ["Safety certification", "Training experience", "Risk assessment skills"]
    },
    {
      id: 5,
      title: "Employment Standards Officer",
      company: "Government Agency",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      salary: "₹8,50,000 - ₹11,00,000",
      description: "Investigate employment standards complaints and educate employers on labour law compliance.",
      postedDate: "2024-03-05",
      applicants: 28,
      requirements: ["Government experience", "Investigation skills", "Legal knowledge"]
    },
    {
      id: 6,
      title: "Human Resources Coordinator",
      company: "Healthcare Solutions",
      location: "Pune, Maharashtra",
      type: "Part-time",
      salary: "₹4,50,000 - ₹6,00,000",
      description: "Support HR operations, manage employee records, and assist with recruitment processes.",
      postedDate: "2024-03-03",
      applicants: 42,
      requirements: ["HR education", "Organizational skills", "Communication skills"]
    }
  ];

  const locations = ["all", "Mumbai, Maharashtra", "Bangalore, Karnataka", "Delhi, NCR", "Chennai, Tamil Nadu", "Hyderabad, Telangana", "Pune, Maharashtra"];
  const jobTypes = ["all", "Full-time", "Part-time", "Contract", "Temporary"];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    const matchesType = selectedType === "all" || job.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  const handlePostJob = () => {
    const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";
    
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to post a job",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Job Posting",
      description: "Redirecting to job posting form...",
    });
    
    // In a real app, this would navigate to a job posting form
    console.log("Navigating to job posting form");
  };

  const handleApplyJob = (jobTitle: string) => {
    const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";
    
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to apply for jobs",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: `Your application for ${jobTitle} has been submitted`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Opportunities</h1>
            <p className="text-gray-600">Discover career opportunities in labour relations and compliance</p>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handlePostJob}
          >
            <Plus className="mr-2 h-4 w-4" />
            Post a Job
          </Button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <MapPin className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <Clock className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} job opportunities
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6 mb-8">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-lg font-semibold text-green-600 mb-1">
                      <IndianRupee className="h-4 w-4" />
                      {job.salary}
                    </div>
                    <Badge variant="outline">{job.applicants} applicants</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="secondary">{req}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted on {job.postedDate}</span>
                  <div className="flex gap-2">
                    <Button variant="outline">Learn More</Button>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleApplyJob(job.title)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
