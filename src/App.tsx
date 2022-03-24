import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";

const Home = lazy(() => import("./components/Home"));
const CreatePage = lazy(() => import("./components/CreatePage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
