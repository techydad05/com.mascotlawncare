import { Suspense } from "react"
import { Link, BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import Icon from "@material-ui/core/Icon"
import Button from "@material-ui/core/Button"
import Gallery from "react-photo-gallery"
import { SRLWrapper } from "simple-react-lightbox"

const photos = [
  {
    src: "slideimage3.jpg",
    width: 5,
    height: 2,
  },
  {
    src: "slideimage2.jpg",
    width: 5,
    height: 3,
  },
  {
    src: "slideimage1.jpg",
    width: 5,
    height: 3,
  },
  {
    src: "slideimage4.jpg",
    width: 5,
    height: 3,
  },
  {
    src: "slideimage5.jpg",
    width: 5,
    height: 3,
  },
]

// import { useCurrentUser } from "app/core/hooks/useCurrentUser"
// import logout from "app/auth/mutations/logout"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <header>
        <img src="/mascotlawncare.png" alt="mascot lawncare logo" height="100%" />
      </header>

      <main>
        <SRLWrapper>
          <Gallery photos={photos} />
        </SRLWrapper>
      </main>

      <footer></footer>

      <style jsx global>{`
        header {
          height: 150px;
          background: green;
        }
        @media (min-width: 768px) {
          body.SRLOpened {
            margin-right: 15px !important;
          }
        }
        header {
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
