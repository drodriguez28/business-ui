import React, { useState } from "react";
import {
  Form,
  FormControl,
  TextInput,
  Box,
  Textarea,
  Button,
} from "@contentful/f36-components";
import { DropdownFlowbite } from "../reuse/DropdownFlowbite";

function ContactMe() {
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid =
    name.trim() && email.trim() && selectedOption.trim() && phone.trim();

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowError(false);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `Contact Form: ${selectedOption || "General Inquiry"}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${selectedOption}\nDescription: ${description}`,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setSubmitted(false);
          setShowSuccess(false);
          setName("");
          setEmail("");
          setDescription("");
          setSelectedOption("");
          setPhone("");
        }, 2000);
      } else {
        setShowError(true);
        setSubmitted(false);
      }
    } catch (err) {
      setShowError(true);
      setSubmitted(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto mt-10">
        {showSuccess && (
          <div className="mb-4 p-4 rounded bg-green-100 text-green-800 border border-green-300 text-center font-semibold transition">
            Your message has been sent successfully!
          </div>
        )}
        {showError && (
          <div className="mb-4 p-4 rounded bg-red-100 text-red-800 border border-red-300 text-center font-semibold transition">
            There was an error sending your message. Please send text message to
            404-860-4223
          </div>
        )}
        <Form onSubmit={submitForm}>
          <FormControl>
            <FormControl.Label isRequired>Name</FormControl.Label>
            <TextInput value={name} onChange={(e) => setName(e.target.value)} />
            <FormControl.HelpText>Please enter your name</FormControl.HelpText>
          </FormControl>

          <FormControl>
            <FormControl.Label isRequired>Phone Number</FormControl.Label>
            <TextInput
              value={phone}
              onChange={(e) => {
                // Only allow numbers
                const numericValue = e.target.value.replace(/\D/g, "");
                setPhone(numericValue);
              }}
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
            />
            <FormControl.HelpText>
              Please enter your phone number (numbers only)
            </FormControl.HelpText>
          </FormControl>

          <FormControl>
            <FormControl.Label isRequired>Email</FormControl.Label>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl.HelpText>
              Please enter your email address
            </FormControl.HelpText>
          </FormControl>

          {/* Dropdown starts here */}
          <FormControl>
            <FormControl.Label isRequired>Service Type</FormControl.Label>
            <div className="relative mx-auto flex justify-center">
              <DropdownFlowbite
                label="Select a service"
                options={[
                  "Auto Detailing",
                  "Personal/Business Cleaning",
                  "Landscaping",
                ]}
                value={selectedOption}
                onChange={setSelectedOption}
              />
            </div>
          </FormControl>
          {/* Dropdown ends here */}

          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <Box>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          </FormControl>

          <Button
            variant="primary"
            type="submit"
            isDisabled={submitted || !isFormValid}
          >
            {submitted ? "Submitted" : "Click me to submit"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ContactMe;
