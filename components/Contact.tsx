import type { NextPage } from "next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import Gmail from "../assets/gmail.webp";
import { Theme } from "../typings";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

interface IFormErrorValues {
  name: boolean;
  email: boolean;
  message: boolean;
}

interface IContactProps {
  theme: Theme;
}

export const Contact: NextPage<IContactProps> = ({ theme }) => {
  const [values, setValues] = useState<IFormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<IFormValues>({ name: "", email: "", message: "" });
  const [errorsFlag, setErrorsFlag] = useState<IFormErrorValues>({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);


  return (
    <>
      <h1 className="contact_heading">Contact Me</h1>
      <div className="contact_email">
        <img src={Gmail.src} alt="" onClick={() => window.open("mailto:wesleyrose06@gmail.com", "_blank")} /> wesleyrose06@gmail.com
      </div>
    </>
  );
};
