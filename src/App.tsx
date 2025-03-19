// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCentersRequest } from './store/actions';
// import type { RootState } from './libs/types';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";


export default function App() {
  // const dispatch = useDispatch();
  // const { data: centers, loading, error } = useSelector((state: RootState) => state.centers);

  // useEffect(() => {
  //   dispatch(fetchCentersRequest());
  // }, [dispatch]);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="text-red-500">Error: {error}</div>
  //     </div>
  //   );
  // }
  return (
    <Router>
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Redirect /home to / */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Optional: 404 Page (Not Found) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

