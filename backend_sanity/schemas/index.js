import works from "./works";
import testimonials from "./testimonials";
import brands from "./brands";
import abouts from "./abouts";
import skills from "./skills";
import workExperience from "./workExperience";
import experiences from "./experiences";
import contact from "./contact";




export const schemaTypes = [works, testimonials, brands, abouts, skills, workExperience, experiences, contact]

// // First, we must the schema creator 
// import createSchema from "part:@sanity/base/schema-creator";

// // Then import schema types from any plugins that might expose them
// import SchemaTypes from "all:part:@sanity/base/schema-type";
// import testimonials from "./testimonials";

// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema ({
//     // We name our schema
//     name: "default",
//     // Then proceed to concatenate our document type to the ones provided by any plugins that are installed
//     types: SchemaTypes.concat([
//         // Your types here!
//         testimonials
//     ]),
// })
