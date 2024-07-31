<p align="center">
<a href="https://github.com/codico-bit/privroleplay1">
<img src="" alt="Logo">
</a>

  <h3 align="center">Theta Space</h3>

  <p align="center">
    Theta Space - 
    <br />
    <br />
    <a href="https://discord.gg/9BxwbfjXZC">Discord</a>
    ·
    <a href="https://www.thetaspace.fun">Website</a>
    ·
  </p>
</p>


Note: We are constantly updating the repository, please visit our website for the latest features.

<br/>

# AI characters and roleplay for everyone

Theta Space is a platform to interact with AI personalities, models and characters over the Theta Network!
This is the public open source repository, with most of our working code open for public use.
## Features

- **Open source models:** Choose from a variety of AI models supported by [OpenRouter](https://openrouter.ai/) or bring yours, create your very own AI characters.
- **Customize Characters:** Create your own characters, personas and UI unique.
- **Generate Images:** Create images with open-source AI models.
- **Use TFuel for interacting** Use TFuel to Buy crystals, supported via Metamask wallet 
- **ElevenLabs Voice:** Create characters that can talk to users with a realistic voice.
- **Automatic Translation:** Talk with your favorite AI models in your languages. [Supported Languages](https://support.deepl.com/hc/en-us/articles/360019925219-Languages-included-in-DeepL-Pro)
- **Group Chat (Coming soon):** Invite your favorite characters to one chat room and chat together.

## Supported Models

Check out [here](https://www.thetaspace.fun/models) for supported models.


### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app for the service
- `docs`: a [Next.js](https://nextjs.org/) app for developer and user documentation
- `@repo/ui`: a stub React component library
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```bash
pnpm build
```

### Run Locally

To develop all apps and packages, run the following command:

```bash
# Run frontend server
pnpm install
pnpm dev

# Run backend server
cd apps/web
npx convex dev
```
