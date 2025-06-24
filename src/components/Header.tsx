
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Briefcase, Users, Menu, LogOut, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const loggedIn = localStorage.getItem("userLoggedIn") === "true";
    const name = localStorage.getItem("userName") || localStorage.getItem("userEmail") || "User";
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("rememberUser");
    
    setIsLoggedIn(false);
    setUserName("");
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Easy HR India</span>
            <Badge variant="secondary" className="text-xs">Portal</Badge>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/documents" className="text-gray-600 hover:text-blue-600 transition-colors">
              Labour Laws & Acts
            </Link>
            <Link to="/jobs" className="text-gray-600 hover:text-blue-600 transition-colors">
              Jobs
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-blue-600 transition-colors">
              Admin
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{userName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
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
                  Labour Laws & Acts
                </Link>
                <Link to="/jobs" className="text-lg font-medium">
                  Jobs
                </Link>
                <Link to="/admin" className="text-lg font-medium">
                  Admin
                </Link>
                <Link to="/about" className="text-lg font-medium">
                  About Us
                </Link>
                <Link to="/contact" className="text-lg font-medium">
                  Contact
                </Link>
                <hr className="my-4" />
                {isLoggedIn ? (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">Logged in as: {userName}</p>
                    <Button onClick={handleLogout} variant="outline" className="justify-start w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button asChild variant="ghost" className="justify-start">
                      <Link to="/login">Sign In</Link>
                    </Button>
                    <Button asChild className="justify-start">
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
