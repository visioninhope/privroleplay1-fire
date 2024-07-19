import { MetadataRoute } from "next";
import { api } from "../convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";

const client = new ConvexHttpClient(
  process.env["NEXT_PUBLIC_CONVEX_URL"] as string,
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const characters = await client.query(api.characters.listBackend, {});
  const images = await client.query(api.public.listImages, {});

  return [
    {
      url: "https://www.thetaspace.fun",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.thetaspace.fun/models",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.thetaspace.fun/crystals",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...characters.map((character) => ({
      url: `https://www.thetaspace.fun/character/${character._id}`,
      lastModified: new Date(character.updatedAt),
      changeFrequency: "daily" as "daily",
      priority: 0.8,
    })),
    ...images.map((image) => ({
      url: `https://www.thetaspace.fun/image/${image._id}`,
      lastModified: new Date(image._creationTime),
      changeFrequency: "daily" as "daily",
      priority: 0.8,
    })),
  ];
}
