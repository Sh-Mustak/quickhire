require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Job = require("../models/Job");

const sampleJobs = [
  {
    title: "Email Marketing Specialist",
    company: "Revolut",
    companyLogo: "",
    location: "Madrid, Spain",
    category: "Marketing",
    type: "Full Time",
    description: "Revolut is looking for an Email Marketing Specialist to help grow our marketing team. You will plan, execute, and optimize email marketing campaigns. Strong analytical skills and knowledge of email marketing tools required.",
    requirements: "2+ years email marketing experience, proficiency with Mailchimp or similar tools, data-driven mindset.",
    salary: "$50,000 - $70,000",
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    companyLogo: "",
    location: "San Francisco, US",
    category: "Design",
    type: "Full Time",
    description: "Dropbox is looking for a Brand Designer to help the team build a consistent visual identity. You will work closely with marketing and product teams to deliver high-quality design assets.",
    requirements: "3+ years brand design experience, proficiency in Figma and Adobe Creative Suite.",
    salary: "$80,000 - $110,000",
  },
  {
    title: "Product Designer",
    company: "ClassPass",
    companyLogo: "",
    location: "Manchester, UK",
    category: "Design",
    type: "Full Time",
    description: "ClassPass is looking for a Product Designer to help design intuitive user experiences. You will be responsible for the end-to-end design process from ideation to final delivery.",
    requirements: "Portfolio demonstrating UX/UI work, experience with user research and usability testing.",
    salary: "60,000 - 80,000 GBP",
  },
  {
    title: "Lead Engineer",
    company: "Canva",
    companyLogo: "",
    location: "Ontario, Canada",
    category: "Engineering",
    type: "Full Time",
    description: "Canva is looking for a Lead Engineer to help develop and scale our platform infrastructure. You will mentor a team of engineers and drive technical decisions.",
    requirements: "5+ years software engineering, experience with distributed systems, strong leadership skills.",
    salary: "$120,000 - $150,000 CAD",
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    companyLogo: "",
    location: "Marseille, France",
    category: "Marketing",
    type: "Full Time",
    description: "GoDaddy is looking for a Brand Strategist to join the marketing team and drive brand positioning initiatives across Europe.",
    requirements: "4+ years brand strategy experience, strong presentation skills, fluency in French and English.",
    salary: "55,000 - 75,000 EUR",
  },
  {
    title: "Data Analyst",
    company: "Twitter",
    companyLogo: "",
    location: "San Diego, US",
    category: "Technology",
    type: "Full Time",
    description: "Twitter is looking for a Data Analyst to help the team derive actionable insights from large datasets. You will work with engineers and product managers to drive data-informed decisions.",
    requirements: "Proficiency in SQL, Python or R, experience with data visualization tools like Tableau.",
    salary: "$90,000 - $120,000",
  },
  {
    title: "Visual Designer",
    company: "Blenlist",
    companyLogo: "",
    location: "Granada, Spain",
    category: "Design",
    type: "Full Time",
    description: "Blenlist is looking for a Visual Designer to help create compelling visual content for our platform and marketing materials.",
    requirements: "Strong portfolio in digital design, proficiency in Figma, Illustrator, and Photoshop.",
    salary: "35,000 - 50,000 EUR",
  },
  {
    title: "Social Media Assistant",
    company: "Nomad",
    companyLogo: "",
    location: "Paris, France",
    category: "Marketing",
    type: "Full Time",
    description: "Nomad is seeking a Social Media Assistant to help manage and grow our online presence across multiple platforms.",
    requirements: "Experience with social media management, strong copywriting skills, data-driven mindset.",
    salary: "28,000 - 38,000 EUR",
  },
  {
    title: "Interactive Developer",
    company: "Terraform",
    companyLogo: "",
    location: "Hamburg, Germany",
    category: "Technology",
    type: "Full Time",
    description: "Terraform is looking for an Interactive Developer to build engaging web experiences. You will work with creative and tech teams to bring interactive projects to life.",
    requirements: "Strong JavaScript skills, experience with Three.js or WebGL, creative portfolio.",
    salary: "60,000 - 80,000 EUR",
  },
  {
    title: "HR Manager",
    company: "Packer",
    companyLogo: "",
    location: "Lucern, Switzerland",
    category: "Human Resource",
    type: "Full Time",
    description: "Packer is looking for an HR Manager to oversee all aspects of human resources practices and processes.",
    requirements: "5+ years HR experience, strong knowledge of Swiss labor law, excellent interpersonal skills.",
    salary: "90,000 - 120,000 CHF",
  },
];

const seedDB = async () => {
  try {
    await connectDB();
    await Job.deleteMany({});
    await Job.insertMany(sampleJobs);
    console.log(`Successfully seeded ${sampleJobs.length} jobs!`);
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();
