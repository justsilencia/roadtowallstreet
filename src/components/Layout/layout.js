/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import ScrollToTop from "./ScrollToTop"
import AOS from "aos";
import DemoSidebar from "./DemoSidebar";

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {children}

      <ScrollToTop />

      <DemoSidebar />
    </>
  )
}
export default Layout
