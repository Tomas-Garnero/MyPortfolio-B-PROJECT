import { createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    
    projectId: "bgn23k8l",
    dataset: "production",
    apiVersion: "2023-03-27",
    useCdn: true,
    token: import.meta.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);