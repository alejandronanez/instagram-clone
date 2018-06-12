const faker = require('faker');
const getImageUrl = imageId =>
  `https://picsum.photos/2000/2000/?image=${imageId}`;

function getPhotos(totalPhotos = 20) {
  return Array.from({ length: totalPhotos }).map(() => ({
    id: faker.random.uuid(),
    likes: faker.random.number({ min: 0, max: 500 }),
    liked: faker.random.boolean(),
    bookmarked: faker.random.boolean(),
    photo: getImageUrl(faker.random.number({ min: 1, max: 999 })),
  }));
}

function getUsers(totalUsers = 50) {
  return Array.from({ length: totalUsers }).map(() => ({
    id: faker.random.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    username: faker.internet.userName().toLowerCase(),
    avatar: faker.internet.avatar(),
  }));
}

module.exports = () => {
  return {
    photos: getPhotos(),
    users: getUsers(),
  };
};
