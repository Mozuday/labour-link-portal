
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Briefcase, Users, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LabourHub</span>
            <Badge variant="secondary" className="text-xs">Portal</Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/documents" className="text-gray-600 hover:text-blue-600 transition-colors">
              Documents
            </Link>
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600 transition-colors">
              Jobs
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-blue-600 transition-colors">
              Admin
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/documents" className="text-lg font-medium">
                  Documents
                </Link>
                <Link to="/jobs" className="text-lg font-medium">
                  Jobs
                </Link>
                <Link to="/admin" className="text-lg font-medium">
                  Admin
                </Link>
                <hr className="my-4" />
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild className="justify-start">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
