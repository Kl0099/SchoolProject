import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
});

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    setLoading(true);
    const taostId = toast.loading("please wait a minute...");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/inquiry`,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      );
      // const res = await axios.get(
      //   `${import.meta.env.VITE_BACKEND_URL}/api/get`
      // );
      console.log(res.data);
      if (res.data.success) {
        toast.success("message sent successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast.dismiss(taostId);
    }
    // console.log(data);
    // Handle form submission, e.g., send data to backend
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            {...register("name")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            {...register("email")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            {...register("message")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {loading === true ? "please wait a minute" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
