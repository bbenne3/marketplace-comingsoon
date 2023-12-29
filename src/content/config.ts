import { z, defineCollection } from "astro:content";

const metaCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const stepsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      step: z.number(),
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  steps: stepsCollection,
  meta: metaCollection,
};
