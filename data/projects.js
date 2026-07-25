export const projects = [
  {
    slug: "servicehub",
    title: "ServiceHub",
    description:
      "A full-stack service marketplace where users can browse, book, and manage local services. Features secure JWT authentication, role-based access for providers and clients, real-time booking management, and an intuitive dashboard.",
    longDescription:
      "ServiceHub is a comprehensive online marketplace designed to bridge the gap between local service providers and clients. Built with the MERN stack, it offers a robust platform where users can seamlessly browse through various service categories, securely book appointments, and leave reviews. The application handles complex role-based access control, ensuring that service providers have a dedicated dashboard to manage their offerings and bookings, while clients can easily track their service history.",
    features: [
      "Role-based access control (Admin, Provider, Client)",
      "Real-time booking and scheduling system",
      "Secure JWT-based authentication",
      "Responsive provider and client dashboards",
      "Advanced search and filtering by category and location"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    liveUrl: "https://servicehub-client-five.vercel.app",
    githubUrl: "https://github.com/sakibahamedsihab/servicehub-client",
    image: "/projects/servicehub.png",
    challenges: "One of the main challenges was implementing a seamless real-time booking status update across different roles without overloading the database. Ensuring secure role-based routing on both the client and server side also required careful token validation.",
    futurePlans: "In the future, I plan to integrate a real-time chat feature between service providers and clients, and add a secure payment gateway integration like Stripe."
  },
  {
    slug: "retro-recipe",
    title: "Retro Recipe",
    description:
      "A community-driven recipe sharing platform with a vintage aesthetic. Users can explore, add, and manage recipes with category filtering, rich media support, and a full-featured CRUD backend built on Express and MongoDB.",
    longDescription:
      "Retro Recipe is a unique take on culinary social platforms, wrapping a modern full-stack application in a nostalgic, vintage-inspired UI. It empowers cooking enthusiasts to share their favorite recipes, complete with rich media integration and detailed step-by-step instructions. Under the hood, a powerful Node.js and Express backend handles complex data relationships, user interactions, and robust CRUD operations.",
    features: [
      "Dynamic recipe creation with image uploading",
      "Category-based filtering and search",
      "User authentication and personal recipe collections",
      "Interactive comment and rating system",
      "Vintage-inspired responsive UI design"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    liveUrl: "https://retro-recipe-client.vercel.app",
    githubUrl: "https://github.com/sakibahamedsihab/retro-recipe-client",
    image: "/projects/retro-recipe.png",
    challenges: "Handling multipart/form-data for image uploads alongside complex JSON data structures required setting up a robust middleware pipeline. Styling the UI to perfectly mimic a vintage computer interface without sacrificing modern accessibility was also tricky.",
    futurePlans: "I intend to add a collaborative 'Cookbook' feature where multiple users can contribute to a shared recipe collection, and implement a robust caching layer with Redis to speed up queries."
  },
  {
    slug: "pet-adoption",
    title: "Pet Adoption Platform",
    description:
      "A compassionate pet adoption web app connecting animals in need with loving homes. Features pet listings with filters, adoption request management, user authentication, and a secure admin panel for shelters.",
    longDescription:
      "The Pet Adoption Platform serves as a digital bridge between animal shelters and prospective pet parents. Recognizing the need for a streamlined adoption process, this application provides an intuitive interface for browsing available pets, complete with advanced filtering options. It features a secure adoption application workflow, allowing shelters to seamlessly review and manage requests through a dedicated administrative portal.",
    features: [
      "Advanced pet filtering (species, age, size, breed)",
      "Secure online adoption application workflow",
      "Dedicated admin panel for shelter management",
      "User authentication and favorite saving",
      "Responsive, accessible frontend design"
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    liveUrl: "https://pet-adoption-client-rho.vercel.app",
    githubUrl: "https://github.com/sakibahamedsihab/pet-adoption-client",
    image: "/projects/pet-adoption.png",
    challenges: "Designing an intuitive multi-step adoption application form that persisted state securely was a significant hurdle. I also had to optimize the MongoDB queries to handle complex, multi-parameter filtering for pet searches efficiently.",
    futurePlans: "Future updates will include an integrated mapping API to show nearby shelters visually, and a notification system to alert users when a pet matching their criteria becomes available."
  },
];
