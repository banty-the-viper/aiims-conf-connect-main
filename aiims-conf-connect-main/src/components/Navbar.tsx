
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Calendar } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center">
//         <div className="flex items-center justify-between w-full">
//           <Link to="/" className="flex items-center gap-2">
//             <span className="text-xl font-bold text-medical-700">All India Institute of Medical Sciences, Bhubaneswar</span>
//           </Link>

//           {/* Mobile menu button */}
//           <Button 
//             variant="ghost" 
//             className="md:hidden" 
//             onClick={toggleMenu}
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
//               Home
//             </Link>
//             <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
//               About
//             </Link>
//             <Link to="/register" className="text-sm font-medium transition-colors hover:text-primary">
//               Register
//             </Link>
//             <Link to="/login">
//               <Button variant="outline" size="sm">Admin Login</Button>
//             </Link>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile navigation */}
//       <div className={cn(
//         "container md:hidden overflow-hidden transition-all duration-300",
//         isMenuOpen ? "max-h-64" : "max-h-0"
//       )}>
//         <nav className="flex flex-col space-y-4 py-4">
//           <Link 
//             to="/" 
//             className="text-sm font-medium transition-colors hover:text-primary"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </Link>
//           <Link 
//             to="/about" 
//             className="text-sm font-medium transition-colors hover:text-primary"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             About
//           </Link>
//           <Link 
//             to="/register" 
//             className="text-sm font-medium transition-colors hover:text-primary"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Register
//           </Link>
//           <Link 
//             to="/login" 
//             onClick={() => setIsMenuOpen(false)}
//           >
//             <Button variant="outline" size="sm">Admin Login</Button>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#AD9976] text-center py-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-block">
          <span className="text-2xl font-bold text-white">
            All India Institute of Medical Sciences, Bhubaneswar
          </span>
        </Link>
      </div>
    </header>
  );
}

