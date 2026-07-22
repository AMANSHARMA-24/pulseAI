import { useEffect, useState } from "react";
import {
  User,
  Users,
  Mail,
  Save,
  Trash2,
  Pencil,
  CheckCircle2,
} from "lucide-react";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    relation: "",
    email: "",
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("emergencyContact");

    if (data) {
      setContact(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "emergencyContact",
      JSON.stringify(contact)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const handleDelete = () => {
    localStorage.removeItem("emergencyContact");

    setContact({
      name: "",
      relation: "",
      email: "",
    });
  };

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-center text-2xl font-bold text-slate-800">
        Save Emergency Contact
      </h2>

      <div className="space-y-5">
        {/* Name */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <User size={18} />
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />
        </div>

        {/* Relation */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Users size={18} />
            Relation
          </label>

          <input
            type="text"
            name="relation"
            value={contact.relation}
            onChange={handleChange}
            placeholder="Father / Mother / Friend"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
            <Mail size={18} />
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />
        </div>

        {saved && (
          <div className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-green-700">
            <CheckCircle2 size={22} />
            Contact saved successfully.
          </div>
        )}

        <div className="flex flex-col gap-4 pt-3 sm:flex-row">
          <button
            onClick={handleSave}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            <Save size={20} />
            Save Contact
          </button>

          <button
            onClick={handleDelete}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <Trash2 size={20} />
            Delete
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default ContactForm;