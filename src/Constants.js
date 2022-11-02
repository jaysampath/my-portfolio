import EMPLOYEE from "./Assets/Projects/employeeapp.png";
import FOODORDER from "./Assets/Projects/foodorder.png";
import TEXTPRO from "./Assets/Projects/textpro.png";
import FASTMART from "./Assets/Projects/fastmart.png";
import WEATHER from "./Assets/Projects/weather.png";
import TWITTER from "./Assets/Projects/twitter.png";

export const PROJECTS = [
  {
    image: FASTMART,
    name: "Fastmart",
    technologyUsed: "Spring Boot, ReactJS, Git, AWS and Heroku",
    description:
      "Fastmart is an full stack application which is used for shopping vareity of products. Features a login/Signup protal, cart, ordering items, OTP verification while signing up and resetting password. ",
    url: "https://fastmart.vercel.app/",
  },
  {
    image: FOODORDER,
    name: "Food Order App",
    technologyUsed: "ReactJS, Firebase, HTML and CSS",
    description:
      "Food Order App is a full stack application built using ReactJS which is used for ordering food items",
    url: "https://food-order-app-theta.vercel.app",
  },
  {
    image: WEATHER,
    name: "Weather Scraper",
    technologyUsed: "PHP, HTML and CSS",
    description:
      "My weather scraper is a responsive web application which is used to know the weather condition of a city built using php.",
    url: "https://my-weather-scraper.herokuapp.com/",
  },
  {
    image: TWITTER,
    name: "Twitter Clone",
    technologyUsed: "PHP, MySQL, Javascript, HTML and CSS",
    description:
      "Cloned the basic functionality of the twitter using php and MySQL. The application implemented the functionalities like Posting and Searching tweets, following and unfollowing, public profiles and search profiles, public tweets etc.",
    url: "https://github.com/jaysampath/Twitter-clone-using-php",
  },
  {
    image: TEXTPRO,
    name: "Textpro App",
    technologyUsed: "Java, Data Structures and XML",
    description:
      "Textpro app is a text editor which features Flesh Index, Generate Markov Text, Edit Distance, Spelling Suggestion and Load Text.  ",
    url: "https://github.com/jaysampath/TextProApp",
  },
  {
    image: EMPLOYEE,
    name: "Employee App",
    technologyUsed: "Spring Boot. ReactJs, HTML/CSS and Vercel",
    description:
      "Employee app is a full stack application where administrators can securly store and maintain employee's details",
    url: "https://employee-app-on-vercel.vercel.app",
  },
];

export const SKILLS = [
  { name: "Java", initialRating: 4 },
  { name: "Spring Boot", initialRating: 3 },
  { name: "Hibernate", initialRating: 3 },
  { name: "Spring Security", initialRating: 2 },
  { name: "ReactJS", initialRating: 3 },
  { name: "Javascript", initialRating: 2 },
  { name: "Data Structures", initialRating: 2 },
  { name: "HTML & CSS", initialRating: 3 },
  { name: "Rest API", initialRating: 3 },
  { name: "MongoDB", initialRating: 4 },
  { name: "MySQL", initialRating: 3 },
  { name: "Docker", initialRating: 3 },
  { name: "Kubernetes", initialRating: 2 },
  { name: "AWS", initialRating: 2 },
  { name: "Git/Github", initialRating: 4 },
  { name: "Junit/Mockito", initialRating: 3 },
];

export const TOOLS = [
  "Eclipse",
  "IntelliJ",
  "Visual Studio Code",
  "Git",
  "Vercel",
  "Heroku",
  "Postman",
];
