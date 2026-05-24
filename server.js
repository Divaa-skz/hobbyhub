const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/activities', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'activities.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/course-drawing', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'course-drawing.html'));
});

app.get('/course-workout', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'course-workout.html'));
});

app.get('/course-reading', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'course-reading.html'));
});

app.get('/course-coloring', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'course-coloring.html'));
});

app.get('/course-cooking', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'course-cooking.html'));
});

app.get('/course-diy', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'course-diy.html'));
});

app.get('/course-music', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'course-music.html'));
});

app.get('/quiz-drawing', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz-drawing.html'));
});

app.get('/quiz-coloring', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz-coloring.html'));
});

app.get('/quiz-cooking', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz-cooking.html'));
});

app.get('/quiz-diy', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz-diy.html'));
});

app.get('/quiz-music', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz-music.html'));
});

app.get('/quiz-reading', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz-reading.html'));
});

app.get('/quiz-workout', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quiz-workout.html'));
});

app.get('/progress', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'progress.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});