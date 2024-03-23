import { ChildImage, ParentImg } from "../assets";

export const navData = [
  {
    id: 1,
    page: "Our Programs",
    to: "#programs",
  },
  {
    id: 2,
    page: "About Us",
    to: "#about",
  },
  {
    id: 3,
    page: "Testimonies",
    to: "#testimonies",
  },
  {
    id: 4,
    page: "Contact Us",
    to: "#contact",
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
    img: { ChildImage },
    name: "Khadijat",
    testMessage: "I love how my teacher teaches me coding",
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
    img: { ChildImage },
    name: "Kelven Aliyu",
    testMessage:
      "Thank you Tech Kiddies for helping me know so much about technology.",
  },
];

export const moveAnimation = [
  {
    id: 1,
    text: "Kid",
    style: "w-[200px] bg-thePink",
  },
  {
    id: 2,
    text: "Tech",
    style: "w-[200px] bg-theGreen",
  },
  {
    id: 3,
    text: "Code",
    style: "w-[240px] bg-thePink",
  },
  {
    id: 4,
    text: "Script",
    style: "w-[300px] bg-theYellow",
  },
  {
    id: 5,
    text: "Fun",
    style: "w-[200px] bg-baseOrange",
  },
  {
    id: 6,
    text: "Game",
    style: "w-[150px] bg-theGreen",
  },
  {
    id: 7,
    text: "Future",
    style: "w-[300px] bg-theYellow",
  },
];
