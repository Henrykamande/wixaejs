const express = require('express');
const path = require('path');

const app = express();
const services = [
    {
      id: 1,
      slug: 'graphic-design-services',
      title: 'Graphic Design Services',
      description: 'We provide high-quality design services to enhance your brand.',
      features: ['High-end Web Designs', 'Professional Content', 'SEO Optimization', 'Powerful Performance'],
      image: 'img/rollupbanner.png',
    },
    {
      id: 2,
      slug: 'web-development-services',
      title: 'Web Development Services',
      description: 'Full-stack web development to bring your ideas to life.',
      features: ['Responsive Websites', 'SEO Optimization', 'Fast Loading Times', 'Modern UI/UX'],
      image: 'img/web-development.png',
    },
    {
      id: 3,
      slug: 'marketing-strategy-services',
      title: 'Marketing Strategy Services',
      description: 'Expert marketing strategies tailored to your business.',
      features: ['Social Media Campaigns', 'SEO Results', 'Branding Solutions', 'Paid Advertising'],
      image: 'img/marketing.png',
    }
  ];
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for your views
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/services/:slug', (req, res) => {
//     const service = services.find(s => s.slug === req.params.slug);
    
//     if (service) {
//       res.render('pages/service_detail', { service });
//     } else {
//       res.status(404).send('Service Not Found');
//     }
//   });

app.get('/graphic-design', (req, res) => {
    res.render('pages/service_detail');
});
app.get('/corporate-branding',  (req, res) => {
  res.render('pages/corporate_branding');
});
app.get('/bulk-printing',  (req, res) => {
  res.render('pages/bulk_printing');
});

app.get('/banners-design-and-printing',  (req, res) => {
  res.render('pages/banners');
});

app.get('/business-cards-design-and-printing',  (req, res) => {
  res.render('pages/business-cards');
});

app.get('/catalogues-menu-design-and-printing', (req, res) => {
  res.render('pages/catalogues_menu');});

  app.get('/publication-magazine-design-and-printing', (req, res) => {
    res.render('pages/publications_magazine');});


    
  app.get('/marketing-material-design-and-printing', (req, res) => {
    res.render('pages/marketing_materials');});
    
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});