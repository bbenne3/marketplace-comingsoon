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

const membersCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      pic: image(),
      name: z.string(),
      role: z.string(),
      description: z.string().max(75),
      order: z.number().min(0).max(10)
    }),
});

const legalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    updatedDate: z.string(),
  }),
})

export const collections = {
  legal: legalCollection,
  meta: metaCollection,
  members: membersCollection,
  personas: personasCollection,
  steps: stepsCollection,
};
