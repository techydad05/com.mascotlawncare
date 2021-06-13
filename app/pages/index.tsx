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
import {
  Grid,
  Hidden,
  SvgIcon,
  Paper,
  FormControl,
  TextField,
  FormGroup,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import Icon from "@material-ui/core/Icon"
import Recaptcha from "react-recaptcha"
import Form from "app/core/components/Form"

import emailjs, { init } from "emailjs-com"
init("user_sfHHqVix3VlKerTBKwc66")

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
    white: {
      color: theme.palette.common.white,
    },
  })
)

const Home: BlitzPage = () => {
  const classes = useStyles()
  const [verified, setVerified] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const verifyCallback = () => {
    setVerified(true)
    console.log(`captcha simple verification done`)
    setTimeout(() => {
      setVerified(false)
      console.log(`verification is reset`)
    }, 60000)
  }
  const callback = () => {
    console.log(`rendering captcha - verification is currently: ${verified}`)
  }
  const onSubmit = () => {
    if (verified) {
      console.log("is verified sending mail")
      emailjs.send("default_service", "template_fndut97", {
        from_email: email,
        from_phone: phone,
        message: message,
      })
      document.getElementById("contactForm")?.classList.add("hidden")
      document.getElementById("tyMsg")?.classList.remove("hidden")
    }
  }

  return (
    <>
      <AppBar position="static" style={{ background: "green" }}>
        <Toolbar>
          <Typography color="textSecondary" variant="h6" className={classes.title}>
            <img
              src="/mascot-logo.png"
              alt="mascot lawncare logo"
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </Typography>
          <Typography variant="h5" align="right" style={{ flexGrow: 1 }}>
            Call Now For Free Estimates!{" "}
            <a href="tel:7277444979" style={{ textDecoration: "none", color: "#7CC641" }}>
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
      <SRLWrapper>
        <Gallery photos={photos} />
      </SRLWrapper>
      <Grid className="content" container>
        <Grid id="aboutGrid" item sm={12} md={6}>
          <Image src="/aboutus.svg" width="120px" height="85px" />
          <span>
            Mascot Lawn Care is locally owned and owner operated and has been serving the Central
            Florida area since 2008. We Also Have Operations in Dayton Ohio as well that is run by
            Matt Williams brother of Scott Williams who runs the Florida operations. Together we
            have 15 plus years experience in the Lawn industry. Combined we formed Mascot
            (combination of Matt and Scott) Services. Both businesses are fully insured and strive
            to provide quality service with competitive pricing. No matter what your budget is we
            will find a plan that works for you.
          </span>
        </Grid>
        <Grid id="listGrid" item sm={12} md={6}>
          <Image src="/services.svg" width="120px" height="85px" />
          <span>
            Mascot Lawn Care provides commercial and residential pressure washing and lawn care
            services throughout Pinellas County.
          </span>
          <br />
          <span>Other services include..</span>
          <br />
          <span className="dot">Hauling service</span>
          <br />
          <span className="dot">Landscaping</span>
          <br />
          <span className="dot">Sod installation</span>
          <br />
          <span className="dot">Pressure Washing</span>
          <br />
          <span className="dot">More to come!</span>
        </Grid>
      </Grid>
      <Grid className="iconRow" container>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" color="textSecondary">
            Lawn Care
          </Typography>
          <Image src="/mowing.svg" width="100px" height="80px" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" color="textSecondary">
            Pruning
          </Typography>
          <Image src="/pruning.svg" width="100px" height="80px" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" color="textSecondary">
            Landscape
          </Typography>
          <Image src="/landscape.svg" width="100px" height="80px" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="textSecondary" align="center">
            Cleanup & Hauling
          </Typography>
          <Image src="/cleanup.svg" width="100px" height="80px" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="textSecondary">
            Light Treework
          </Typography>
          <Image src="/tree.svg" width="100px" height="80px" />
        </Grid>
      </Grid>
      <Grid id="contactGrid" container spacing={1} justify="space-between">
        <Grid item xs={12} md={6}>
          <h1>CONTACT US!</h1>
          <span>
            Please feel free to send us a message with any questions or concerns if you are an
            existing customer and if you would like a free estimate on any of our services.
          </span>
        </Grid>
        <Grid item xs={12} md={5}>
          <form id="contactForm">
            <Grid
              className="contactForm"
              container
              direction="column"
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item>
                <TextField
                  id="contactEmail"
                  label="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="contactPhone"
                  label="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="contactMessage"
                  label="Message"
                  placeholder="Placeholder"
                  multiline
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Recaptcha
                  sitekey={process.env.EMAILJS_API}
                  render="explicit"
                  verifyCallback={verifyCallback}
                  onloadCallback={callback}
                />
              </Grid>
              <Grid item>
                <Button disabled={!verified} color="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <Grid id="tyMsg" className="hidden" item xs={6}>
            <h4>THANK YOU FOR CONTACTING US SOMEONE WILL RESPOND TO YOU AS SOON AS POSSIBLE!</h4>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        style={{ height: "100px", background: "green" }}
        container
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Typography variant="subtitle1" className={classes.white}>
          Mascot Lawncare, St. Petersburg Florida &copy;2021 All Rights Reserved
        </Typography>
      </Grid>
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
        span,
        p,
        .contactForm {
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
        .MuiToolbar-root {
          flex-wrap: wrap;
        }
        .iconRow .MuiGrid-item {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }
        #aboutGrid,
        #listGrid,
        #contactGrid {
          padding: 50px;
          font-size: 1.4em;
          line-height: 2;
        }
        .dot:before {
          content: "";
          height: 15px;
          width: 15px;
          background-color: green;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
        }
        .contactForm .MuiGrid-item {
          margin: 0;
          box-sizing: border-box;
          width: 100% !important;
          margin: 20px 0;
        }
        .contactForm .MuiFormControl-root {
          min-width: 92%;
        }
        .MuiFormLabel-root,
        .MuiInput-underline::after,
        .MuiButton-textPrimary {
          color: #1b5e20 !important;
          border-color: #1b5e20 !important;
        }
        .hidden {
          display: none;
        }
        @media (min-width: 768px) {
          body.SRLOpened {
            margin-right: 15px !important;
          }
          .MuiToolbar-root {
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
