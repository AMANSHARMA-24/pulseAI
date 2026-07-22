import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import { sendEmergencyEmail } from "../services/emailService";
import { AlertTriangle } from "lucide-react";

function EmergencyContacts() {

  const [sending, setSending] = useState(false);


  const handleEmergency = () => {

    const contact = JSON.parse(
      localStorage.getItem("emergencyContact")
    );


    if (!contact) {
      alert("Please save emergency contact first");
      return;
    }


    setSending(true);


    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;


        const location =
          `https://www.google.com/maps?q=${latitude},${longitude}`;

        try {

          const emergencyMessage =
            "I need immediate help. This is an emergency alert generated from Pulse AI.";

          await sendEmergencyEmail(
            contact,
            emergencyMessage,
            location
          );

          alert("Emergency email sent successfully");

        }
        catch (error) {

          console.log(error);
          alert("Failed to send emergency email");

        }
        finally {

          setSending(false);

        }

      },


      () => {

        alert("Location permission denied");
        setSending(false);

      }

    );

  };


  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />


      <main className="mx-auto max-w-7xl px-5 py-12">


        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-slate-800">
            Emergency Contact
          </h1>

          <p className="mt-4 text-slate-500">
            Save a trusted contact and send emergency alerts instantly.
          </p>

        </div>



        {/* Form + Emergency Card */}

        <div className="grid gap-8 lg:grid-cols-2 items-start">


          {/* Contact Form */}

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <ContactForm />
          </div>



          {/* Emergency Alert */}

          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 shadow-sm">


            <div className="text-center">


              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">

                <AlertTriangle
                  size={32}
                  className="text-red-600"
                />

              </div>



              <h2 className="mt-5 text-2xl font-bold text-red-700">
                Emergency Alert
              </h2>


              <p className="mt-3 text-sm leading-6 text-red-600">
                Send your live location with an emergency message
                to your saved contact.
              </p>



              <button
                onClick={handleEmergency}
                disabled={sending}
                className="mt-8 w-full rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
              >

                {
                  sending
                    ? "Sending Alert..."
                    : "Send Emergency Email"
                }

              </button>


            </div>


          </div>


        </div>


      </main>


      <Footer />

    </div>
  );
}

export default EmergencyContacts;