import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Briefcase, Shield, Users, Search, Upload } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const recentDocuments = [
    {
      title: "Labour Standards Act 2024",
      description: "Comprehensive guidelines on working hours, overtime, and employee rights",
      category: "Employment Standards",
      date: "March 15, 2024"
    },
    {
      title: "Workplace Safety Regulations",
      description: "Updated safety protocols and employer responsibilities",
      category: "Safety",
      date: "March 10, 2024"
    },
    {
      title: "Minimum Wage Guidelines",
      description: "Current minimum wage rates and calculation methods",
      category: "Wages",
      date: "March 5, 2024"
    }
  ];

  const recentJobs = [
    {
      title: "Senior HR Manager",
      company: "Tech Solutions Inc.",
      location: "Toronto, ON",
      type: "Full-time",
      salary: "$75,000 - $90,000"
    },
    {
      title: "Labour Relations Specialist",
      company: "Manufacturing Corp",
      location: "Vancouver, BC",
      type: "Full-time",
      salary: "$60,000 - $70,000"
    },
    {
      title: "Compliance Officer",
      company: "Financial Services Ltd",
      location: "Calgary, AB",
      type: "Contract",
      salary: "$55,000 - $65,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-50">
              Your HR Resource Hub
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Access Labour Laws &<br />
              <span className="text-blue-600">Find Opportunities in India</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive portal for Indian labour-related resources, legal documents, and job opportunities. 
              Bridging the gap between legal awareness and employment across India.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/documents">
                <FileText className="mr-2 h-5 w-5" />
                Browse Labour Laws & Acts
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/jobs">
                <Briefcase className="mr-2 h-5 w-5" />
                Find Jobs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access verified labour documents, post job opportunities, and stay informed about your rights and responsibilities under Indian law.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Legal Resources</CardTitle>
                <CardDescription>
                  Access comprehensive labour laws, acts, and regulations with detailed explanations and PDF downloads.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Job Opportunities</CardTitle>
                <CardDescription>
                  Post and discover job openings with detailed descriptions, requirements, and direct contact information.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Secure Access</CardTitle>
                <CardDescription>
                  Protected authentication system ensuring verified administrators and secure user profiles.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Documents Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Labour Laws & Acts</h2>
              <p className="text-gray-600">Latest Indian labour laws and regulations</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/documents">View All</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{doc.category}</Badge>
                    <span className="text-sm text-gray-500">{doc.date}</span>
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    View Document
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Job Opportunities</h2>
              <p className="text-gray-600">Find your next career opportunity</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="text-gray-600">{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Location:</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Salary:</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Briefcase className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our platform to access labour resources and discover job opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
