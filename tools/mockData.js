// /neighbourly/group/{id} API - finds a group by id

const groups = [
  {
    id: 7571,
    name: "Travel Group",
    slug: "travel-group-1",
    description:
      "Throw around ideas on travel, overseas and in New Zealand. Weekends away, cruising etc. Some times it is nice to travel with a group or couples who share the same interests.",
      moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },

  {
    id: 15875,
    name: "Auckland Movie Club",
    slug: "auckland-movie-club",
    description: "A place where movie lovers can gather and watch movies",
    moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },

  {
    id: 8295,
    name: "AKL central",
    slug: "akl-central",
    description: "Around AKL central",
    moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },

  {
    id: 66,
    name: "Booklovers",
    slug: "booklovers",
    description:
      "A group for anyone who loves to read!  This is a place to recommend, swap and discuss favourite books, chat about bookstores and literary events, and indulge in other bibliophile matters.",
      moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },

  {
    id: 2684,
    name: "FOR THE LOVE OF ALL THINGS CRAFTY",
    slug: "for-the-love-of-all-things-tiny",
    description:
      "Do you love crafts? This group is for everyone who can create and/or who has a real appreciation for what goes into hand crafting fine objects. You don't have to be an established  artist but someone who really enjoys the process of creating. Please share your work and feedback here and inspire the rest of us.",
      moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },

  {
    id: 2500,
    name: "IT",
    slug: "it",
    description:
      "All about Information Technology. Need help with your computer or gadget? Share with us here..",
      moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },

  {
    id: 21973,
    name: "Pets of Auckland",
    slug: "pets-of-auckland",
    description:
      "A place to swap advice, share sweet photos, post ideas and tips. All pet owners are welcome.",
      moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      imageType: "attachments",
      image: "5c3be35161c042.02386669.png",
      isStatic: false
    },
  },

  {
    id: 21752,
    name: "Volunteers",
    slug: "volunteers",
    description: "Any volunteer work for making Auckland better place",
    moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },

  {
    id: 17507,
    name: "Yoga",
    slug: "yoga-2",
    description: "All things yoga, from private yoga to yoga group classes!",
    moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      imageType: "attachments",
      image: "582587971d9819.80270941.jpeg",
      isStatic: false
    },
  },

  {
    id: 15417,
    name: "Vegans",
    slug: "vegans",
    description: "For recipe sharing, food sharing and vegan ideas",
    moderatorUserId: 1,
    logo: {
      imageBasePath: "/images/cache",
      image: "/bundles/neighbourlystatic/img/default-business.png",
      isStatic: true
    },
  },
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
  moderatorUserId: null,
  description: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newGroup,
  groups,
  moderators,
  neighbourhoods
};
