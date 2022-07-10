import * as React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import "react-jinke-music-player/assets/index.css"
import loadable from "@loadable/component"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const ReactJkMusicPlayer = loadable(() => import("react-jinke-music-player"))
const shortcodes = { ReactJkMusicPlayer, OutboundLink }
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <p>
        <Link to="/rss.xml" title="RSS">
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/rss.svg"
            width={50}
            height={50}
            quality={95}
            alt="RSS"
          />
        </Link>
        {` `}
        <OutboundLink
          target="_blank"
          href="https://podcasts.apple.com/us/podcast/de-or-die-talks/id1577026407"
          title="Apple Podcasts"
          rel="noreferrer"
        >
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/apple-podcast.svg"
            width={50}
            height={50}
            quality={95}
            alt="Apple Podcasts"
          />
        </OutboundLink>
        {` `}
        <OutboundLink
          target="_blank"
          href="https://podcasts.google.com/feed/aHR0cHM6Ly90YWxrcy5kZW9yZGllLm9yZy9yc3MueG1s"
          title="Google Podcasts"
          rel="noreferrer"
        >
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/google-podcast.svg"
            width={50}
            height={50}
            quality={95}
            alt="Google Podcasts"
            title="Google Podcasts"
          />
        </OutboundLink>
        {` `}
        <OutboundLink
          target="_blank"
          href="https://www.subscribeonandroid.com/talks.deordie.org/rss.xml"
          title="Subscribe on Android"
          rel="noreferrer"
        >
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/android.png"
            width={50}
            height={50}
            quality={95}
            alt="Subscribe on Android"
          />
        </OutboundLink>
        <OutboundLink
          target="_blank"
          href="https://www.youtube.com/playlist?list=PL43voGd638jQ4iQHJswhVhwlu9fSnmAQN"
          title="Youtube"
          rel="noreferrer"
        >
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/youtube.svg"
            width={50}
            height={50}
            quality={95}
            alt="Youtube"
          />
        </OutboundLink>
      </p>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <OutboundLink href="https://www.gatsbyjs.com">Gatsby</OutboundLink>
      </footer>
    </div>
  )
}

export default Layout
