import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import TrendingPosts from "./pages/TrendingPosts";
import TopUsers from "./pages/TopUsers";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/trending" element={<TrendingPosts />} />
    <Route path="/top-users" element={<TopUsers />} />
  </Routes>
);

export default AppRoutes;
