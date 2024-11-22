import flydelta from '/public/image/project/FlyDelta1.jpg';
import generativeAI from '/public/image/project/GenerativeAI1.jpg';
import gds from '/public/image/project/GDS1.jpg';
import babymonitor from '/public/image/project/BabyMonitor1.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Fly Delta App',
        description: "This mobile app allows customers to book flights, check in, track their bags, and receive real-time flight updates.",
        tools: ['React', 'React Native', 'Node.js', 'Java', 'Spring Boot', 'AWS', 'MySQL', 'MongoDB', 'RESTful APIs', 'GraphQL', 'Docker', 'Jenkins', 'Google Analytics'],
        role: 'Senior Full Stack Developer',
        code: '',
        demo: '',
        image: flydelta,
    },
    {
        id: 2,
        name: 'Generative AI platform',
        description: "The platform is based on a combination of technologies, including Labrador CMS for content management, and various AI tools such as StableDiffusionXL and OpenAI's GPT-3.5 for text-to-image generation and personalized content recommendations",
        tools: ['React.js','NextJS', 'Tailwind CSS', "Labrador CMS", "Node.js", "TypeScript", "MySQL", "AWS S3", "Python", "PyTorch", 'Keras', 'OpenAI', 'TensorRT', 'Spacy', 'Docker'],
        role: 'Senior Software Developer',
        code: '',
        demo: '',
        image: generativeAI,
    },
    {
        id: 3,
        name: 'GDS Web App',
        description: 'The GDS web application is a platform for managing ferry bookings and travel services. It integrates with travel agencies to streamline booking, modification, and cancellation processes, enhancing efficiency and expanding market reach.',
        tools: ['Java', 'Spring Boot', 'Spring Cloud', 'Hibernate', 'REST', 'SOAP', 'PostgreSQL', 'Kafka', 'GitLab', 'Jira', 'Confluence', 'Memcahed'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: gds,
    },
    {
        id: 4,
        name: 'Baby Breathing Monitor System',
        description: "The Baby Breathing Monitor System is a platform with mobile and web applications that monitor infants' breathing patterns. It uses cloud technologies, microservices, and CI/CD pipelines to ensure scalability, reliability, and efficient deployment.",
        tools: ['React', 'Typescript', 'Python', 'FastAPI', "Java", 'Kotlin', 'AWS', "GitLab", 'Tortoise ORM'],
        code: '',
        demo: '',
        image: babymonitor,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },