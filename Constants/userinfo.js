//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Adan Salman", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'adansalman0987@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        //phone: '1234567890', //Phone number is optional, if you dont want it, consider leaving it blank .
      //  countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/adan-s', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/adan-salman/', icon: faLinkedinIn },
       // { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Adan.",
        subtitle: "Software Engineer, crafting efficient web solutions to enhance productivity and user experience."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Frontend", // eg.frontend, backend, devops etc
            skills: ["NextJS", "ReactJS", "Tailwind CSS","Dart"] //eg. react, html, python etc.
        },
        {
            category: "Backend",
            skills: ["NestJS", "ExpressJS"]
        },
        {
            category: "Databases",
            skills: ["MySQL", "Oracle", "MS-SQL","MongoDB","Firebase"]
        },
        {
            category: "Programming Languages",
            skills: ["C++/C", "Javascript", "Python"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "I thrive on tackling complex problems and am dedicated to continuous learning and improvement. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects. Join me on this journey to enhance productivity and simplify task management.",
        resume: "https://drive.google.com/file/d/1DPEagJtmaEpaeIgl77Sm2PY6ZEzoOM22/view?usp=drive_link" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Sept 2020 - July 2024', //timespan
                title: 'BSCS', //eg. BTech in Compuster Engineering
                organization: 'Fast-Nuces', //eg. VJTI, Mumbai
                description: 'Secured 3.61 CGPA.' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'Sept 2018 - Jun 2020',
                title: 'Intermediate',
                organization: 'Punjab Group of Colleges',
                description: 'Secured 954/1100 marks.'
            },
            // {
            //     time: 'May - Oct 2020',
            //     title: 'Degree name',
            //     organization: 'School Name',
            //     description: 'Lorem ipsum dolor sit amet consectetur'
            // },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Code District', //company name eg.Microsoft
                companylogo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.designrush.com%2Fagency%2Fprofile%2Fcode-district&psig=AOvVaw1bGqg-8jcFx49wnsg_AH3K&ust=1722926191603000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPie366e3YcDFQAAAAAdAAAAABAl?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Associate Software Eng.', //post you held eg.Senior SDE
                time: 'July 2024 - Present', //timespan
                description: 'At Code District, I develop and maintain high-quality software solutions. Collaborating with cross-functional teams, I contribute to both front-end and back-end development, ensuring robust code delivery.' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'WeePro-Coders',
                companylogo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpk.linkedin.com%2Fcompany%2Fweeprocoder&psig=AOvVaw0wPEb4MPvAVRVHz4j2mPkX&ust=1722926331999000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMDK0PGe3YcDFQAAAAAdAAAAABAE?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Tutor',
                time: 'Jun 2023 - July 2024',
                description: 'At Wee Pro-Coders, I teach Scratch programming to 8-12 years old, fostering creativity and logic through interactive lessons. I lead projects, encourage teamwork, and give feedback, shaping young minds in coding.'
            },
            {
                company: 'FastDev',
                companylogo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F18496131-WeTeck-Logo-Design&psig=AOvVaw0AY96D9M7QA_iSKk9QC6ww&ust=1722926445473000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNis3Kef3YcDFQAAAAAdAAAAABAE?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'MERN Intern',
                time: 'Jul 2023 - Sept 2023',
                description: 'At FASTDEV, I interned as a MERN stack developer, building web applications. I designed responsive interfaces with React.js, integrated them via Express.js and Node.js, and managed databases with MongoDB.'
            },
            {
                company: 'WeTeck',
                companylogo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F18496131-WeTeck-Logo-Design&psig=AOvVaw0AY96D9M7QA_iSKk9QC6ww&ust=1722926445473000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNis3Kef3YcDFQAAAAAdAAAAABAE?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'NextJS Intern',
                time: 'Jul 2022 - Sept 2022',
                description: 'During my internship at WeTeck, I collaborated with the team to optimize workflow and solve problems. I also assisted with projects using my strong analytical skills. Additionally, I received training in Web Development.'
            },
           
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
   // workHomePage: 'Work',
   // workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    //blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
   // landingCTA: 'My work',
//    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}