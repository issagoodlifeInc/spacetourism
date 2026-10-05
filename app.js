const express = require('express');
const path = require('path');
const spaceData = require('./data.json');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

function publicImagePaths(value) {
  if (Array.isArray(value)) return value.map(publicImagePaths);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, publicImagePaths(entry)])
    );
  }
  return typeof value === 'string' && value.startsWith('./assets/')
    ? value.replace('./assets/', '/images/')
    : value;
}

const data = publicImagePaths(spaceData);
const pages = [
  { path: '/', name: 'Home', number: '00', view: 'home' },
  { path: '/destination', name: 'Destination', number: '01', view: 'destination' },
  { path: '/crew', name: 'Crew', number: '02', view: 'crew' },
  { path: '/technology', name: 'Technology', number: '03', view: 'technology' }
];

app.use((req, res, next) => {
  res.locals.pages = pages;
  res.locals.currentPath = req.path;
  next();
});

app.get('/', (req, res) => res.render('home'));
app.get('/destination', (req, res) => res.render('destination', { destinations: data.destinations }));
app.get('/crew', (req, res) => res.render('crew', { crew: data.crew }));
app.get('/technology', (req, res) => res.render('technology', { technology: data.technology }));

app.listen(port, () => {
  console.log(`Space tourism website listening on port ${port}`);
});
