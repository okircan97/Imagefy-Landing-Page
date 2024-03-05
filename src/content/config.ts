import { defineCollection, z} from "astro:content";

const industriesCollection = defineCollection({
    schema: ({image}) => z.object({
        image1: image(),
        image2: image(),
        image3: image(),
        title: z.string(),
        description: z.string(),
        benefit1_title: z.string(),
        benefit2_title: z.string(),
        benefit3_title: z.string(),
        benefit1: z.string(),
        benefit2: z.string(),
        benefit3: z.string()
    })
})

const postsCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string()
    })
})

export const collections = {
    posts: postsCollection,
    industries: industriesCollection,
};