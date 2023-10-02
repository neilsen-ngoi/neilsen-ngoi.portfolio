// Import images
import Image1 from '../images/wawo.png'
import Image2 from '../images/figma.png'
import Image3 from '../images/sample.png'
import Image4 from '../images/mobile-project-1.jpg'
import Image5 from '../images/web-project-1.jpg'
import Image6 from '../images/ui-project-2.jpg'
// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi'

export const singleProjectData = {
  ProjectHeader: {
    title: 'Wardrobe Wonders',
    publishDate: 'Sep 22, 2023',
    tags: 'UI / Frontend / Backend / Database',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'wawo',
      img: Image1,
    },
    {
      id: 2,
      title: 'wawo',
      img: Image2,
    },
    {
      id: 3,
      title: 'wawo',
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'Dev Academy',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Social App',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://wardrobe-wonders.onrender.com/',
      },
      {
        id: 4,
        title: 'Phone',
        details: 'N/A',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails: `As a final group project for Dev Academy we sought to create a full stack wardrobe/clothing social app`,
    Technologies: [
      {
        title: 'Tools & Technologies',
        techs: ['HTML', 'CSS', 'JavaScript', 'react', 'TailwindCSS'],
      },
    ],
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'As the final project of the 15 week, we sought to employ all the technology and skills we had learnt to the fullest, incorporating new ideas along the way.',
      },
      {
        id: 2,
        details:
          'The largest hurdles were in the implementation of authentication with the use of the 3rd party service Auth0, then with storing user generated images in an online storage service(cloudinary). Finally the implementation of testing the various components of the website to ensure quality user experience.',
      },
      {
        id: 3,
        details: '',
      },
      {
        id: 4,
        details: '',
      },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [
      {
        id: 1,
        name: 'Twitter',
        icon: <FiTwitter />,
        url: '',
      },
      {
        id: 2,
        name: 'Instagram',
        icon: <FiInstagram />,
        url: '',
      },
      {
        id: 3,
        name: 'Facebook',
        icon: <FiFacebook />,
        url: '',
      },
      {
        id: 4,
        name: 'LinkedIn',
        icon: <FiLinkedin />,
        url: 'https://www.linkedin.com/in/neilsen-ngoi-a046ab82/',
      },
      {
        id: 5,
        name: 'Youtube',
        icon: <FiYoutube />,
        url: '',
      },
    ],
  },
  RelatedProject: {
    title: 'Related Projects',
    Projects: [
      {
        id: 1,
        title: 'Mobile UI',
        img: Image4,
      },
      {
        id: 2,
        title: 'Web Application',
        img: Image5,
      },
      {
        id: 3,
        title: 'UI Design',
        img: Image6,
      },
      {
        id: 4,
        title: 'Kabul Mobile App UI',
        img: Image3,
      },
    ],
  },
}
