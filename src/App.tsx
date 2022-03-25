import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Layout from './components/shared/Layout';

const Home = lazy(() => import('./Pages/home'));
const Create = lazy(() => import('./Pages/create'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/:id" element={<MovieDetails />} />
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
