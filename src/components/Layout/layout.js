import * as React from "react"
import ScrollToTop from "./ScrollToTop"
import AOS from "aos"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  )
}
export default Layout
