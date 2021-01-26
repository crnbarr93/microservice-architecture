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
      this.cats.push({ ...cat, id: this.cats.length + 1, numberOfLikes: 0 });
    }

    return true;
  }

  deleteCat(catID) {
    this.cats = this.cats.filter((cat) => cat.id !== parseInt(catID));
  }
}

const catStore = new CatStore();

module.exports = catStore;
