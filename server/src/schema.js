const {gql} = require('apollo-server');

const typeDefs = gql`
    "Return all the necessary tracks to display on the home page"
    type Query {
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        "ID index"
        id: ID!
        "Track's title"
        title: String!
        "URL to track's cover image"
        thumbnail: String!
        "Track's length in minutes"
        length: Int
        "Number of modules this track contains"
        modulesCount: Int
        "Track's author, as defined in a separate object"
        author: Author!
    }

    "Author of a complete Track or a Module"
    type Author {
        "ID index"
        id: ID!
        "Author's full name"
        name: String!
        "URL to author's profile picture"
        photo: String!
    }`;

module.exports = typeDefs;