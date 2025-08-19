"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SectionTitle from "../common/SectionTitle";
import { Home, Layout, Module } from "@/utils/getDictionaries";
import { useDictionary } from "@/hooks/useDictionaries";
interface FormData {
  name: string;
  phone: string;
  tiktokId: string;
  message: string;
}

interface InputFieldProps {
  type: string;
  placeholder: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ type, placeholder, required = true, name, value, onChange }: InputFieldProps) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="text-dark3   text-4.5 placeholder-dark3 w-full rounded-full border-none bg-white px-8 py-4 text-base leading-[1] outline-none md:px-10 lg:py-5.5"
  />
);

// New Form Component
const RegisterForm = ({ fields, buttonText }: { fields: Home["registerForm"]["fields"]; buttonText: string }) => {
  const { registerSuccess, registerError } = useDictionary(Module.LAYOUT) as Layout;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    tiktokId: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^\d]/g, "").slice(0, 10);
      const isValidPhone = /^0\d{0,9}$/.test(numericValue);

      if (isValidPhone || numericValue === "") {
        setFormData(prev => ({
          ...prev,
          [name]: numericValue,
        }));
      }
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("? có vào đây không?");
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(registerSuccess);
        // Reset form
        setFormData({
          name: "",
          phone: "",
          tiktokId: "",
          message: "",
        });
      } else {
        toast.error(result.error || registerError);
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(registerError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-[15px]"
      method="post"
      onSubmit={handleSubmit}
    >
      <InputField
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={fields[0].placeholder}
      />
      <InputField
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder={fields[1].placeholder}
      />
      <InputField
        type="text"
        name="tiktokId"
        value={formData.tiktokId}
        onChange={handleChange}
        placeholder={fields[2].placeholder}
      />
      <InputField
        type="text"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={fields[3].placeholder}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-primary1   text-4 md:text-5 mt-[31px] h-[63px] cursor-pointer rounded-full border border-none bg-white px-8 py-3 text-center leading-[1] font-black uppercase sm:py-5 md:px-12 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Đang gửi...' : buttonText}
      </button>
    </form>
  );
};

export default function Register({ registerForm }: { registerForm: Home["registerForm"] }) {
  return (
    <div className="section">
      <div className="flex flex-col gap-10 lg:gap-[121px]">
        {/* Header Section */}
        <SectionTitle
          title={registerForm.title}
          isHighlight={true}
        />

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:gap-17">
          {/* Left Section - Text Content */}
          <div className="">
            <p className="  text-2xl leading-[1.3] font-extrabold text-white uppercase sm:text-3xl lg:text-4xl">
              {registerForm.slogan}
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="">
            <RegisterForm
              fields={registerForm.fields}
              buttonText={registerForm.submit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
