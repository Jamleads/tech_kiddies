import { ParentImg } from "../assets";

export const navData = [
  {
    id: 1,
    page: "Our Programs",
    to: "programs",
  },
  {
    id: 2,
    page: "About Us",
    to: "about",
  },
  {
    id: 3,
    page: "Testimonies",
    to: "testimonies",
  },
  {
    id: 4,
    page: "Contact Us",
    to: "contact",
  },
];

export const testimonies = [
  {
    id: 1,
    isParent: true,
    img: { ParentImg },
    name: "Aliya Imam",
    testMessage:
      "Thank you Tech Kiddies for helping my child know so much about technology.",
  },
  {
    id: 2,
    isParent: true,
    img: { ParentImg },
    name: "Mum Amira",
    testMessage:
      "Thank you Tech Kiddies for helping my child know so much about technology.",
  },
  {
    id: 3,
    isParent: false,
    img: { ParentImg },
    name: "Kelven Kings",
    testMessage:
      "Thank you Tech Kiddies for helping my child know so much about technology.",
  },
  {
    id: 4,
    isParent: true,
    img: { ParentImg },
    name: "Adetunji Jacob",
    testMessage:
      "Thank you Tech Kiddies for helping my child know so much about technology.",
  },
  {
    id: 5,
    isParent: false,
    img: { ParentImg },
    name: "Kelven Aliyu",
    testMessage:
      "Thank you Tech Kiddies for helping my child know so much about technology.",
  },
];
