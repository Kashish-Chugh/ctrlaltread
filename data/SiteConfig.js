const config = {
  siteTitle: "Ctrl Alt Read", // Site title.
  siteTitleShort: "Alt", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Alt", // Alternative site title for SEO.
  siteLogo: "/public/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://ctrlaltread.tech/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "A Gatsby Markdown Blog stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "G-JZNG6BWRN3", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Kashish Chugh", // Username to display in the author segment.
  userEmail: "chughkashish12@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "kashish_chugh", // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: "Kashish-Chugh", // Optionally renders "Follow Me" in the Bio segment.
  userLocation: "New Delhi, India", // User location to display in the author segment.
  userAvatar: "/content/images/avtarr.jpg", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
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
