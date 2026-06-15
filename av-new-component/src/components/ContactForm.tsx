import * as React from "react";
import { useState } from "react";

interface ContactFormProps {
  sectionBg: string;
  heading: string;
  description: string;
  firstNamePlaceholder: string;
  lastNamePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  companyPlaceholder: string;
  messagePlaceholder: string;
  submitButtonText: string;
  successMessage: string;
}

export const ContactForm = ({
  sectionBg,
  heading,
  description,
  firstNamePlaceholder,
  lastNamePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  companyPlaceholder,
  messagePlaceholder,
  submitButtonText,
  successMessage,
}: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /* const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);

    try {
       
      const res = await fetch("https://your-backend.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(true); 
    } finally {
      setLoading(false);
    }
  }; */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    });

    setSubmitted(true);

    e.currentTarget.reset();
  };

  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: sectionBg }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left Panel */}
          <div className="bg-black text-white p-12 flex flex-col justify-center">
            <h2 className="text-5xl font-bold leading-tight mb-6">{heading}</h2>
            <p className="text-lg leading-8 text-gray-300">{description}</p>
          </div>

          {/* Right Panel */}
          <div className="p-10 lg:p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" name="firstName" placeholder={firstNamePlaceholder} required className="w-full h-[60px] px-5 rounded-2xl border border-solid border-gray-300 outline-none focus:border-black text-gray-900" />
                  <input type="text" name="lastName" placeholder={lastNamePlaceholder} required className="w-full h-[60px] px-5 rounded-2xl border border-solid border-gray-300 outline-none focus:border-black text-gray-900" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="email" name="email" placeholder={emailPlaceholder} required className="w-full h-[60px] px-5 rounded-2xl border border-solid border-gray-300 outline-none focus:border-black text-gray-900" />
                  <input type="tel" name="phone" placeholder={phonePlaceholder} className="w-full h-[60px] px-5 rounded-2xl border border-solid border-gray-300 outline-none focus:border-black text-gray-900" />
                </div>
                <input type="text" name="company" placeholder={companyPlaceholder} className="w-full h-[60px] px-5 rounded-2xl border border-solid border-gray-300 outline-none focus:border-black text-gray-900" />
                <textarea name="message" placeholder={messagePlaceholder} rows={6} required className="w-full p-5 rounded-2xl border border-solid border-gray-300 outline-none focus:border-black text-gray-900 resize-none" />

                {/* ✅ Show error message if submission fails */}
                {error && (
                  <p role="alert" className="text-red-500 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full h-[64px] rounded-2xl bg-black text-white text-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {loading ? "Sending..." : submitButtonText}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center min-h-[500px]">
                <div className="text-center">
                  <div className="text-6xl mb-6">✓</div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-lg text-gray-600 leading-8">{successMessage}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
