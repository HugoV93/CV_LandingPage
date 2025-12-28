import { GitHub, LinkedIn, Email, Place, Phone } from '@mui/icons-material';

export const content = {
  profile: {
    name: "Hugo Matos Viana",
    title: "Fullstack Developer",
    subtitle: ".NET & React Specialist",
    summary: "Dedicated IT professional with a robust background in the .NET framework. Currently specializing in ASP.NET Core and React to build scalable web APIs and intuitive user interfaces. Proven track record of delivering high-quality code in agile environments for telecommunications and logistics leaders.",
    location: "Porto, Portugal",
    phone: "+351 910 617 744",
    email: "hugoviana93@gmail.com",
    social: [
      {
        name: "Email",
        icon: Email,
        url: "mailto:hugoviana93@gmail.com"
      },
      // Uncomment and add real links when available
      /*
      {
        name: "LinkedIn",
        icon: LinkedIn,
        url: "https://linkedin.com/in/yourprofile"
      },
      {
        name: "GitHub",
        icon: GitHub,
        url: "https://github.com/yourusername"
      }
      */
    ]
  },
  skills: {
    backend: [
      ".NET 8/Core",
      "C#",
      "ASP.NET MVC",
      "Web API",
      "Entity Framework"
    ],
    frontend: [
      "React (Current Focus)",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Bootstrap",
      "jQuery"
    ]
  },
  experience: [
    {
      company: "Celfocus / Vodafone",
      role: "Mid-Level Fullstack Developer",
      period: "2024 – Present",
      description: "Developing enterprise-level web applications using .NET Core and React. Architecting responsive user interfaces for telecommunications services. Collaborating in Agile/Scrum teams to ensure clean, error-free code."
    },
    {
      company: "Orbcom",
      role: "Fullstack Developer",
      period: "2023 – 2024",
      description: "Engineered web solutions using ASP.NET Razor MVC and SQL Server. Optimized frontend experiences with jQuery and Bootstrap."
    },
    {
      company: "ICP Logística",
      role: "Junior C# Developer",
      period: "2022 – 2023",
      description: "Developed internal logistics tools using C# and Windows applications. Troubleshot and optimized legacy codebases."
    }
  ]
};
