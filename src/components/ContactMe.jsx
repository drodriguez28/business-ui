import React, { useState } from 'react';
import { Form, FormControl, TextInput, Box, Textarea, Button } from '@contentful/f36-components';



function ContactMe() {

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

 
  const isFormValid = name.trim() && email.trim() && description.trim();

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className='bg-white p-6 rounded shadow-md max-w-3xl mx-auto mt-10'>
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