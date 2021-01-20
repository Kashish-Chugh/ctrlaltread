const config = {
  siteTitle: "Ctrl Alt Read", // Site title.
  siteTitleShort: "CtrlAltRead", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Ctrl Alt Read Kashish Chugh", // Alternative site title for SEO.
  siteLogo: "/static/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://ctrlaltread.tech/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Personal blog by Kashish Chugh.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "410194166968024", // FB Application ID for using app insights
  googleAnalyticsID: "UA-186979689-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Kashish Chugh", // Username to display in the author segment.
  userEmail: "chughkashish12@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "kashish_chugh", // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: "Kashish-Chugh", // Optionally renders "Follow Me" in the Bio segment.
  userLocation: "New Delhi, India", // User location to display in the author segment.
  userAvatar: "/content/images/avatar.png", // User avatar to display in the author segment.
  userDescription:
    "A young and enthusiast person, currently working as a Software Developer. I love watching football and my favorite club is Chelsea.", // User description to display in the author segment.
  copyright: "Kashish Chugh © 2021. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "red", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;
