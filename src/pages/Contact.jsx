import { Form } from 'react-bootstrap';
import { Header } from '../components';
import { Main, ListItem, Button } from '../elements/';
import {Helmet} from "react-helmet";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xwkgdkgv");

  if (state.succeeded) {
    return (
        <>
            <Header title="Hurray! Message on it's way!" />
            <Main>
                <h2>Thank you for your message!</h2>
                <p>I will get back to you as soon as possible.</p>
            </Main>
        </>
    );
  }

  return (
    <>
      <Helmet>
        <title>TA - Contact</title>
        <meta name="description" content="Send me a message. Not to be used as issue form." />
        <meta name="keywords" content="contact, message, Timo Anjala" />
      </Helmet>

      <Header title="Contact Me" />
      <Main>
           
        <h2>Send a Message</h2>
        <p id='form_info'>This form is NOT to be used submitting issue reports (e.g. LBO or LBOreact).</p>

        <ListItem>   
            <Form className='container d-flex flex-column gap-3' onSubmit={handleSubmit}>

                { /* Email field */ }
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        id="email"
                        type="email" 
                        placeholder="Enter email" 
                        required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </Form.Group>

                { /* Name field */}
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        id="name"
                        type="text" 
                        placeholder="Enter your name"
                        required
                    />
                    <ValidationError
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </Form.Group>

                { /* Message field */}
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter your message"
                        id="message"
                        name="message" 
                        required
                    />
                    <ValidationError
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </Form.Group>

                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </Form>
        </ListItem>
      </Main>
    </>
    
  );
}

export default Contact;