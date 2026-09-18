import type { Page } from "@/types/page";
import RouteProtector from "@components/routing/RouteProtector";
import { SiteMap } from "@pages/Routes";
import { Route } from "react-router-dom";

export default class PathUtils {
  public static getRoutePath(name: string) {
    return SiteMap.find((page) => page.name == name)?.path ?? "#";
  }

  public static generateRoutes(routes: Array<Page>) {
    return (
      <>
        {routes.filter((r) => !r.private).map((r) => this.generateRoute(r))}
        <Route element={<RouteProtector />}>
          {routes.filter((r) => r.private).map((r) => this.generateRoute(r))}
        </Route>
      </>
    );
  }

  private static generateRoute(route: Page) {
    return (
      <Route key={route.path} path={route.path} element={route.component} />
    );
  }
}
