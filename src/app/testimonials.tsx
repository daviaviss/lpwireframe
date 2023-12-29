"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet. Ut vel tellus eget ligula.",
    client: "Davi Augusto",
    title: "CTO @ INSPIRATION DEV.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet. Ut vel tellus eget ligula.",
    client: "Edivaldo Junior",
    title: "CEO @ INSPIRATION DEV.",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet. Ut vel tellus eget ligula.",
    client: "Robson Zimmermman",
    title: "SALES @ INSPIRATION DEV.",
    img: "/image/avatar3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Lorem ipsum dolor.
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit
            Ligula a sapien porta imperdiet. Ut vel tellus eget ligula placerat
            rnare rhoncus posuere. Nam felis quam tellus.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
