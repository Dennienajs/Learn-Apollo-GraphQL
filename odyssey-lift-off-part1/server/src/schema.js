const { gql } = require('apollo-server');

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    "Url of the track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Url of the author's profile picture"
    photo: String
  }

  "Query to get tracks array for the homepage grid"
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]
    "Query to get a track by id"
    track(id: ID!): Track
  }
`;

module.exports = typeDefs;
