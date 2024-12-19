const getNames = (users) => users.map(user => user.name);

const getVerifiedUsers = (users) => users.filter(user => user.verified);

const lessThan1k = (users) => users.filter(user => user.followers < 1000);

const searchUsername = (users, username) => users.find(user => user.username === username);
// const searchUsername = (users, username) => users.filter(user => user.username === username);

const longWinded = (users) => users.sort((a, b) => b.bio.length - a.bio.length)[0];

const follower = (users) => users.sort((a, b) => a.followers - b.followers);

const users = [
    { name: 'Reuben O.',
      username: '@blood_pressure_killa',
      followers: 1,
      verified: false,
      bio: "It's an honor and a privilege."
    },
    { name: 'Laisha C',
      username: '@passaic_papi',
      followers: 700,
      verified: true,
      bio: "My commute is longer than yours."
    },
    { name: 'Anne H.',
      username: '@i_love_bambas',
      followers: 12,
      verified: false,
      bio: "@mayabee is my best friend"
    },
    { name: 'Steph S.',
      username: '@queen_of_the_kew',
      followers: 1200,
      verified: false,
      bio: "✌🏼"
    },
    { name: 'Carmen S',
      username: '@omar_apollo_fanclub',
      followers: 1200000,
      verified: true,
      bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
    }
  ]
// console.log(getNames(users))
// console.log(getVerifiedUsers(users))
// console.log(lessThan1k(users))
// console.log(searchUsername(users, "@passaic_papi"))
// console.log(longWinded(users))
// console.log(follower(users))