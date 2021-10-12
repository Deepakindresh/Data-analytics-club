import abt from "../../images/aboutus.svg" 
import nw from "../../images/news.svg" 
import res from "../../images/research.svg"
import blg from "../../images/blog.svg"
import wrblg from "../../images/writeblog.svg"
import tsk from "../../images/tasks.svg"
import prj from "../../images/project.svg"
import jn from "../../images/joinus.svg"





export const Join = {
  id: 'Join Us',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Join Us',
  headline: 'Join Us For Exclusive Content',
  description: 'Get access to our exclusive content on Data Analytics, Tasks, News and Jupyter Notebook all at one place only available for club members.',
  buttonLabel: 'Register Now!',
  imgStart: true,
  img: jn,
  alt: 'Join us',
  dark: false,
  primary: false,
  darkText: true
};



export const About = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Data Analytics Club',
  headline: 'About Us',
  description: "VIT Chennai presents you its very first Data Analytics Club. Want a new way into the world of technology ? - Data Analysis is the solution.",
  buttonLabel: 'Learn More',
  imgStart: false,
  img: abt,
  alt: 'about us',
  primary: false,
  darkText: true
};

export const Ourblog = {
  id: 'Ourblog',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Data Analytics Club',
  headline: 'Our Blogs',
  description: 'For everyone to read and enjoy. Dont forget to leave your comments.',
  buttonLabel: 'Nil',
  imgStart: false,
  img: blg,
  alt: 'blog',
  dark: true,
  primary: true,
  darkText: false
}

export const Writeblog = {
  id: 'Writeblog',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Data Analytics Club',
  headline: 'Write your own Blogs',
  description: 'Get access to write your own blogs and bring flavours to the Data Analytics World.',
  buttonLabel: 'Upload a Blog',
  imgStart: true,
  img: wrblg,
  alt: 'Write Blogs',
  dark: false,
  primary: false,
  darkText: true,
  toGo: '/Blog/CreateBlog'
};

export const Aboutus = {
  id: 'aboutus',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Data Analytics Club',
  headline: 'About Us',
  description: "VIT Chennai presents you its very first Data Analytics Club. Want a new way into life and the world of technology ? - Data Analysis is the solution. As a new club, we welcome you to join ourfamily,fillthe forms right away and get a chance to lead teams of your choice! At DAC we aim to provide resources to members curious about the sector of data analytics. Students also will learn the data analyticstools, concepts, and trends, and impacts into various domains like business, healthcare, and engineering applications. Students will have the opportunity to express theirtalents in a creative manner and explore opportunities in the realm of data analytics with the help of professionals guiding them.",
  buttonLabel: 'Become a member',
  imgStart: false,
  img: abt,
  alt: 'about us',
  dark: true,
  primary: true,
  darkText: false
};

export const Task = {
  id: 'tasks',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Data Analytics Club',
  headline: 'Your Weekly Tasks',
  description: "Tasks - Each FFCS member can make a repository on their GitHub titled DAC Task Submissions and upload their solutions there itself.These will be considered for your FFCS evaluation, including the date of submission. So please submit things on time. The solutions in you're repository will be 50% of your evaluation, and the tasks given to you when you join various teams would account for 50%. The deadline for the first two tasks is next Wednesday so please upload your solutions by then. We understand that a lot of you might be having COVID/have friends or family with COVID. It is a difficult time for us. But we are a technical club and we have to be answerable to Student Welfare when they ask us about evaluation criteria etc. Stay home, stay safe and try our best, that's all we can do. If for some reason you're unable to submit, feel free to DM me @Ashwin Iyer or @Mihir Gupta Dac personally."
  ,
  buttonLabel: 'Go to Jupyter Notebook',
  imgStart: false,
  img: tsk,
  alt: 'Tasks',
  dark: true,
  primary: true,
  darkText: false
};


export const WeeklyNews = {
  id: 'WeeklyNews',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Data Analytics Club',
  headline: 'Your Weekly News',
  description: 'Keep yourself updated on Top and Recent trends on Data Analytics.',
  buttonLabel: 'Nil',
  imgStart: false,
  img: nw,
  alt: 'news',
  dark: true,
  primary: true,
  darkText: false
}


export const Researchpapers = {
  id: 'Researchpapers',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Data Analytics Club',
  headline: 'Research Papers',
  description: 'Find all the Top and Recently published papers!!!',
  buttonLabel: 'Nil',
  imgStart: true,
  img: res,
  alt: 'research paper',
  dark: false,
  primary: false,
  darkText: true
};


export const OurProjects = {
  id: 'ourproject',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Data Analytics Club',
  headline: 'Our Projects',
  description: "A brief view of our projects in github",
  buttonLabel: 'Go to Github',
  imgStart: false,
  img: prj,
  alt: 'Projects',
  dark: true,
  primary: true,
  darkText: false
}