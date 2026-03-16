# 🎬 Movie Explorer App

A modern movie discovery web application that allows users to explore trending movies and search for films in real time.

The application fetches movie data from the API of The Movie Database and renders it dynamically using Vanilla JavaScript.

This project was built as part of my frontend development practice to improve skills in API integration, DOM manipulation, and dynamic UI rendering.

---

## 🚀 Live Demo

https://alian95-creator.github.io/movie-explorer/

---

## ✨ Features

🎬 **Trending Movies**
Displays trending movies fetched from the TMDB API.

🔎 **Search Function**
Users can search for movies by title.

⭐ **Rating Indicator**
Movie ratings are displayed with color indicators:

* 🟢 High rating
* 🟡 Medium rating
* 🔴 Low rating

🎥 **Movie Detail Modal**
Clicking on a movie poster opens a modal with:

* Poster
* Movie title
* Rating
* Release date
* Full movie overview

🎨 **Netflix-style UI**
Movie cards include hover effects and overlays for a modern interface.

---

## 🛠 Tech Stack

Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

API

* TMDB API

---

## 📡 API Endpoints Used

Trending Movies

```
/trending/movie/week
```

Search Movies

```
/search/movie
```

Image Base URL

```
https://image.tmdb.org/t/p/w500
```

---

## 📂 Project Structure

```
movie-explorer
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

1. The application fetches movie data from the TMDB API using the Fetch API.
2. The response is converted to JSON.
3. JavaScript dynamically creates movie cards and inserts them into the DOM.
4. Users can search movies using the search input.
5. Clicking on a movie card opens a modal displaying detailed information about the movie.

---

## 💡 What I Learned

While building this project I practiced:

* Working with REST APIs
* Handling asynchronous JavaScript using async/await
* DOM manipulation
* Dynamic UI rendering
* Event handling
* Building interactive UI components

---

## 🔮 Future Improvements

Possible improvements for the project:

* Movie trailer integration
* Genre filter
* Pagination or load more movies
* Responsive mobile improvements

---

## 👨‍💻 Author

Alifian
Self-taught Frontend Developer from Indonesia

GitHub
https://github.com/Alian95-creator

---

## 📜 License

This project is built for educational and portfolio purposes.
