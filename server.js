const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // ✅ Load .env variables

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env

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

// Routes
app.get('/', (req, res) => res.render('index', data));
app.get('/about', (req, res) => res.render('about', data));
app.get('/experience', (req, res) => res.render('experience', data));
app.get('/projects', (req, res) => res.render('projects', data));
app.get('/contact', (req, res) => res.render('contact', data));

// ✅ All other routes redirect back to home
app.get('*', (req, res) => res.redirect('/'));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form:", { name, email, message });
  res.send("Thanks for reaching out!");
});

// 404 route - MUST be last
app.use((req, res) => {
  res.status(404).render('404', {
    url: req.originalUrl,
    name: data.name
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
