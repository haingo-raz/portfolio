export const ProjectList = [
  {
    id: "geroba",
    isDisplayed: true,
    imgPath: "./imgs/thumbnail/geroba.png",
    name: "GEROBA",
    githubLink: "",
    demoLink: "https://geroba.fr",
    languages: ["ReactJS", "Scss"],
  },
  {
    id: "gerobamaster",
    isDisplayed: true,
    imgPath: "./imgs/thumbnail/gerobamaster.png",
    name: "GEROBA Master",
    githubLink: "/",
    demoLink: "/",
    languages: ["ReactJS", "MUI", "Redux"],
    description: "GEROBA Master is the main product of the Groupe GDS company based in France. I was working on this project with a team of developers in Mauritius, France and Martinique.",
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      { 
        order: 2,
        type: "p",
        text: "GEROBA is a web solution that also has a mobile version that works with or without internet connectivity. It is a tool for managing assets, roads, and  buildings. It allows to model data collected in the field on a computer. It helps a company understand its assets, assess them, detect anomalies, and solve them. GEROBA also enables intervention scheduling, planning, and progress tracking, as well as managing stocks."
      },
      { 
        order: 3,
        type: "title",
        text: "Technologies used:"
      },
      { 
        order: 4,
        type: "ul",
        text: [
          "ReactJS framework to build user interfaces.", 
          "MUI for prebuilt components.", 
          "Redux for state management."
        ]
      },
      { 
        order: 5,
        type: "title",
        text: "Learning outcomes:"
      },
      { 
        order: 6,
        type: "ul",
        text: [
          "I learned how to use git.",
          "I have improved my skills using ReactJS and Scss.",
          "I learned about the MUI library.",
          "I learned about the Open Layers library for dynamic maps.",
          "I learned about Redux for state management.",
          "I learned how to communicate with supervisors face-to-face and virtually.",
          "I learned how to work in a team.",
          "I learned how to manage my time and meet deadlines.",
          "I learned how to ask for help when needed.",
        ]
      },
    ]
  },
  {
    id: "python-attendance",
    isDisplayed: true,
    imgPath: "./imgs/thumbnail/attendance.png",
    name: "AWS Python Attendance System",
    githubLink: "https://github.com/haingo-raz/AWS-face-recognition-system",
    demoLink: "/",
    languages: ["Python", "AWS", "Scss", "JavaScript"],
    description: "This is a face recognition system I have created using Python Flask and AWS as part of my undergraduate project at Middlesex University Mauritius.",
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      {
        order: 2,
        type: "p",
        text: "This project is a face recognition based attendance system that works with stored/recorded video. It is mostly recommended in a class setting, but it can be used in other places such as an office or a social event. Upon a video upload, the attendance operation will be triggered and the attendance log will be displayed on the front end of the website. Students can be registered and deleted from the system."
      },
      { 
        order: 3,
        type: "title",
        text: "Technologies used:"
      },
      { 
        order: 4,
        type: "ul",
        text: [
          "Flask micro web framework for web applications.", 
          "Sccs to style the web components.", 
          "JavaScript for added interactivity (forms and tables).",
          "AWS Rekognition for face recognition.",
          "AWS DynamoDB for database storage.",
          "AWS Lambda for serverless computing.",
          "AWS CloudWatch for monitoring and logging.",
          "AWS S3 for video storage.",
        ]
      },
      { 
        order: 5,
        type: "title",
        text: "Functionalities:"
      },
      { 
        order: 6,
        type: "ul",
        text: [
          "The admin can log in to the system.",
          "The admin can register a student.",
          "The admin can remove a student from the system.",
          "The admin can upload a video to perform attendance.",
          "The system can display a list of students.",
          "The system can display an attendance log"
        ]
      },
      { 
        order: 7,
        type: "title",
        text: "Learning outcomes:"
      },
      { 
        order: 8,
        type: "ul",
        text: [
          "I learned how to set up and use Python Flask.",
          "I learned how to connect AWS to my Flask application.",
          "I learned how to use AWS Rekognition for face recognition in a video.",
          "I learned how to upload a video to AWS S3 from my Flask application.",
          "I learned how to display items from AWS DynamoDB on the front end.",
          "I learned how to look for other alternatives when one potential solution is not working.",
          "I learned how to manage my time properly."
        ]
      },
    ]
  },
  {
    id: "java-web-scraping",
    isDisplayed: true,
    imgPath: "/",
    name: "Java Web Scrapping",
    githubLink: "https://github.com/haingo-raz/Java-web-scraping",
    demoLink: "/",
    languages: ["Java", "JavaScript", "NodeJS", "SQL", "Css"],
    description: "This is a web scraping project I have created using Java, JavaScript, NodeJS and SQL as part of my undergraduate project at Middlesex University Mauritius."
  },
  {
    id: "java-jewellery-shop",
    isDisplayed: true,
    imgPath: "/",
    name: "JavaFX Jewellery Shop System",
    githubLink: "https://github.com/haingo-raz/JavaJewelleryShop",
    demoLink: "/",
    languages: ["Java", "SceneBuilder"],
    description: "This is a JavaFX project that I have started in my first year at Middlesex University Mauritius. I have updated and improved it over time."
  },
  {
    id: "react-visualization",
    isDisplayed: true,
    imgPath: "./imgs/thumbnail/react-visualization.png",
    name: "AWS Visualization Dashboard",
    githubLink: "https://github.com/haingo-raz/React-AWS-Visualisation-Website",
    demoLink: "/",
    languages: ["AWS", "ReactJS", "Scss", "TypeScript", "Python"],
    description: "This is a real-time visualization dashboard website that I have created using ReactJS and AWS in my final year at Middlesex University Mauritius."
  },
  {
    id: "empty",
    isDisplayed: false,
    imgPath: "",
    name: "",
    githubLink: "/",
    demoLink: "/",
    languages: ["AWS", "ReactJS", "Scss", "TypeScript", "Python"],
    description: ""
  }
];

export const imgPlaceholder = "/imgs/thumbnail/placeholder.png";
