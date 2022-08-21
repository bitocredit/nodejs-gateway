// Modules
const axios = require("axios").default;
const querystring = require("node:querystring");

class Bitocredit {
  // constructor
  constructor(baseurl, token) {
    this.baseurl = baseurl;
    this.token = token;
    this.header = {
      "Content-Type": "application/json",
    };
  }

  // api create wallet method
  async createWallet(wallet_id) {
    var res = await this.#_request(
      "create/wallet",
      "post",
      { wallet_id},
      true
    );
    return res;
  }

  // api transaction check method
  async transactionCheck(transaction_id, wallet_address) {
    var res = await this.#_request(
      "transaction/check",
      "post",
      { transaction_id, wallet_address },
      true
    );
    return res;
  }

  // api transaction recovery method
  async transactionRecovery(transaction_id) {
    var res = await this.#_request(
      "transaction/recovery",
      "post",
      { transaction_id },
      true
    );
    return res;
  }

  // api transaction fee method
  async transactionFee() {
    var res = await this.#_request("transaction/fee", "get", {}, true);
    return res;
  }

  // api transaction example method
  async transactionExample(transaction_id) {
    var res = await this.#_request(
      "transaction/example/callback",
      "post",
      { transaction_id },
      false
    );
    return res;
  }

  // send request method
  async #_request(path, method, params = {}, auth = false) {
    var fullURL = this.baseurl + path;

    if (auth) fullURL = fullURL + "/" + this.token;

    if (method == "get" && params != {}) {
      fullURL = fullURL + "?" + querystring.stringify(params);
      params = {};
    }

    try {
      var { data } = await axios({
        method,
        url: fullURL,
        data: params,
        headers: this.header,
      });
    } catch (e) {
      return e.response.data;
    }
    return data;
  }
}

module.exports = exports = Bitocredit;
