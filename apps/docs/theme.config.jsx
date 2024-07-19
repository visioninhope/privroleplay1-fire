export default {
  logo: <span className="font-medium">📙 Theta Space Docs</span>,
  docsRepositoryBase:
    "https://github.com/Open-Roleplay-AI/openroleplay.ai/tree/main/apps/docs",
  head: (
    <>
      <meta property="og:title" content="Theta Space Docs" />
      <meta
        property="og:description"
        content="Learn how to create engaging characters at Theta Space"
      />
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Theta Space
        </a>
        .
      </span>
    ),
  },
};
