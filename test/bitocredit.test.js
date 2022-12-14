const Bitocredit = require("../lib/Bitocredit");

const baseurl = "";
const token = "";
const wallet_id = "";
const transaction_id = "";
const wallet_address = "";
const network = "";

const bitocredit = new Bitocredit(baseurl, token);

test("create wallet", async () => {
  var res = await bitocredit.createWallet(wallet_id , network);
  expect(res.status).toBe(200);
  expect(res.message).toBe("ok");
});

test("transaction check", async () => {
  var res = await bitocredit.transactionCheck(transaction_id , wallet_address);
  expect(res.status).toBe(200);
  expect(typeof res.message).toBe("string");
});

test("transaction recovery", async () => {
  var res = await bitocredit.transactionRecovery(transaction_id);
  expect(res.status).toBe(200);
  expect(typeof res.message).toBe("string");
});

test("transaction fee", async () => {
  var res = await bitocredit.transactionFee();
  expect(res.status).toBe(200);
  expect(res.message).toBe("ok");
  expect(typeof parseFloat(res.fee)).toBe("number");
});

test("transaction fee", async () => {
  var res = await bitocredit.transactionFee();
  expect(res.status).toBe(200);
  expect(res.message).toBe("ok");
  expect(typeof parseFloat(res.fee)).toBe("number");
});

test("transaction example", async () => {
  var res = await bitocredit.transactionExample(transaction_id);
  expect(res.status).toBe(200);
  expect(res.message).toBe("ok");
  expect(typeof res.address).toBe("string");
  expect(typeof parseFloat(res.amount)).toBe("number");
  expect(typeof parseFloat(res.user_id)).toBe("number");
});
