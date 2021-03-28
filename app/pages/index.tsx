// working on this to add spinner to loading images
import { Suspense, useEffect, useState } from "react"

import { Link, Image, BlitzPage, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"

import Gallery from "react-photo-gallery"
import { SRLWrapper } from "simple-react-lightbox"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Grid, Hidden, SvgIcon, Paper, FormControl, TextField, FormGroup } from "@material-ui/core"
import Icon from "@material-ui/core/Icon"
import Recaptcha from "react-recaptcha"

// import { useCurrentUser } from "app/core/hooks/useCurrentUser"
// import logout from "app/auth/mutations/logout"

// switch to separate component
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

const Home: BlitzPage = () => {
  const classes = useStyles()
  const [verified, setVerified] = useState(false)

  const verifyCallback = () => {
    setVerified(true)
    console.log(`captcha simple verification done`)
  }
  const callback = () => {
    console.log(`rendering captcha - verification is currently: ${verified}`)
  }

  return (
    <div className="container">
      {/* move to separate file eventually */}
      <AppBar position="static" style={{ background: "green" }}>
        <Toolbar>
          <Typography color="textSecondary" variant="h6" className={classes.title}>
            <img
              src="/mascot-logo.png"
              alt="mascot lawncare logo"
              style={{ width: "50%", maxWidth: "500px" }}
            />
          </Typography>
          <Typography variant="h5">
            Call Now For Free Estimates!{" "}
            <a href="tel:7277444979" style={{ textDecoration: "none", color: "#FFFFFF" }}>
              727-744-4979
            </a>
          </Typography>
          {/* <Hidden smDown>
            <Button href="/services" color="inherit">Services</Button>
            <Button href="/about" color="inherit">About</Button>
            <Button href="/contact" color="inherit">Contact</Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden> */}
        </Toolbar>
      </AppBar>
      <main>
        <SRLWrapper>
          <Gallery photos={photos} />
        </SRLWrapper>
        <Grid className="content" container>
          <Grid item sm={12} md={6}>
            <Typography variant="body1" color="textPrimary">
              <Image src="/aboutus.svg" width="120px" height="85px" />
              Mascot Lawn Care iss locally owned and owner operated and has been serving the Central
              Florida area since 2008. We Also Have Operations in Dayton Ohio as well that is run by
              Matt Williams brother of Scott Williams who runs the Florida operations. Together we
              have 15 plus years experience in the Lawn industry. Combined we formed Mascot
              (combination of Matt and Scott) Services. Both businesses are fully insured and strive
              to provide quality service with competitive pricing. No matter what your budget is we
              will find a plan that works for you.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="body1" color="textPrimary">
              <Image src="/services.svg" width="120px" height="85px" />
              make list items here with material ui
              {/* <ul>
                <li>Mascot Lawn Care provides commercial and residential pressure washing and lawn care services throughout Pinellas County.</li>
                <li>Hauling service</li>
                <li>Landscaping</li>
                <li>Sod installation</li>
                <li>Pressure Washing</li>
              </ul> */}
            </Typography>
          </Grid>
        </Grid>
        <Grid className="iconRow" container>
          <Grid container alignItems="center" alignContent="center" justify="center">
            <Typography variant="h3" color="textSecondary">
              Lawn Care
            </Typography>
            <Image src="/mowing.svg" width="100px" height="80px" />
          </Grid>
          <Grid
            container
            style={{ padding: "10px 20px" }}
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Typography variant="h3" color="textSecondary" align="center">
              Cleanup & Hauling
            </Typography>
            <Image src="/cleanup.svg" width="100px" height="80px" />
            <Image src="/hauling.svg" width="100px" height="80px" />
          </Grid>
          <Grid container alignItems="center" alignContent="center" justify="center">
            <Typography variant="h3" color="textSecondary">
              Landscape
            </Typography>
            <Image src="/landscape.svg" width="100px" height="80px" />
          </Grid>
          <Grid
            className="bottom"
            container
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Typography variant="h3" color="textSecondary">
              Pruning
            </Typography>
            <Image src="/pruning.svg" width="100px" height="80px" />
          </Grid>
          <Grid
            className="bottom"
            container
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Typography variant="h3" color="textSecondary">
              Light Treework
            </Typography>
            <Image src="/tree.svg" width="100px" height="80px" />
          </Grid>
        </Grid>
        <Grid container>
          <FormGroup>
            <Grid
              className="contactForm"
              container
              direction="column"
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item>
                <Icon color="primary" component={Grid} fontSize="small">
                  email_circle
                </Icon>
              </Grid>
              <Grid item>
                <TextField id="contact-email" label="Email Address" />
              </Grid>
              <Grid item>
                <Icon color="primary" component={Grid} fontSize="small">
                  chat_circle
                </Icon>
              </Grid>
              <Grid item>
                <TextField id="contact-msg" label="Message" />
              </Grid>
              <Grid item>
                <Recaptcha
                  sitekey="6LcJ_HIaAAAAAMqLK9UxrA3RdGMs8mO9CSzBrEQy"
                  render="explicit"
                  verifyCallback={verifyCallback}
                  onloadCallback={callback}
                />
              </Grid>
              <Grid item>
                <Button disabled={!verified} color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>
      </main>

      <footer>
        <Grid
          style={{ height: "100px", background: "" }}
          container
          alignItems="center"
          alignContent="center"
          justify="center"
        >
          <Typography component="span">
            Mascot Lawncare, St. Petersburg Florida &copy;2021 All Rights Reserved
          </Typography>
        </Grid>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap");
        .MuiFormGroup-root {
          width: 100%;
        }
        .midbanneritems {
          background: green;
        }
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        span {
          font-family: "RocknRoll One", sans-serif !important;
        }
        .content {
          background: #ffffff;
        }
        .content .MuiGrid-item p {
          padding: 30px 10%;
          line-height: 2;
        }
        .iconRow {
          padding: 20px 0;
          background: #ffe5c9;
        }
        .iconRow h3 {
          width: 100%;
          text-align: center;
        }
        .iconRow svg {
          margin: 20px;
        }
        footer .MuiGrid-container {
          background: green;
          border-top: 1px solid lightGrey;
        }
        footer span {
          font-size: 0.875rem;
          color: #ffffff;
        }
        @media (min-width: 768px) {
          body.SRLOpened {
            margin-right: 15px !important;
          }
        }
      `}</style>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
