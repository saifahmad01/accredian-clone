"use client";

import { useState } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  teamSize: "",
  message: "",
};

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to submit. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mb-4 text-5xl">✅</div>
        <h3 className="mb-2 text-xl font-bold text-emerald-800">
          Thank You!
        </h3>
        <p className="text-emerald-700">
          We&apos;ve received your request. Our team will reach out within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-emerald-600 underline hover:text-emerald-800 cursor-pointer"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name *
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Work Email *
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-company" className="mb-1.5 block text-sm font-medium text-slate-700">
            Company *
          </label>
          <input
            id="lead-company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-teamSize" className="mb-1.5 block text-sm font-medium text-slate-700">
          Team Size
        </label>
        <select
          id="lead-teamSize"
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select team size</option>
          <option value="10-50">10 – 50 employees</option>
          <option value="51-200">51 – 200 employees</option>
          <option value="201-500">201 – 500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="lead-message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Tell us about your training needs
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="We're looking to upskill our engineering team in..."
          className={`${inputStyles} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        variant="primary"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </span>
        ) : (
          "Request a Demo"
        )}
      </Button>

      <p className="text-center text-xs text-slate-400">
        By submitting, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
}
