class CatStore {
  cats = [
    {
      id: 1,
      name: "Mittens",
      type: "Scottish Fold",
      numberOfLikes: 0,
    },
  ];

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
      this.cats.push(cat);
    }

    return true;
  }
}

const catStore = new CatStore();

module.exports = catStore;
