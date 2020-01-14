const groups = [
  {
    id: 1,
    name: "Travel Group",
    slug: "travel-group-1",
    moderatorId: 1,
    neighbourhoodId: 3,
    description: "Travel ideas within NZ"
  },
  {
    id: 2,
    name: "Old Auckland",
    slug: "old-auckland-2",
    moderatorId: 3,
    neighbourhoodId: 2,
    description: "Celebrating Auckland from yesterday"
  },
  {
    id: 3,
    name: "AKL Central",
    slug: "akl-central",
    moderatorId: 5,
    neighbourhoodId: 1,
    description: "All things Auckland Central"
  },
  {
    id: 4,
    name: "Book Lovers",
    slug: "booklovers",
    moderatorId: 2,
    neighbourhoodId: 4,
    description: "For anyone that loves to read"
  },
  {
    id: 5,
    name: "Craft Club",
    slug: "for-the-love-of-all-things-tiny",
    moderatorId: 4,
    neighbourhoodId: 2,
    description: "Do you love crafts?"
  },
  {
    id: 6,
    name: "IT & Tech Enthusiasts",
    slug: "it",
    moderatorId: 1,
    neighbourhoodId: 8,
    description: "All about tech"
  },
  {
    id: 7,
    name: "Pets of Auckland",
    slug: "pets-of-auckland",
    moderatorId: 4,
    neighbourhoodId: 5,
    description: "All pet owners welcome"
  },
  {
    id: 8,
    name: "Volunteering Group",
    slug: "volunteers",
    moderatorId: 1,
    neighbourhoodId: 3,
    description: "Volunteer work to make Auckland a better place"
  },
  {
    id: 9,
    name: "Yoga",
    slug: "yoga-2",
    moderatorId: 2,
    neighbourhoodId: 6,
    description: "All things yoga"
  },
  {
    id: 10,
    name: "Vegans",
    slug: "vegans",
    moderatorId: 2,
    neighbourhoodId: 4,
    description: "Vegan recipe sharing"
  }
];

const moderators = [
  { id: 1, name: "Jennie" },
  { id: 2, name: "Rafik" },
  { id: 3, name: "Jeremy" },
  { id: 4, name: "Karthik" },
  { id: 5, name: "Josh" }
];

const neighbourhoods = [
  { id: 1, name: "Parnell" },
  { id: 2, name: "Remuera" },
  { id: 3, name: "Grafton" },
  { id: 4, name: "Orakei" },
  { id: 5, name: "Newmarket" },
  { id: 6, name: "Eden Terrace" },
  { id: 7, name: "Auckland Central" },
  { id: 8, name: "Epsom" }
];

const newGroup = {
  id: null,
  name: "",
  moderatorId: null,
  description: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newGroup,
  groups,
  moderators,
  neighbourhoods
};
