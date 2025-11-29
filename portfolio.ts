import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Jonathan',
  title: "Hi all, I'm Jonathan",
  description:
    "Proficient Software Engineer with a robust educational background and a fervent enthusiasm for cutting-edge technologies. Backed by hands-on experience in Software Engineering and app development across diverse domains, I am now focused on pursuing a role in Mobile Application Development or as a Front-End Software Engineer. My expertise extends to Project Management Platforms and Hybrid Driven Tools/Technologies. Proficient in Object-Oriented Programming, Data Structures, Algorithms, and Design principles",
  resumeLink:
    'https://drive.google.com/file/d/17iYyMAaDCaCzfrXqerj_2f3NR6r0QmDN/view?usp=sharing',
  googleformLink:
    'https://forms.gle/nXN8p9YQ5upG1bK29'
};

export const openSource = {
  githubUserName: 'itsmejonathancg98',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://itsmejonathancg98.github.io/developer-portfolio/',
  linkedin: 'https://www.linkedin.com/in/jonathan-gurusinghe-360b05144/',
  github: 'https://github.com/itsmejonathancg98/',
  instagram: 'https://www.instagram.com/jonathancg.ig/',
  facebook: 'https://www.facebook.com/jcg98sl',
  twitter: 'https://twitter.com/JonathanChanuka',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY ENOUGH TO THINK TRYING OUT TECH STACKS AND INNOVATIVE THINGS TO CHANGE THE WORLD TO A BETTER TOMORROW',
  data: [
    {
  title: 'Mathematics Tutoring (Grades 1–5)',
  lottieAnimationFile: './lottie/skills/mathsformula.js', // Path of Lottie Animation JSON File
  skills: [
    emoji('⚡ Helping students build strong foundational maths skills'),
    emoji('⚡ Making learning simple, fun and confidence-boosting'),
    emoji('⚡ Focus on numeracy, problem solving, and real-world understanding'),
    emoji('⚡ Personalised lessons based on the student’s strengths and needs')
  ],
  softwareSkills: [
    {
      skillName: 'Primary Mathematics Education',
      iconifyTag: 'mdi:calculator-variant'
    },
    {
      skillName: 'Interactive Learning Tools',
      iconifyTag: 'mdi:lightbulb-on-outline'
    },
    {
      skillName: 'Student Progress Tracking',
      iconifyTag: 'mdi:chart-line'
    }
  ]
},    
{
      title: 'Front-End Development',
      lottieAnimationFile: './lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building Native IOS App with Localised Frameworks'
        ),
        emoji('⚡ Building Hybrid Apps in React Native'),
        emoji('⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'),
      ],
      softwareSkills: [
        {
          skillName: 'Swift',
          iconifyTag: 'logos:swift',
        },
        {
          skillName: 'Swift-UI',
          iconifyTag: 'mdi:language-swift',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'React Native',
          iconifyTag: 'tabler:brand-react-native',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'devicon:typescript',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'Babel',
          iconifyTag: 'logos:babel',
        },

      ],
    },
    {
      title: 'Data Science and Cloud Infra-Architecture',
      lottieAnimationFile: './lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on cloud platoforms and data science components'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Spacy',
          iconifyTag: 'simple-icons:spacy',
        },
        {
          skillName: 'Matplotlib',
          iconifyTag: 'logos:matplotlib',
        },
        {
          skillName: 'Seaborn',
          iconifyTag: 'logos:seaborn',
        },
        {
          skillName: 'Tensorflow',
          iconifyTag: 'logos:tensorflow',
        },
        {
          skillName: 'Keras',
          iconifyTag: 'devicon:keras',
        },
        {
          skillName: 'GCP',
          iconifyTag: 'skill-icons:gcp-light',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },
    {
      title: 'Skills',
      lottieAnimationFile: './lottie/skills/business-salesman.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Design Tools'),
        emoji(
          '⚡ Development Tools'
        ),
        emoji(
          '⚡ Mobile App Development'
        ),
        emoji(
          '⚡ Methodologies'
        ),
        emoji(
          '⚡ Software Proficiency'
        ),
        emoji(
          '⚡ Soft Skills - Client Interaction, Communication, Team and Individual Environment Adaptability, Time Management, Problem Solving and Adaptability'
        ),
        emoji(
          '⚡ Database'
        ),

      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Adobe XD',
          iconifyTag: 'simple-icons:adobexd',
        },
        {
          skillName: 'Figma',
          iconifyTag: 'skill-icons:figma-light',
        },
        {
          skillName: 'VS Code',
          iconifyTag: 'skill-icons:vscode-dark',
        },
        {
          skillName: 'XCode',
          iconifyTag: 'logos:xcode',
        },
        {
          skillName: 'Atom',
          iconifyTag: 'logos:atom-icon',
        },
        {
          skillName: 'NodeJS',
          iconifyTag: 'logos:nodejs',
        },
        {
          skillName: 'Postman',
          iconifyTag: 'logos:postman',
        },
        {
          skillName: 'Git',
          iconifyTag: 'devicon:git',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Anaconda',
          iconifyTag: 'devicon:anaconda',
        },
        {
          skillName: 'Terminal',
          iconifyTag: 'material-symbols:terminal',
        },
        {
          skillName: 'SQL',
          iconifyTag: 'logos:mysql',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '40',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Informatics Institute of Technology, Sri Lanka affilicated with the University of Westminster, United Kingdom',
    subHeader: 'Bachelor of Engineering in Software Engineering with Industrial Placement (Hons)',
    duration: 'September 2017 - July 2023',
    desc: 'Conducted a Research on IntelliStore: A Retail Artificial intelligence-based system Analyzing Products and Brands through NLP-based Search and Social Media Analysis by integrating Logistic Regression and Convolutional Neural Network Algorithms.',
    grade: 'Second Lower Class (Hons)',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Trainee Software Engineer',
    company: 'HighFlyer Global (Pvt) Ltd',
    companyLogo: './img/icons/common/highflyer.png',
    date: 'Apr 2023 – Current',
    desc: 'Currently, I am deeply adhere to industry best practices and follow rigorous Software Development Life Cycle (SDLC) standards. My responsibilities encompass implementing on ERP systems development, leveraging Frappe, ERPNext, React Js Frameworks, and harnessing Python scripting to enhance low-code capabilities. This role perfectly merges my technicalprowess with my passion for process optimization and strategic innovation.',
  },
  {
    role: 'IT Specialist',
    company: 'Education Services Network (Pvt) Ltd',
    companyLogo: './img/icons/common/esn.jpeg',
    date: 'August 2022 – August 2023',
    desc: 'Carried out technical support, network adminstration, website development and maintenance and training and collaboration.',
  },
  {
    role: 'Business Development Lead and Freelancer',
    company: 'Inforwaves (Pvt) Ltd',
    companyLogo: './img/icons/common/inforwaves.jpeg',
    date: 'Sept 2021 - April 2023',
    desc: 'Carried out under training in identifying strategies and client networking to analyse competitive solutions for the company as well as as a freelancer have done web development and video editing.',
  },
  {
    role: 'Trainee Software Engineer',
    company: 'TechSys (Pvt) Ltd',
    companyLogo: '',
    date: 'Sept 2019 - Sept 2020',
    desc: 'Carried out ERP, PMIS and HR management system design and development on integrations and strategic planning for new projects and technical mappings.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'FYP - IntelliStore',
    desc: 'IntelliStore: A Retail Artificial intelligence-based system Analyzing Products and Brands through NLP-based Search and Social Media Analysis by integrating Logistic Regression and Convolutional Neural Network Algorithms.',
    github: 'https://github.com/itsmejonathancg98/IntelliStore',
  },
  {
    name: 'Image_Classification_ResNet',
    desc: 'Image Classification App using Resnet Library',
    github: 'https://github.com/itsmejonathancg98/Image_Classification_ResNet',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Janith Rajapaksha',
    feedback:
      'Awesome work done by Chanuka, very creative!',
  },
  {
    name: 'Melantha Perera',
    feedback:
      'A potential developer to solve problems on mobile application development',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Jonathan Gurusinghe',
  description:
    'A passionate Front-End Developer',
  author: 'Jonathan Gurusinghe',
  // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  // url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Jonathan',
    'Jonathan Gurusinghe',
    'itsmejonathancg98',
    'Portfolio',
    'Jonathan Portfolio ',
    'Jonathan Gurusinghe Portfolio',
  ],
};
