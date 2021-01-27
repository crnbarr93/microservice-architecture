const { subscriber } = require("../../comms");

class CatStore {
  cats = [
    {
      id: 1,
      name: "Mittens",
      type: "Scottish Fold",
      numberOfLikes: 0,
    },
  ];

  onLikedCat(message) {
    const { cat } = JSON.parse(message);
    console.log(message);
    this.cats = this.cats.map((_cat) =>
      _cat.id === cat
        ? { ..._cat, numberOfLikes: _cat.numberOfLikes + 1 }
        : _cat
    );
  }

  getCatById(id) {
    return this.cats.find((cat) => cat.id === parseInt(id));
  }

  updateCat(cat) {
    this.cats = this.cats.map((_user) => (_user.id === cat.id ? cat : _user));
  }

  saveCat(cat) {
    const savedCat = this.getCatById(cat.id);

    if (!cat) return false;

    if (savedCat) {
      this.updateCat(cat);
    } else {
      this.cats.push({ ...cat, id: this.cats.length + 1, numberOfLikes: 0 });
    }

    return true;
  }

  deleteCat(catID) {
    this.cats = this.cats.filter((cat) => cat.id !== parseInt(catID));
  }
}

const catStore = new CatStore();

subscriber.on("liked_cat", (message) => catStore.onLikedCat(message));

module.exports = catStore;
