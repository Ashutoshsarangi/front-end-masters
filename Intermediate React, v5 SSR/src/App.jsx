import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, Suspense } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
      className="p-0 m-0"
      style={{
        backgroundImage:
          "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>Loading ....</div>}></Suspense>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-orange-700 via-orange-500 to-red-500">
            <Link className="text-6xl text-white hover:text-gray-200" to="/">
              Adopt Me!
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </div>
  );
};

export default App;
