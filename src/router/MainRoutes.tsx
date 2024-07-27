import React, { lazy } from "react"
import type { RouteObject } from "react-router-dom"
import Loadable from "../components/third-party/Loadable"

// project imports
import MainLayout from "../layouts/main-layout"

// render - dashboard
const DashboardDefault: React.FC = Loadable(
  lazy(
    async () =>
      await import("../pages/dashboard").then(
        ({ default: DashboardDefault }) => ({ default: DashboardDefault })
      )
  )
)

const MainRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      index: true,
      element: <DashboardDefault />,
    },
  ],
}

export default MainRoutes
