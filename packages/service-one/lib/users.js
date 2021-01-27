const { fetchCatById } = require("../fetch/cats");
const { publisher } = require("../../comms");

class User {
  constructor(id, name, email, likedCats = []) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.likedCats = likedCats;
  }

  update(user) {
    const keys = Object.keys(user);

    keys.forEach((key) => (this[key] = user[key]));
  }

  likeCat(catId) {
    this.likedCats.push(catId);
    publisher.publish(
      "liked_cat",
      JSON.stringify({ user: this.id, cat: catId })
    );
  }

  async getLikedCats() {
    return Promise.all(
      this.likedCats.map(async (catId) => await fetchCatById(catId))
    );
  }
}

class UserStore {
  users = [new User(1, "Joe Bloggs", "jbloggs@notreallyanemail.com", [1])];

  getUserById(id) {
    return this.users.find((user) => user.id === parseInt(id));
  }

  createUser(user) {
    this.users.push(new User(this.users.length + 1, user.name, user.email));
  }

  saveUser(user) {
    if (!user) return false;

    const savedUser = this.getUserById(user.id);

    if (savedUser) {
      savedUser.update(user);
    } else {
      this.createUser(user);
    }

    return true;
  }

  deleteUser(userID) {
    this.users = this.users.filter(({ id }) => id !== parseInt(userID));
  }

  getUsersByLikedCat(catId) {
    return this.users.filter((user) => user.likedCats.includes(catId));
  }
}

const userStore = new UserStore();

module.exports = userStore;
