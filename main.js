// js for zitat.html
const app = Vue.createApp({
  data() {
    return {
      message: "Search your quote",
      myQuotes: [
        {
          name: "Dr. Seuss",
          quote:
            " You’re off to great places, today is your day. Your mountain is waiting, so get on your way. ",
        },
        {
          name: "Mickey Rooney",
          quote: " You always pass failure on the way to success. ",
        },
        {
          name: "Wolfgang Riebe",
          quote: " No one is perfect - that’s why pencils have erasers.",
        },
        {
          name: "Bonnie Blair",
          quote:
            " Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.",
        },
        {
          name: "A.A. Mine",
          quote:
            " You’re braver than you believe, and stronger than you seem, and smarter than you think.",
        },
        {
          name: "Albert Camus",
          quote: "Men must live and create. Live to the point of tears.",
        },
      ],

      deletedQ: [],

      searchItem: [],
      searchValue: "",
      searchIndex: "",
      displayName: "",
      displayQuote: "",
      delIndex: "",
      foundedN: "",
      foundedQ: "",
      newAuthor: "",
      newQuote: "",
    };
  },

  methods: {
    // search index

    getByIndex() {
      var number = this.searchIndex;

      if (this.searchIndex > this.myQuotes.length) {
        alert("Index number is too high");
      }

      this.displayName = this.myQuotes[number].name;
      this.displayQuote = this.myQuotes[number].quote;

      this.searchIndex = "";
    },

    // delete quote
    delUser() {
      if (this.delIndex) {
        var d = this.myQuotes.splice(this.delIndex, 1);
      }

      // var newQ = new Sil(this.name, this.quote);
      this.deletedQ.push(d);
    },

    // searchName() {},

    getByName() {
      let founded = this.myQuotes.find((item) => item.name == this.searchValue);
      console.log(founded.name + " " + founded.quote);
      this.searchItem.push(founded);
      this.searchValue = "";
    },

    addNewQuote() {
      var addNew = new newQuote(this.newAuthor, this.newQuote);
      this.myQuotes.push(addNew);
      this.newAuthor = "";
      this.newQuote = "";
    },
  },

  computed: {
    filteredList() {
      return this.myQuotes.filter((item) => {
        this.searchValue.toLowerCase();

        return item.name.toLowerCase().includes(this.searchValue);
      });
    },
  },
});
app.mount("#myapp");

// new object

function Sil(name, quote) {
  this.name = name;
  this.quote = quote;
}

function newQuote(name, quote) {
  this.name = name;
  this.quote = quote;
}
