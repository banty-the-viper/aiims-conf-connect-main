
import { Link } from "react-router-dom";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#AD9976] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">AIIMS Conference</span>
            </div>
            <p className="mt-3 text-gray-300">
              Join us for the premier medical conference of {currentYear} - bringing together healthcare professionals from across the country.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/psi-members" className="text-gray-300 hover:text-white transition-colors">PSI Members</Link>
              </li>
              <li>
                <Link to="/organizing-committee" className="text-gray-300 hover:text-white transition-colors">Organizing Committee</Link>
              </li>
              {/* <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">Register</Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">physicon@aiimsbhubaneswar.edu.in</span>
              </div>
              {/* <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">+91 123 456 7890</span>
              </div> */}
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">AIIMS Bhubaneswar. Sijua, Patrapada, Bhubaneswar-751019</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {currentYear} AIIMS Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
