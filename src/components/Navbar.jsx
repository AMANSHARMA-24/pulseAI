import { useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "First Aid", path: "/first-aid" },
  { name: "PDF Assistant", path: "/pdf-assistant" },
  { name: "Emergency Contact", path: "/emergency-contacts" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <button
          onClick={() => handleNavigate("/")}
          className="flex items-center gap-2 text-xl font-bold text-teal-600"
        >
          <HeartPulse size={28}/>
          Pulse AI
        </button>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link)=>(
            <button
              key={link.path}
              onClick={()=>handleNavigate(link.path)}
              className={`font-medium transition ${
                location.pathname === link.path
                ? "text-teal-600"
                : "text-slate-600 hover:text-teal-600"
              }`}
            >
              {link.name}
            </button>
          ))}

        </div>


        {/* Hamburger Button */}
        <button
          onClick={()=>setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {
            mobileOpen
            ? <X size={28}/>
            : <Menu size={28}/>
          }
        </button>

      </nav>


      {/* Mobile Menu */}
      {
        mobileOpen && (

          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">

            <div className="flex flex-col gap-4">

            {
              links.map((link)=>(

                <button
                  key={link.path}
                  onClick={()=>handleNavigate(link.path)}
                  className={`text-left font-medium ${
                    location.pathname === link.path
                    ? "text-teal-600"
                    : "text-slate-600"
                  }`}
                >
                  {link.name}
                </button>

              ))
            }

            </div>

          </div>

        )
      }


    </header>
  );
}

export default Navbar;