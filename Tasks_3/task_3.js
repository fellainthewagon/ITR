const axios = require("axios");

class Users {
  constructor(n = 1) {
    this.amount = n;
  }

  async getUsers() {
    try {
      const response = await axios(this.#uriBuilder());
      const data = response.data.results;
      this.#loggerService(data);
    } catch (error) {
      log.error(error);
    }
  }

  #uriBuilder() {
    return `https://randomuser.me/api?results=${this.amount}&inc=name,dob,location,email,phone&noinfo`;
  }

  #loggerService(data) {
    data.forEach(({ name, dob, location, email, phone }) => {
      const displayData = {};

      displayData["Name"] = `${name.title} ${name.first} ${name.last}`;
      displayData["Date of Birth"] = `${dob.date.split("T")[0]}`;
      displayData["Country, City"] = `${location.country}, ${location.city}`;
      displayData["Email"] = `${email}`;
      displayData["Phone"] = `${phone}`;

      console.table(displayData);
    });
  }
}

const users = new Users(5);
users.getUsers();
