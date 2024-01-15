import { z, defineCollection } from "astro:content";

const metaCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const personasCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      type: z.string().refine((val) => ["host", "provider"].includes(val), {
        message: "type must be one of [host, provider]",
      }),
      title: z.string(),
      description: z.string(),
      image: image(),
      examples: z.string().array().min(3).max(5),
    }),
});

const stepsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      step: z.number(),
      icon: image(),
      text: z.string(),
    }),
});

export const collections = {
  steps: stepsCollection,
  meta: metaCollection,
  personas: personasCollection,
};
