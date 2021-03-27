import { ReactNode } from "react"
import { Head } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "com.mascotlawncare"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        {/* <script src="https://www.google.com/recaptcha/api.js?render=6LcJ_HIaAAAAAMqLK9UxrA3RdGMs8mO9CSzBrEQy" async defer></script> */}
        {/* <script src="https://www.google.com/recaptcha/api.js?&render=explicit" async defer></script>  */}
      </Head>
      {children}
    </>
  )
}

export default Layout
