import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";

const Home = lazy(() => import("./Pages/home"));
const Create = lazy(() => import("./Pages/create"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
