const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Common data
const data = {
  name: "Mayank Tiwari",
  role: "Software Support Engineer",
  company: "Nevitech Data Solution",
  experience: [
    {
      company: "Nevitech Data Solution",
      role: "Software Support Engineer",
      duration: "October 2024 – Present",
      description: "Providing software support, resolving issues, and assisting clients with solutions."
    }
  ],
  projects: [
    {
      title: "Student Result Management System",
      description: "A web app for managing student results using Node.js, Express, and MongoDB."
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects, skills, and experience using EJS and Express."
    }
  ]
};

// Route rendering helper
function renderPage(res, page, data) {
  res.render(page, data);
}

// Routes
app.get('/', (req, res) => renderPage(res, 'index', data));
app.get('/about', (req, res) => renderPage(res, 'about', data));
app.get('/experience', (req, res) => renderPage(res, 'experience', data));
app.get('/projects', (req, res) => renderPage(res, 'projects', data));
app.get('/contact', (req, res) => renderPage(res, 'contact', data));

// Contact form handling
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form:", { name, email, message });
  res.send("Thanks for reaching out!");
});

// 404 route - must be last
app.use((req, res) => {
  res.status(404).render('404', {
    url: req.originalUrl,
    name: data.name
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
