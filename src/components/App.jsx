import { React } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Container from './Container/Container.jsx';
import Navigation from './Navigation/Navigation';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import MovieDetails from '../Pages/MovieDetails';

export default function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
