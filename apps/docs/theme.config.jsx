export default {
  logo: <span className="font-medium">📙 ThetaSpaces1 Docs</span>,
  docsRepositoryBase:
    "https://github.com/Open-Roleplay-AI/openroleplay.ai/tree/main/apps/docs",
  head: (
    <>
      <meta property="og:title" content="ThetaSpaces1 Docs" />
      <meta
        property="og:description"
        content="Learn how to create engaging characters at ThetaSpaces1"
      />
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          ThetaSpaces1
        </a>
        .
      </span>
    ),
  },
};
