"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Dialog from "./dialog";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  services: z.array(z.string()).nonempty("Please select at least one service"),
  projectDetails: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [dialog, setDialog] = useState<{
    type: "success" | "error";
    message: string;
    show: boolean;
  }>({
    type: "success",
    message: "",
    show: false,
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form Data:", data);

      // Show success dialog
      setDialog({
        type: "success",
        message:
          "Thank you for your interest in our services! One of our team members will reach out to you soon 😊",
        show: true,
      });
    } catch {
      setDialog({
        type: "error",
        message: "Something went wrong. Please try again.",
        show: true,
      });
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8 border border-slate-100 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h3 className="font-kumbh text-gray-700 text-xl font-semibold mb-4">
              Your Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-kumbh text-gray-700 block font-medium">
                  Name*
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="font-kumbh text-gray-700  block font-medium">
                  Email*
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="font-kumbh text-gray-700 block font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="font-kumbh text-gray-700 block font-medium">
                  Company
                </label>
                <input
                  type="text"
                  {...register("company")}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-kumbh text-gray-700 text-xl font-semibold mb-4">
              Which services are you interested in?
            </h3>
            <div className="space-y-2">
              {[
                "Fibreglass tank installation",
                "Steel tank installation",
                "Purchase of plates and other materials",
                "Maintenance and repairs of tanks",
                "Customised fabrication",
              ].map((service) => (
                <div
                  key={service}
                  className="font-kumbh text-gray-700 flex items-center"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services")}
                    className="mr-2"
                  />
                  <label>{service}</label>
                </div>
              ))}
              {errors.services && (
                <p className="text-red-500 text-sm">
                  {errors.services.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="font-kumbh text-gray-700 block font-medium">
              Tell us about your project in brief
            </label>
            <textarea
              {...register("projectDetails")}
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* <button
            type="submit"
            className="bg-[#0884c6] font-kumbh font-semibold cursor-pointer text-white px-6 py-2"
          >
            Submit
          </button> */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#0884c6] font-kumbh font-semibold cursor-pointer text-white px-6 py-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <Dialog
        type={dialog.type}
        message={dialog.message}
        show={dialog.show}
        onClose={() => setDialog({ ...dialog, show: false })}
      />
    </>
  );
}
