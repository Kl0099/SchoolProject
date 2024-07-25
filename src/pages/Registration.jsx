import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";

const schema = z.object({
  studentName: z.string().nonempty("Student Name is required"),
  mobileNumber: z
    .string()
    .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number"),
  email: z.string().email("Invalid email address"),
  classField: z.enum(
    [
      "Class I",
      "Class II",
      "Class III",
      "Class IV",
      "Class V",
      "Class VI",
      "Class VII",
      "Class VIII",
      "Class IX",
      "Class X",
      "Class XI",
      "Class XII",
    ],
    "Select a valid class"
  ),
  city: z.string().nonempty("City is required"),
  pincode: z.string().length(6, "Pincode must be 6 digits"),
  lastClassPercentage: z.string().length(2, "valid percentage must be"),
  address: z.string().nonempty("Address is required"),
});

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  /*        */
  const onSubmit = async (data) => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    setLoading(true);
    const taostId = toast.loading("please wait a minute...");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/registration`,
        {
          name: data.studentName,
          email: data.email,
          number: data.mobileNumber,
          userClass: data.classField,
          city: data.city,
          pincode: data.pincode,
          lastClassPercentage: data.lastClassPercentage,
          address: data.address,
        }
      );
      // const res = await axios.get(
      //   `${import.meta.env.VITE_BACKEND_URL}/api/get`
      // );
      console.log(data);
      if (res.data.success) {
        toast.success("User successfully registered");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    } finally {
      setLoading(false);
      toast.dismiss(taostId);
    }
    // console.log(data);
    // Handle form submission, e.g., send data to backend
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Register</h2>
        <img
          src="/logo.png"
          alt="School Logo"
          className="w-16 h-16"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Student Name</label>
        <input
          {...register("studentName")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.studentName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.studentName.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Mobile Number</label>
        <input
          {...register("mobileNumber")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.mobileNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.mobileNumber.message}
          </p>
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

      <div className="flex gap-2">
        <div className="mb-4 w-1/2">
          <label className="block text-gray-700">Class</label>
          <select
            {...register("classField")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            {[
              "Class I",
              "Class II",
              "Class III",
              "Class IV",
              "Class V",
              "Class VI",
              "Class VII",
              "Class VIII",
              "Class IX",
              "Class X",
              "Class XI",
              "Class XII",
            ].map((className) => (
              <option
                key={className}
                value={className}
              >
                {className}
              </option>
            ))}
          </select>
          {errors.classField && (
            <p className="text-red-500 text-sm mt-1">
              {errors.classField.message}
            </p>
          )}
        </div>

        <div className="mb-4 w-1/2">
          <label className="block text-gray-700">City</label>
          <input
            {...register("city")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="md:flex gap-2">
        <div className="mb-4 md:w-1/2">
          <label className="block text-gray-700">Pincode</label>
          <input
            {...register("pincode")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pincode.message}
            </p>
          )}
        </div>

        <div className="mb-4 md:w-1/2">
          <label className="block text-gray-700">Last Class Percentage</label>
          <input
            type="number"
            {...register("lastClassPercentage")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.lastClassPercentage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastClassPercentage.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <textarea
          {...register("address")}
          className="w-full px-3 h-[150px] py-2 border border-gray-300 rounded-md"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {loading ? "Please wait a moment..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
