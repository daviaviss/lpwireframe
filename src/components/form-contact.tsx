import React, { useState, ChangeEvent } from "react";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import axios from "axios";

export function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({
    success: false,
    error: false,
    sending: false,
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const SendEmail = () => {
    setStatus({ ...status, sending: true });
    if (name && email && message) {
      axios
        .post("/api/sendEmail", {
          messageBody: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
          `,
        })
        .then(() => {
          setStatus({ success: true, error: false, sending: false });
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          setStatus({ success: false, error: true, sending: false });
        });
    } else {
      setStatus({ success: false, error: true, sending: false });
    }
  };

  return (
    <section className="py-10 px-4 md:py-28 lg:px-12 flex justify-center">
      <Card color="transparent" shadow={false}>
        <div>
          <Typography variant="h4" color="blue-gray">
            Contact Us
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your name
              </Typography>
              <Input
                size="lg"
                placeholder="Name Surname"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={name}
                onChange={handleNameChange}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="example@email.com"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={email}
                onChange={handleEmailChange}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Message
              </Typography>
              <Textarea
                size="lg"
                placeholder="Write your message here..."
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            {status.error && (
              <Typography color="red" className="mt-2 font-normal">
                Please fill in all fields.
              </Typography>
            )}
            {status.success && (
              <Typography color="green" className="mt-2 font-normal">
                Message sent successfully!
              </Typography>
            )}
            {status.sending ? (
              <div className="flex items-center justify-center mt-4">
                <Spinner color="gray" className="h-6 w-6" />
              </div>
            ) : (
              <Button className="mt-6" fullWidth onClick={SendEmail}>
                Send
              </Button>
            )}
          </form>
        </div>
      </Card>
    </section>
  );
}