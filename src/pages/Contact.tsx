
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Building } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for support, inquiries, or feedback. We're here to help you navigate labour laws and find employment opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your inquiry in detail..." 
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Easy HR India Headquarters</p>
                    <p className="text-gray-600">
                      Block A, 3rd Floor, Tech Park<br />
                      Sector 62, Noida<br />
                      Uttar Pradesh 201309, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@easyhrindia.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 10:00 AM - 2:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Pricing */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Premium Services
                </CardTitle>
                <CardDescription>
                  Additional services available for organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Document Consultation</span>
                  <span className="font-semibold">₹2,500/hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Legal Compliance Audit</span>
                  <span className="font-semibold">₹15,000/audit</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Custom Training Sessions</span>
                  <span className="font-semibold">₹8,000/session</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Priority Job Posting</span>
                  <span className="font-semibold">₹1,200/month</span>
                </div>
                <hr />
                <p className="text-sm text-gray-600">
                  All prices are in Indian Rupees (INR). Contact us for custom enterprise packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How do I access labour law documents?</h4>
                  <p className="text-gray-600 text-sm">Visit our Labour Laws & Acts section to browse and download verified documents for free.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I post job vacancies for free?</h4>
                  <p className="text-gray-600 text-sm">Yes, basic job postings are free. Premium features like priority listing cost ₹1,200/month.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How do I become a verified administrator?</h4>
                  <p className="text-gray-600 text-sm">Apply through the signup process and our team will verify your credentials within 24-48 hours.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What support do you provide?</h4>
                  <p className="text-gray-600 text-sm">We offer email support, consultation services, and custom training for organizations.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Are the documents legally verified?</h4>
                  <p className="text-gray-600 text-sm">Yes, all documents are uploaded by verified administrators and reviewed for accuracy.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do you offer mobile access?</h4>
                  <p className="text-gray-600 text-sm">Yes, our platform is fully responsive and works on all devices including smartphones and tablets.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
