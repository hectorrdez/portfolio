import type { Page } from "@/types/page";
import { SiteMap } from "@pages/Routes";
import { Route } from "react-router-dom";

export default class PathUtils {
  public static getRoutePath(name: string) {
    return SiteMap.find((page) => page.name == name)?.path ?? "#";
  }

  public static generateRoutes(routes: Array<Page>) {
    return (
      <>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </>
    );
  }
}
