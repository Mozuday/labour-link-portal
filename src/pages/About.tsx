
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Easy HR India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to simplifying human resources management and labour law compliance across India. 
            Our platform serves as a comprehensive bridge between complex labour regulations and practical HR solutions, 
            empowering both employers and employees with easy access to essential information. Founded with the vision 
            of making Indian labour laws more accessible, we provide a centralized hub where businesses can stay compliant, 
            job seekers can find opportunities, and everyone can understand their rights and responsibilities under Indian 
            employment legislation. Through our user-friendly interface and verified document repository, we're transforming 
            how HR professionals, legal experts, and workers navigate the intricate landscape of Indian labour standards.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>
                Making complex labour laws and HR processes accessible to everyone through simplified, user-friendly resources.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Compliance</CardTitle>
              <CardDescription>
                Ensuring businesses stay compliant with Indian labour laws while protecting employee rights and interests.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Excellence</CardTitle>
              <CardDescription>
                Delivering high-quality, verified information and services to build trust and reliability in HR management.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            To empower Indian businesses and workers with comprehensive, accessible, and up-to-date labour law information 
            and HR solutions, fostering a fair and informed employment ecosystem across the nation.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
