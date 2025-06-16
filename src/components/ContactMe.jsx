import React, { useState } from 'react';
import { Form, FormControl, TextInput, Box, Textarea, Button } from '@contentful/f36-components';



function ContactMe() {

  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const isFormValid = name.trim() && email.trim() && description.trim();

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'your.email@gmail.com', // or use a fixed recipient
          subject: `Contact Form: ${selectedOption || 'General Inquiry'}`,
          text: `Name: ${name}\nEmail: ${email}\nService: ${selectedOption}\nDescription: ${description}`
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setSubmitted(false);
          setShowSuccess(false);
          setName('');
          setEmail('');
          setDescription('');
          setSelectedOption('');
        }, 2000);
      } else {
        // Handle error
        setSubmitted(false);
        alert('Failed to send email.');
      }
    } catch (err) {
      console.error('Error sending email:', err); 
      setSubmitted(false);
      alert('Error sending email.');
    }
  };


  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className='bg-white p-6 rounded shadow-md max-w-3xl mx-auto mt-10'>
        {showSuccess && (
          <div className="mb-4 p-4 rounded bg-green-100 text-green-800 border border-green-300 text-center font-semibold transition">
            Your message has been sent successfully!
          </div>
        )}
        <Form onSubmit={submitForm}>
          <FormControl>
            <FormControl.Label isRequired>Name</FormControl.Label>
            <TextInput value={name} onChange={e => setName(e.target.value)} />
            <FormControl.HelpText>
              Please enter your first name
            </FormControl.HelpText>
          </FormControl>

          <FormControl>
            <FormControl.Label isRequired>Email</FormControl.Label>
            <TextInput value={email} onChange={e => setEmail(e.target.value)} />
            <FormControl.HelpText>
              Please enter your email address
            </FormControl.HelpText>
          </FormControl>

          {/* Dropdown starts here */}
          <FormControl>
            <FormControl.Label isRequired>Service Type</FormControl.Label>
            <div className="relative w-48 mx-auto flex justify-center">
              <select
                className="w-full border rounded border-[#CFD9E0] p-2 appearance-none pr-8"
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="Auto Detailing">Auto Detailing</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Landscaping">Landscaping</option>
              </select>
              {/* Carrot icon */}
              <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            {selectedOption && (
              <div className="mt-2 text-blue-700 font-semibold">
                You selected: {selectedOption}
              </div>
            )}
          </FormControl>
          {/* Dropdown ends here */}

          <FormControl>
            <FormControl.Label isRequired>Description</FormControl.Label>
            <Box>
              <Textarea value={description} onChange={e => setDescription(e.target.value)} />
            </Box>
          </FormControl>

          <Button variant="primary" type="submit" isDisabled={submitted || !isFormValid}>
            {submitted ? 'Submitted' : 'Click me to submit'}
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ContactMe