"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Lorem ipsum dolor",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
  {
    icon: HeartIcon,
    title: "Lorem ipsum dolor",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
  {
    icon: LockClosedIcon,
    title: "Lorem ipsum dolor",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
  {
    icon: LightBulbIcon,
    title: "Lorem ipsum dolor",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit ligula a sapien porta imperdiet.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Lorem impsum dolor
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque,
          placerat dignissim eget in magna. Nulla facilisi. Mauris luctus volutpat odio,
          ornare rhoncus posuere. Nam felis quam, consectetur.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
