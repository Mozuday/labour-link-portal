import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Download, FileText, Filter } from "lucide-react";
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

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  const documents = [
    {
      id: 1,
      title: "Labour Standards Act 2024",
      description: "Comprehensive guidelines on working hours, overtime, and employee rights including vacation entitlements and statutory holidays.",
      category: "Employment Standards",
      uploadDate: "2024-03-15",
      fileSize: "2.4 MB",
      downloads: 1250,
      fileUrl: "/documents/labour-standards-act-2024.pdf"
    },
    {
      id: 2,
      title: "Workplace Safety Regulations",
      description: "Updated safety protocols, employer responsibilities, and workplace hazard prevention measures.",
      category: "Safety",
      uploadDate: "2024-03-10",
      fileSize: "1.8 MB",
      downloads: 890,
      fileUrl: "/documents/workplace-safety-regulations.pdf"
    },
    {
      id: 3,
      title: "Minimum Wage Guidelines",
      description: "Current minimum wage rates, calculation methods, and exemptions across different sectors.",
      category: "Wages",
      uploadDate: "2024-03-05",
      fileSize: "1.2 MB",
      downloads: 1450,
      fileUrl: "/documents/minimum-wage-guidelines.pdf"
    },
    {
      id: 4,
      title: "Employment Equity Act",
      description: "Guidelines for fair employment practices, anti-discrimination policies, and equal opportunity requirements.",
      category: "Equity",
      uploadDate: "2024-02-28",
      fileSize: "3.1 MB",
      downloads: 670,
      fileUrl: "/documents/employment-equity-act.pdf"
    },
    {
      id: 5,
      title: "Workers' Compensation Guidelines",
      description: "Comprehensive guide to workplace injury compensation, claims process, and employer obligations.",
      category: "Compensation",
      uploadDate: "2024-02-20",
      fileSize: "2.7 MB",
      downloads: 950,
      fileUrl: "/documents/workers-compensation-guidelines.pdf"
    },
    {
      id: 6,
      title: "Collective Bargaining Framework",
      description: "Legal framework for union negotiations, collective agreements, and dispute resolution procedures.",
      category: "Labour Relations",
      uploadDate: "2024-02-15",
      fileSize: "2.9 MB",
      downloads: 720,
      fileUrl: "/documents/collective-bargaining-framework.pdf"
    }
  ];

  const categories = [
    "all",
    "Employment Standards",
    "Safety",
    "Wages",
    "Equity",
    "Compensation",
    "Labour Relations"
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (documentItem: typeof documents[0]) => {
    // In a real application, this would trigger an actual file download
    // For now, we'll simulate the download and show a toast message
    console.log(`Downloading: ${documentItem.title}`);
    
    // Create a temporary link element for download simulation
    const link = document.createElement('a');
    link.href = documentItem.fileUrl;
    link.download = `${documentItem.title}.pdf`;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Attempt to trigger download (will fail in demo but shows intent)
    try {
      link.click();
      toast({
        title: "Download Started",
        description: `Downloading ${documentItem.title}`,
      });
    } catch (error) {
      toast({
        title: "Download Simulated",
        description: `In a real application, ${documentItem.title} would be downloaded`,
      });
    } finally {
      document.body.removeChild(link);
    }
  };

  const handleView = (documentItem: typeof documents[0]) => {
    toast({
      title: "Opening Document",
      description: `Viewing ${documentItem.title}`,
    });
    console.log(`Viewing: ${documentItem.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Labour Laws & Acts</h1>
          <p className="text-gray-600">Access comprehensive Indian labour laws, acts, and regulations</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDocuments.length} of {documents.length} documents
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{doc.category}</Badge>
                  <span className="text-sm text-gray-500">{doc.downloads} downloads</span>
                </div>
                <CardTitle className="text-lg leading-tight">{doc.title}</CardTitle>
                <CardDescription className="text-sm">{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Uploaded: {doc.uploadDate}</span>
                    <span>Size: {doc.fileSize}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      size="sm"
                      onClick={() => handleView(doc)}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownload(doc)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Documents;
