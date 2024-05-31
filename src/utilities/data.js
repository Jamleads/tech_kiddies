import {
  ChildImage,
  ParentImg,
  ContactIcon,
  HandsHeart,
  HeartHandshake,
  LibraryIcon,
  MessageCircleHeart,
  CodeSquare,
  CodeBrowser,
  Skew,
  ArtFusion,
  Film,
} from "../assets";

export const navData = [
  {
    id: 1,
    page: "Our Programs",
    to: "our_programs",
  },
  {
    id: 5,
    page: "Subscriptions",
    to: "subscribe",
  },
  {
    id: 2,
    page: "About Us",
    to: "#about" || "/",
  },
  {
    id: 3,
    page: "Testimonies",
    to: "#testimonies" || "/",
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
export const kidBenefit = [
  {
    id: 1,
    img: LibraryIcon,
    title: "Learning Experience",
    detail:
      "We offer interactive learning experiences designed to engage and inspire the kids.",
  },
  {
    id: 2,
    img: HandsHeart,
    title: "Hands-on Experience",
    detail:
      "We provide hands-on experiences that ignite curiosity and foster creativity.",
  },
  {
    id: 3,
    img: MessageCircleHeart,
    title: "Needs and Interest",
    detail:
      "Our curriculum is tailored to meet the needs and interest of each student.",
  },
  {
    id: 4,
    img: ContactIcon,
    title: "Expert Teachers",
    detail:
      "Our expert teachers are passionate about technology and dedicated to helping students succeed.",
  },
  {
    id: 5,
    img: HeartHandshake,
    title: "Community Support",
    detail: "Kids community programs for our tech kiddies.",
  },
];

export const subscriotionCourse = [
  {
    icon: CodeSquare,
    bgColor: "bg-[#F0FEFACC]",
    title: "Begin Your Adventure",
    detail: "Basic to Advanced Front End",
    subDetails: "Development",
  },
  {
    icon: CodeBrowser,
    bgColor: "bg-[#EDE8FBCC]",
    title: "Embark on a Journey",
    detail: "Basic to Advanced Back End",
    subDetails: "Development",
  },
  {
    icon: Skew,
    bgColor: "bg-[#FBEDCBCC]",
    title: "Ignite Creativity",
    detail: "Basic to Advanced Animation",
    subDetails: "Course",
  },
  {
    icon: ArtFusion,
    bgColor: "bg-[#D9FFC1CC]",
    title: "Art Fusion",
    detail: "Graphics Design for Young",
    subDetails: "Artists",
  },
  {
    icon: Film,
    bgColor: "bg-[#F4D6F6CC]",
    title: "Transform Creations",
    detail: "Basic to Advanced Video",
    subDetails: "Editing",
  },
];

export const pricingData = [
  {
    id: 1,
    title: "Basic - Tier",
    priceN: "10000",
    priceD: "10",
    price: "10,000 / $10",
    discountText: "Ongoing Discount for early subscribers",
    discountPrice: "= 9,000 / $9",
    discountPriceN: "9000",
    discountPriceD: "9",
    addedPcakage: [
      {
        id: 1,
        title: "Access to Class Resources",
      },
      {
        id: 2,
        title: "Engaging Classroom plus Quiz sections",
      },
      {
        id: 3,
        title: "Tech Kiddies Community Slots",
      },
      {
        id: 4,
        title: "Class Presence Record",
      },
      {
        id: 5,
        title: "Certificate upon completion",
      },
      {
        id: 6,
        title: "Slot to partake in Tech Kiddies Exhibition",
      },
    ],
  },
  {
    id: 2,
    title: "Mid - Tier",
    priceN: "20000",
    priceD: "20",
    price: "20,000 / $20",
    discountText: "Ongoing Discount for early subscribers",
    discountPrice: "= 18,000 / $18",
    discountPriceN: "18000",
    discountPriceD: "18",
    addedPcakage: [
      {
        id: 1,
        title: "All Basic Access",
      },
      {
        id: 2,
        title: "Automatic 2 Times Teacher’s Presence",
      },
      {
        id: 3,
        title: "Grading and Report Sheet",
      },
      {
        id: 4,
        title: "Certificate upon completion",
      },
      {
        id: 5,
        title: "Slot to partake in Tech Kiddies Exhibition",
      },
    ],
  },
  {
    id: 3,
    title: "Premium - Tier",
    priceN: "50000",
    priceD: "50",
    price: "N50,000 / $50",
    discountText: "Ongoing Discount for early subscribers",
    discountPrice: "= #48,000/ $48",
    discountPriceN: "48000",
    discountPriceD: "48",
    addedPcakage: [
      {
        id: 1,
        title: "All Basic Access",
      },
      {
        id: 2,
        title: "Automatic Teacher Presence Slots every month",
      },
      {
        id: 3,
        title: "Personalized grading and report sheet",
      },
      {
        id: 4,
        title: "Personalized mentorship",
      },
      {
        id: 5,
        title: "Certificate upon completion",
      },
      {
        id: 6,
        title: "Slot to partake in Tech Kiddies Exhibition",
      },
    ],
  },
];

export const faqData = [
  {
    title:
      "My kids close late at school, is there a way they can learn these skills?",
    content:
      "Classes are self-paced and kids can take the classes at any preferable time. Most kids spend between 1 hour to 2 hours per week to learn.",
  },
  {
    title: "Is the class rate affordable?",
    content:
      "According to research, Tech Kiddies offers the best courses at an affordable rate",
  },
  {
    title: "How do I make payment?",
    content:
      "Kindly fill the form and find attached Tech Kiddies account details",
  },
  {
    title: "What ages are these courses made for?",
    content: "These courses are designed for ages 5 to 16.",
  },
  {
    title: "Can my 3 year old get started with Tech?",
    content:
      "We've got the package for kids between 2 to 5 years. They learn via entertaining videos.",
  },
];

export const footerSubLinks = [
  {
    id: 1,
    title: "Company",
    links: [
      {
        id: 1,
        title: "About Us",
        link: "/",
      },
      {
        id: 2,
        title: "Testimonies",
        link: "/",
      },
      {
        id: 3,
        title: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    id: 2,
    title: "Security",
    links: [
      {
        id: 1,
        title: "Privacy Policy",
        link: "/",
      },
      {
        id: 2,
        title: "Terms & Condition",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    links: [
      {
        id: 1,
        title: "+234 807 690 0753",
        link: "/",
      },
      {
        id: 2,
        title: "techkiddiescontact@gmail.com",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Socials",
    links: [
      {
        id: 1,
        title: "YouTube",
        link: "https://www.youtube.com/@TechKiddies",
      },
      {
        id: 1,
        title: "WhatsApp",
        link: "https://www.whatsapp.com/09060995945",
      },
      {
        id: 2,
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/tech-kiddies/",
      },
      {
        id: 3,
        title: "Twitter",
        link: "https://twitter.com/techkiddies",
      },
      {
        id: 4,
        title: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100075856481853&mibextid=LQQJ4d",
      },
      {
        id: 5,
        title: "Intagram",
        link: "https://www.instagram.com/techkiddies_?igsh=c3BsZmRjb2Z2cWlj&utm_source=qr",
      },
    ],
  },
];
