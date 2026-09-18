import { Routes } from "react-router-dom";
import { SiteMap } from "./pages/Routes";
import PathUtils from "./utils/PathUtils";

export default function App() {
  return <Routes>{PathUtils.generateRoutes(SiteMap)}</Routes>;
}
