import { z, defineCollection } from "astro:content";

const metaCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const userTypesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      type: z.string().refine((val) => ["host", "provider"].includes(val), {
        message: "type must be one of [host, provider]",
      }),
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});

const stepsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      step: z.number(),
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});

export const collections = {
  steps: stepsCollection,
  meta: metaCollection,
  userTypes: userTypesCollection,
};
