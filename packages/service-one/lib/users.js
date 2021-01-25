class UserStore {
  users = [
    {
      id: 1,
      name: "Joe Bloggs",
      email: "jbloggs@notreallyanemail.com",
    },
  ];

  getUserById(id) {
    return this.users.find((user) => user.id === parseInt(id));
  }

  updateUser(user) {
    this.users = this.users.map((_user) =>
      _user.id === user.id ? user : _user
    );
  }

  saveUser(user) {
    const savedUser = this.getUserById(user.id);

    if (!user) return false;

    if (savedUser) {
      this.updateUser(user);
    } else {
      this.users.push(user);
    }

    return true;
  }
}

const userStore = new UserStore();

module.exports = userStore;
