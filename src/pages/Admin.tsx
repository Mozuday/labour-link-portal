
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Users, Briefcase, Plus, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Admin = () => {
  const [documentTitle, setDocumentTitle] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [documentCategory, setDocumentCategory] = useState("");

  const recentDocuments = [
    { title: "Labour Standards Act 2024", category: "Employment Standards", status: "Published", date: "2024-03-15" },
    { title: "Workplace Safety Regulations", category: "Safety", status: "Draft", date: "2024-03-10" },
    { title: "Minimum Wage Guidelines", category: "Wages", status: "Published", date: "2024-03-05" },
  ];

  const recentJobs = [
    { title: "Senior HR Manager", company: "Tech Solutions Inc.", status: "Active", applications: 25 },
    { title: "Labour Relations Specialist", company: "Manufacturing Corp", status: "Active", applications: 18 },
    { title: "Compliance Officer", company: "Financial Services Ltd", status: "Pending", applications: 32 },
  ];

  const stats = [
    { label: "Total Documents", value: "127", icon: FileText, color: "blue" },
    { label: "Active Jobs", value: "45", icon: Briefcase, color: "green" },
    { label: "Registered Users", value: "2,340", icon: Users, color: "purple" },
    { label: "Downloads", value: "8,950", icon: Upload, color: "orange" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage documents, job postings, and platform content</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload Documents</TabsTrigger>
            <TabsTrigger value="manage">Manage Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Upload Documents Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Document</CardTitle>
                <CardDescription>
                  Add labour laws, acts, and regulations to the platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Document Title</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Labour Standards Act 2024"
                        value={documentTitle}
                        onChange={(e) => setDocumentTitle(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={documentCategory} onValueChange={setDocumentCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employment-standards">Employment Standards</SelectItem>
                          <SelectItem value="safety">Safety</SelectItem>
                          <SelectItem value="wages">Wages</SelectItem>
                          <SelectItem value="equity">Equity</SelectItem>
                          <SelectItem value="compensation">Compensation</SelectItem>
                          <SelectItem value="labour-relations">Labour Relations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description of the document content..."
                      value={documentDescription}
                      onChange={(e) => setDocumentDescription(e.target.value)}
                      className="h-32"
                    />
                  </div>
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Upload PDF Document</p>
                  <p className="text-gray-600 mb-4">Drag and drop your file here, or click to browse</p>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose File
                  </Button>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Publish Document
                  </Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manage Content Tab */}
          <TabsContent value="manage" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Documents</CardTitle>
                  <CardDescription>Latest uploaded documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{doc.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary">{doc.category}</Badge>
                            <span className="text-sm text-gray-500">{doc.date}</span>
                          </div>
                        </div>
                        <Badge variant={doc.status === "Published" ? "default" : "secondary"}>
                          {doc.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Documents
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Jobs */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Job Posts</CardTitle>
                  <CardDescription>Latest job postings on the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentJobs.map((job, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{job.title}</h4>
                          <p className="text-sm text-gray-600">{job.company}</p>
                          <span className="text-sm text-gray-500">{job.applications} applications</span>
                        </div>
                        <Badge variant={job.status === "Active" ? "default" : "secondary"}>
                          {job.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Jobs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure platform preferences and administrative options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Document Management</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Auto-publish documents</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Document approval workflow</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>File upload limits</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">User Management</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>User registration</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Admin permissions</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Account verification</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
