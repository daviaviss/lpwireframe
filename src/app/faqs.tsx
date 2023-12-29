"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet..",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit ligula a sapien porta imperdiet. Ut vel tellus
            eget ligula placerat dignissim eget in magna. Nulla facilisi.
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
