import logo from "../../public/Screenshot_2025-04-17_141235-removebg-preview (1).png";
import user_icon from "./icons8-user-48.png";
import sketch from "./sketch.svg";
import searchIcon from "./searchIcon.svg";
import microsoft_logo from "./microsoft.svg";
import adobe_logo from "./adobe.svg";
import paypal_logo from "./paypal.svg";
import walmart_logo from "./walmart.svg";
import accenture_logo from "./accenture.svg";
import star from './star.svg'
import cross_icon from './cross_icon.svg'
import downArrow from './down-arrow.png'
import timeleft from './time-left.png'
import book from './book.png'
import udemyIcon from '../../public/udemy.svg'

export const assets = {
  logo,
  user_icon,
  sketch,
  searchIcon,
  microsoft_logo,
  adobe_logo,
  accenture_logo,
  walmart_logo,
  paypal_logo,
  star,
  cross_icon,
  downArrow,
  timeleft,
  book,
  udemyIcon
};

export const courses = [
  {
    _id : "605c72efb3f1c2b1f8e4e1a1",
    title: "Introduction to JavaScript",
    provider: "Udemy",
    rating: 4,
    reviews: 4,
    price: "3999/-",
    imageUrl: "/image.png",
    description:
      "Dive into the fundamentals of JavaScript, the language powering the modern web. This comprehensive course covers variables, data types, functions, DOM manipulation, event handling, and basic programming concepts. Perfect for beginners, you'll learn through hands-on projects including interactive webpages and simple applications. By the end of this course, you'll have the skills to write clean, functional JavaScript code and understand how to implement essential web functionality.",
  },
  {
    _id : "675ac1512100b91a6d9b8b24",
    title: "Advanced Python Programming",
    provider: "Udemy",
    rating: 4,
    reviews: 5,
    price: "6799/-",
    imageUrl: "/image2.jpg",
    description:
      "Take your Python skills to the next level with this advanced programming course. You'll explore complex data structures, object-oriented programming principles, decorators, generators, and advanced library usage. The curriculum covers performance optimization, testing frameworks, and best practices for large-scale applications. Through challenging projects and real-world examples, you'll learn how to write efficient, maintainable Python code suitable for data science, web development, and automation tasks. Previous Python experience is recommended.",
  },
  {
    _id : "605c72efb3f1c2b1f8e4e1ac",
    title: "Cloud Computing Essentials",
    provider: "Udemy",
    rating: 3,
    reviews: 5,
    price: "5599/-",
    imageUrl: "/image3.jpg",
    description:
      "Master the fundamentals of cloud computing with this essential course. You'll learn about infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) models across major cloud providers. Topics include virtual machines, containers, serverless computing, cloud storage solutions, and network configuration. Gain hands-on experience deploying applications, managing resources, and implementing security best practices. By course completion, you'll understand how to architect scalable, cost-effective cloud solutions for diverse business needs.",
  },
  {
    _id : "605c72efb3f1c2b1f8e4e1ae",
    title: "Cybersecurity Basics",
    provider: "Udemy",
    rating: 4,
    reviews: 3,
    price: "5949/-",
    imageUrl: "/image4.jpg",
    description:
      "Build a solid foundation in cybersecurity concepts and practices essential for the digital age. This course covers threat identification, vulnerability assessment, encryption principles, secure coding practices, and common attack vectors. You'll learn about authentication systems, access control, network security, and incident response protocols. Through practical exercises and case studies, you'll develop the skills to protect systems and data from malicious actors. Suitable for IT professionals, developers, and anyone interested in understanding modern security challenges.",
  },
  {
    _id : "605c72efb3f1c2b1f8e4e1aa",
    title: "Data Science and Machine Learning",
    provider: "Udemy",
    rating: 0,
    reviews: 0,
    price: "6299/-",
    imageUrl: "/image5.jpg",
    description:
      "Explore the exciting intersection of data science and machine learning in this comprehensive course. You'll learn data collection, cleaning, analysis, and visualization techniques using powerful libraries like Pandas, NumPy, and Matplotlib. The course progresses through statistical analysis, supervised and unsupervised learning algorithms, feature engineering, and model evaluation. Through hands-on projects analyzing real datasets, you'll build predictive models and gain insights into complex data. Perfect for aspiring data scientists and analysts looking to harness the power of machine learning.",
  },
  {
    _id : "605c72efb3f1c2b1f8e4e1a7",
    title: "Web Development Bootcamp",
    provider: "Udemy",
    rating: 5,
    reviews: 1,
    price: "7499/-",
    imageUrl: "/image6.jpg",
    description:
      "Become a full-stack web developer in this intensive bootcamp focusing on modern JavaScript frameworks, particularly React. You'll master frontend development with HTML5, CSS3, JavaScript, and React while building responsive, interactive user interfaces. The course covers state management, component architecture, routing, and API integration. On the backend, you'll learn Node.js, Express, and database integration. Through three complete projects, you'll develop real-world applications from conception to deployment, preparing you for professional web development roles.",
  },
  {
    _id : "605c72efb3f1c2b1f8e4e1ad",
    title: "Data Science with Python",
    provider: "Udemy",
    rating: 5,
    reviews: 1,
    price: "7199/-",
    imageUrl: "/image7.jpg",
    description:
      "Harness Python's powerful ecosystem for data science in this comprehensive course. You'll explore data manipulation with Pandas, numerical computing with NumPy, and visualization with Matplotlib and Seaborn. The curriculum covers statistical analysis, hypothesis testing, and machine learning implementations using Scikit-learn. You'll work through real-world data problems, from data cleaning to predictive modeling and result interpretation. The course emphasizes practical skills with Jupyter notebooks and reproducible workflows, preparing you for data analysis roles across industries.",
  },
  {
    _id : "6791e8b4387b89bb6b4e1820",
    title: "Introduction to Cybersecurity",
    provider: "Udemy",
    rating: 4,
    reviews: 1,
    price: "5099/-",
    imageUrl: "/image8.jpg",
    description:
      "Begin your cybersecurity journey with this foundational course covering essential security concepts and practices. You'll learn about threat landscapes, common vulnerabilities, security frameworks, and risk assessment methodologies. The course explores authentication mechanisms, encryption basics, network security, and social engineering defense. Through hands-on labs and real-world case studies, you'll develop practical skills to protect digital assets and understand cybersecurity's role in modern organizations. Perfect for beginners looking to enter the cybersecurity field or professionals wanting to incorporate security principles into their work.",
  },
];

export const testimonials = [
  {
    name :"Donald Jackman",
    profileImage: "/profile_img_1.png", 
    role: "SWE 1 @ Amazon",
    feedback: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name : "Richard  Nelson",
    profileImage: "/profile_img_2.png",
    role: "SWE 2 @ Samsung",
    feedback: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name : "James Washington",
    profileImage: "/profile_img_3.png",
    role: "SWE 2 @ Google",
    feedback: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  }
];

export const eachCourseDetails = [
  {
    _id: "675ac1512100b91a6d9b8b24",
    heading: "Master Advanced Python Skills",
    title: "Advanced Python Programming",
    description: "This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.",
    courseHighlights: [
      "Master advanced data structures",
      "Implement object-oriented programming concepts",
      "Work with libraries and frameworks"
    ],
    courseStructure: [
      {
        moduleTitle: "Advanced Data Structures",
        lectures: 2,
        duration: "26 hours, 10 minutes"
      },
      {
        moduleTitle: "Object-Oriented Programming",
        lectures: 2,
        duration: "30 hours, 50 minutes"
      }
    ],
    duration: "57 hours",
    lessons: 4,
    rating: 4,
    students: 10,
    price: "6799/-",
    originalPrice: "7999/-",
    discount: "15% off",
    instructor: "GreatStack",
    imageUrl: "/image2.jpg",
    extras: [
      "Lifetime access with free updates",
      "Step-by-step, hands-on project guidance",
      "Downloadable resources and source code",
      "Quizzes to test your knowledge",
      "Certificate of completion"
    ]
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a1",
    heading: "Kickstart Your JavaScript Journey",
    title: "Introduction to JavaScript",
    description: "Get started with JavaScript and learn the core concepts of scripting for the web. Ideal for beginners who want to understand how dynamic websites work.",
    courseHighlights: [
      "Understand variables, functions, and control flow",
      "Manipulate the DOM",
      "Use JavaScript to make web pages interactive"
    ],
    courseStructure: [
      {
        moduleTitle: "JavaScript Basics",
        lectures: 5,
        duration: "10 hours"
      },
      {
        moduleTitle: "DOM Manipulation",
        lectures: 3,
        duration: "6 hours, 30 minutes"
      }
    ],
    duration: "16 hours, 30 minutes",
    lessons: 8,
    rating: 4.2,
    students: 120,
    price: "4999/-",
    originalPrice: "6999/-",
    discount: "28% off",
    instructor: "WebStart Academy",
    imageUrl: "/image.png",
    extras: [
      "Downloadable exercises",
      "Quizzes after each module",
      "Project-based learning",
      "Certificate of completion"
    ]
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ac",
    heading: "Master Cloud Computing",
    title: "Cloud Computing Essentials",
    description: "Learn the fundamentals of cloud computing, including key services, deployment models, and architecture. Perfect for beginners looking to enter the world of cloud.",
    courseHighlights: [
      "Understand SaaS, PaaS, and IaaS models",
      "Learn about popular platforms like AWS, Azure, and GCP",
      "Explore real-world cloud use cases"
    ],
    courseStructure: [
      {
        moduleTitle: "Cloud Basics",
        lectures: 4,
        duration: "8 hours"
      },
      {
        moduleTitle: "AWS Introduction",
        lectures: 3,
        duration: "5 hours, 20 minutes"
      }
    ],
    duration: "13 hours, 20 minutes",
    lessons: 7,
    rating: 4.5,
    students: 200,
    price: "5999/-",
    originalPrice: "7999/-",
    discount: "25% off",
    instructor: "CloudXperts",
    imageUrl: '/image3.jpg',
    extras: [
      "Cloud platform walkthroughs",
      "Access to case studies",
      "Final assessment project",
      "Certificate of completion"
    ]
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ae",
    heading: "Start Your Cybersecurity Career",
    title: "Cybersecurity Basics",
    description: "Explore the principles of cybersecurity, including threat types, network security, and ethical hacking. Ideal for beginners in IT or tech enthusiasts.",
    courseHighlights: [
      "Identify different types of cyber threats",
      "Understand network security protocols",
      "Learn about firewalls and endpoint protection"
    ],
    courseStructure: [
      {
        moduleTitle: "Security Foundations",
        lectures: 3,
        duration: "7 hours, 45 minutes"
      },
      {
        moduleTitle: "Threat Management",
        lectures: 2,
        duration: "4 hours"
      }
    ],
    duration: "11 hours, 45 minutes",
    lessons: 5,
    rating: 4.3,
    students: 180,
    price: "5499/-",
    originalPrice: "7499/-",
    discount: "26% off",
    instructor: "CyberSecure Academy",
    imageUrl: '/image4.jpg',
    extras: [
      "Case studies on real attacks",
      "Quizzes & assignments",
      "Downloadable resources",
      "Certificate of completion"
    ]
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1aa",
    heading: "Unlock the Power of Data Science & ML",
    title: "Data Science and Machine Learning",
    description: "Dive into data science and machine learning with this hands-on course. Learn how to analyze data and build models using Python libraries.",
    courseHighlights: [
      "Work with NumPy, Pandas, and Scikit-learn",
      "Build ML models for classification and regression",
      "Evaluate and improve model performance"
    ],
    courseStructure: [
      {
        moduleTitle: "Data Science Fundamentals",
        lectures: 4,
        duration: "9 hours"
      },
      {
        moduleTitle: "Machine Learning Models",
        lectures: 5,
        duration: "12 hours"
      }
    ],
    duration: "21 hours",
    lessons: 9,
    rating: 4.6,
    students: 250,
    price: "6999/-",
    originalPrice: "8999/-",
    discount: "22% off",
    instructor: "DataPro Institute",
    imageUrl: '/image5.jpg',
    extras: [
      "Mini projects included",
      "Datasets for practice",
      "Quizzes to test concepts",
      "Certificate of completion"
    ]
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1a7",
    heading: "Become a Full-Stack Web Developer",
    title: "Web Development Bootcamp",
    description: "Master full-stack web development from scratch. This bootcamp covers HTML, CSS, JavaScript, and backend development using Node.js and databases.",
    courseHighlights: [
      "Build real-world websites and web apps",
      "Understand front-end and back-end development",
      "Deploy apps to the web"
    ],
    courseStructure: [
      {
        moduleTitle: "Front-End Foundations",
        lectures: 6,
        duration: "14 hours"
      },
      {
        moduleTitle: "Back-End with Node.js",
        lectures: 5,
        duration: "13 hours, 30 minutes"
      }
    ],
    duration: "27 hours, 30 minutes",
    lessons: 11,
    rating: 4.7,
    students: 300,
    price: "7999/-",
    originalPrice: "9999/-",
    discount: "20% off",
    instructor: "FullStack School",
    imageUrl: '/image6.jpg',
    extras: [
      "Capstone project",
      "Git & deployment walkthrough",
      "Developer portfolio guide",
      "Certificate of completion"
    ]
  },
  {
    _id: "605c72efb3f1c2b1f8e4e1ad",
    heading: "Analyze Data Like a Pro with Python",
    title: "Data Science with Python",
    description: "Learn how to use Python for data science. From importing datasets to building predictive models, this course is ideal for Python enthusiasts.",
    courseHighlights: [
      "Handle real-world data sets",
      "Perform exploratory data analysis",
      "Visualize data using Matplotlib and Seaborn"
    ],
    courseStructure: [
      {
        moduleTitle: "Data Handling",
        lectures: 3,
        duration: "6 hours"
      },
      {
        moduleTitle: "Visualization & Modeling",
        lectures: 4,
        duration: "8 hours"
      }
    ],
    duration: "14 hours",
    lessons: 7,
    rating: 4.4,
    students: 150,
    price: "5899/-",
    originalPrice: "7499/-",
    discount: "21% off",
    instructor: "DataCraft Academy",
    imageUrl: '/image7.jpg',
    extras: [
      "Practice notebooks",
      "Model evaluation guides",
      "Downloadable datasets",
      "Certificate of completion"
    ]
  },
  {
    _id: "6791e8b4387b89bb6b4e1820",
    heading: "Begin Your Cybersecurity Journey",
    title: "Introduction to Cybersecurity",
    description: "Start your journey into cybersecurity. Learn the key areas of protecting systems, data, and users in today’s digital landscape.",
    courseHighlights: [
      "Understand basic cyber hygiene",
      "Learn to recognize phishing and malware",
      "Explore cybersecurity career paths"
    ],
    courseStructure: [
      {
        moduleTitle: "Cyber Threats Overview",
        lectures: 2,
        duration: "4 hours"
      },
      {
        moduleTitle: "Computer Defense Techniques",
        lectures: 3,
        duration: "5 hours"
      }
    ],
    duration: "9 hours",
    lessons: 5,
    rating: 4.1,
    students: 90,
    price: "3999/-",
    originalPrice: "5999/-",
    discount: "33% off",
    instructor: "SecureStart Academy",
    imageUrl: '/image8.jpg',
    extras: [
      "Downloadable glossary",
      "Interactive quizzes",
      "Starter guide to career tracks",
      "Certificate of completion"
    ]
  }
];
