import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      {/* SEO stuff */}
      <title>Smaug-X | Strength & Conditioning Mastery</title>
      <meta
        name="description"
        content="Smaug-X is an elite fitness coaching brand based in Dubai, offering tailored 1:1 performance training for high-achievers, athletes, and professionals. We don’t believe in generic algorithms — we build strength, mastery, and transformation through real human coaching."
      />
      <meta property="og:title" content="Smaug-X" />
      <meta
        property="og:description"
        content="Smaug-X is an elite fitness coaching brand based in Dubai, offering tailored 1:1 performance training for high-achievers, athletes, and professionals. We don’t believe in generic algorithms — we build strength, mastery, and transformation through real human coaching."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://smaug-x.com" />
      <link rel="canonical" href="https://smaug-x.com" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
