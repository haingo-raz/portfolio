export const ProjectList = [
  {
    id: "python-attendance",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/attendance.png",
    name: "AWS Python Attendance System",
    githubLink: "https://github.com/haingo-raz/AWS-face-recognition-system",
    demoLink: "/",
    languages: ["Python", "AWS", "SCSS", "HTML", "JavaScript"],
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
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/web-scrapping.png",
    name: "Java Web Scrapping",
    githubLink: "https://github.com/haingo-raz/Java-web-scraping",
    demoLink: "/",
    languages: ["Java", "JavaScript", "Node.js", "MySQL", "CSS", "HTML"],
    description: "This is a web scraping project I have created using Java, JavaScript, Node.js and MySQL as part of my undergraduate project at Middlesex University Mauritius.",
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      {
        order: 2,
        type: "p",
        text: "This project is a web scraping system that scrapes data from multiple e-ommerce websites using Java, process and store data in a MySQL database, and display the data on a website using JavaScript and Node.js."
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
          "Java JSoup for web scraping.",
          "Java JUnit for testing.",
          "Java Threads for parallel processing.",
          "Java Maven to manage dependencies.",
          "Java Spring to connect the beans (classes).",
          "Java Hibernate to map between Java classes and MySQL tables.",
          "HTML, CSS and JavaScript for the front end.",
          "Node.js and Express for the back end to handle requests",
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
          "Users can search for a laptop.",
          "Users can click on a laptop to see more details.",
          "The system can scrap laptops data from multiple e-commerce websites.",
          "The system can store the scrapped data in a MySQL database.",
          "The system can compare the prices of laptops from different websites.",
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
          "I learned more about Java's OOP concept.",
          "I learned about web scrapping and robots.txt.",
          "I learned how to use Maven and Spring together.",
          "I learned how to use Hibernate to populate data into a table (database)."
        ]
      },
    ]
  },
  {
    id: "java-jewellery-shop",
    isDisplayed: false,
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
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/react-visualization.png",
    name: "AWS Visualization Dashboard",
    githubLink: "https://github.com/haingo-raz/React-AWS-Visualisation-Website",
    demoLink: "/",
    languages: ["AWS", "React.js", "Node.js", "Websocket", "TypeScript", "Python", "SCSS", "HTML"],
    description: "This is a real-time visualization dashboard website that I have created using React.js and AWS in my final year at Middlesex University Mauritius.",
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      {
        order: 2,
        type: "p",
        text: "This project displays visualizations of historical data, predictions, and sentiment analysis data for five NBA teams: Lakers, Celtics, Warriors, Rockets, and Bulls. The historical data has been collected using the NEWS API (articles) and the balldontlie API (past NBA scores). AWS has been used for making predictions (SageMaker) and performing sentiment analysis (Comprehend). The score predictions were made using the historical scores, while the sentiment analysis was made based on the tone of the articles about each team."
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
          "React.js as the frontend framework.",
          "SCSS to style the frontend.",
          "Recharts as a React chart library",
          "TypeScript for type safety.",
          "Python to create utils.",
          "News API to download articles for sentiment analysis.",
          "balldontlie API to download past NBA team scores.",
          "Websocket to connect the frontend to the backend.",
          "Amazon DynamoDB as a NoSQL database.",
          "Amazon SageMaker for machine learning predictions.",
          "Amazon Comprehend for sentiment analysis operations.",
          "Amazon S3 as a storage service.",
          "Amazon Lambda to connect events together.",
          "Amazon Cloudwatch to monitor other AWS services.",
          "API Gateway to assign a connection ID to website visitors."
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
          "Users can choose a team for which data needs to be displayed.",
          "The system can display the past NBA scores of each team.",
          "The system can display the score predictions of each team.",
          "The system can display the sentiment analysis result of each team from news articles."
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
          "I learned how to use Amazon DynamoDB, SageMaker, Comprehend, S3, Lambda, Cloudwatch and API Gateway.",
          "I learned about basic machine learning concepts such as training and test.",
          "I learned how to use interfaces with TypeScipt."
        ]
      },
    ]
  },
  {
    id: "portfolio",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/portfolio.png",
    name: "Portfolio",
    githubLink: "/",
    demoLink: "https://haingo-raz.github.io/portfolio/",
    languages: ["TypeScript", "React.js", "MUI", "SCSS"],
  },
  {
    id: "geroba",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/geroba.png",
    name: "GEROBA",
    githubLink: "/",
    demoLink: "https://geroba.fr",
    languages: ["React.js", "SCSS"],
  },
  {
    id: "gerobamaster",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/gerobamaster.png",
    name: "GEROBA Master",
    githubLink: "/",
    demoLink: "/",
    languages: ["React.js", "MUI", "Redux", "PostgreSQL", "Git (Fork)"],
    description: "GEROBA Master is the main product of the Groupe GDS company based in France. I worked on this project with a team of developers in Mauritius, France, and Martinique.",
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
          "React.js framework to build user interfaces.", 
          "MUI for prebuilt components.", 
          "Redux for state management.",
          "PostgreSQL for the database.",
          "Git for version control.",
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
          "I learned how to use git through the Fork software.",
          "I have improved my skills using React.js and SCSS.",
          "I learned about the MUI library.",
          "I learned about the Open Layers library for dynamic maps.",
          "I learned about Redux for state management.",
          "I learned how to write basic queries in PostgreSQL.",
          "I learned how to communicate with supervisors face-to-face and in virtual settings.",
          "I learned how to work in a team.",
          "I learned how to manage my time and meet deadlines.",
          "I learned how to ask for help when needed.",
        ]
      },
    ]
  },
  {
    id: "react-quiz-app",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/quiz-app.png",
    name: "React Quiz App",
    githubLink: "https://github.com/haingo-raz/React-quiz-app",
    demoLink: "https://simple-math-app.netlify.app/",
    languages: ["React.js", "SCSS"],
  },
  {
    id: "javascript-memory-game",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/memory-game.png",
    name: "JS Memory Game",
    githubLink: "https://github.com/haingo-raz/Javascript-memory-game",
    demoLink: "/",
    languages: ["PHP", "JavaScript", "CSS", "HTML"],
    description: "This is a memory game I have created using JavaScript, PHP, HTML and CSS in my second year at Middlesex University.",
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      {
        order: 2,
        type: "p",
        text: "This project is a javascript-based memory card game whereby users can create an account / login (details stored in session storage) or play without an account. Logged in users' high scores are saved in the browser's local storage and displayed."
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
          "HTML/PHP for the front end.",
          "JavaScript for interactivity.",
          "CSS for styling.",
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
          "Users can create an account.",
          "Users can log in with their account details.",
          "Users can play the memory game.",
          "High scores are saved in the browser's local storage.",
          "High scores are displayed on the front end."
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
          "I learned basic interactivity with JavaScript.",
          "I learned about browser session and local storage.",
        ]
      },
    ]
  },
  {
    id: "data-scientist-salary-prediction",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/data-scientist-prediction.png",
    name: "Data Scientist Salary Prediction",
    githubLink: "https://github.com/haingo-raz/Data-Scientist-Salary-Prediction",
    demoLink: "/",
    languages: ["Python", "Flask", "Scikit-learn", "AutoGluon", "Pandas", "Matplotlib"],
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      {
        order: 2,
        type: "p",
        text: "This project aims to create a machine learning model that predicts a data science practitioner salary based on their job title, experience level, employment type, remote ratio, company size and company location."
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
          "HTML and CSS for the front end.",
          "Python Flask for the backend.",
          "Scikit-learn for machine learning.",
          "AutoGluon for automated machine learning.",
          "Pandas for data manipulation.",
          "Matplotlib for data visualization.",
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
          "Users can log in to the system.",
          "Users can input their job title, experience level, employment type, remote ratio, company size and company location.",
          "The system can predict the salary of the user based on the input.",
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
          "I learned how to deploy a Flask application on Azure App Service.",
          "I improved my data preprocessing skills.",
          "I explored AutoGluon for automated machine learning.",
        ]
      },
    ]
  },
  {
    id: "Node.js-blog",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/nodejs-blog.png",
    name: "Node.js Blog",
    githubLink: "https://github.com/haingo-raz/Node.js-Blog",
    demoLink: "/",
    languages: ["JavaScript", "Node.js", "Express", "MySQL", "CSS", "HTML"],
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      {
        order: 2,
        type: "p",
        text: "This project is a blog system that allows users to create and read blog posts. It is a simple blog application created using Node.js, Express, and MySQL."
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
          "HTML and CSS for the front end.",
          "JavaScript for interactivity.",
          "Node.js for the backend.",
          "Express for the server.",
          "MySQL for the database.",
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
          "Users can register or log in to the system.",
          "User can log out of the system.",
          "Users can create a blog post.",
          "Users can read a blog post.",
          "Users can research a blog post using keywords.",
          "Users can update their username or email.",
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
          "I learned about server and client communication.",
          "I learned how to use MySQL with Node.js.",
          "I learned how to use Express to create a server.",
        ]
      },
    ]
  },
  {
    id: "MyJourney",
    isDisplayed: true,
    imgPath: "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/myjourney.png",
    name: "MyJourney workout management app",
    githubLink: "https://github.com/haingo-raz/MyJourney",
    demoLink: "/",
    languages: ["React.js", "Node.js", "Express", "MySQL", "SCSS"],
    content: [
      { 
        order: 1,
        type: "title",
        text: "Detailed project description:"
      },
      {
        order: 2,
        type: "p",
        text: "This project is a workout management app built with React.js, Node.js, Express and MySQL."
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
          "React.js and SCSS.",
          "Node.js for the backend.",
          "Express for the server.",
          "MySQL for the database.",
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
          "Users can register or log in to the system.",
          "Users can log out of the system.",
          "Users can delete their account.",
          "Users can create a workout program.",
          "Users can update a workout instance.",
          "Users can delete a workout instance.",
          "Users can update their email and password.",
          "Users can access their past workout programs.",
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
          "I practiced request management between React.js and Node.js/Express.",
        ]
      },
    ]
  },
  {
    id: "empty",
    isDisplayed: false,
    imgPath: "",
    name: "",
    githubLink: "/",
    demoLink: "/",
    languages: ["AWS", "React.js", "SCSS", "TypeScript", "Python"],
    description: ""
  }
];

export const imgPlaceholder = "https://raw.githubusercontent.com/haingo-raz/portfolio/main/public/imgs/thumbnail/placeholder.png";
