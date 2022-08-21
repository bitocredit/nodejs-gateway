<h3 align="center" >Bitocredit Nodejs package</h3>
<h5>nodejs wrapper for Bitocredit API</h5>

# usage
install package using npm
<br>
<br>
```bash
npm install bitocredit-gateway
```

<br>
<br>

and use package like this:

```javascript
    const Bitocredit = require("bitocredit-gateway");
    
    const baseurl = "https://bitocredit.com/api/";
    const token = "TOKEN"; // fill your token
    
    const Gateway = new Bitocredit(baseurl , token);
    
    Gateway.createWallet("wallet_id") // replace wallet_id with your wallet id
           .then((data) => {
            console.log(data);
           })
           .catch((err) => {
            console.log(err);
           });

```

# methods

- [createWallet](#createwallet)
- [transactionCheck](#transactioncheck)
- [transactionRecovery](#transactionrecovery)
- [transactionFee](#transactionfee)
- [transactionExample](#transactionexample)


# <a id="createwallet">createWallet</a>

This method used for creating wallet for user
<br>
<br>
endpoint : https://bitocredit.com/api/create/wallet/{token}
<br>
<br>

```javascript
    Gateway.createWallet("wallet_id") // replace wallet_id with your wallet id
           .then((data) => {
            console.log(data);
           })
           .catch((err) => {
            console.log(err);
           });

```

# <a id="transactioncheck">transactionCheck</a>

This method used for check a transaction is confirmed or not
<br>
<br>
endpoint : https://bitocredit.com/api/transaction/check/{token}
<br>
<br>

```javascript
    Gateway.transactionCheck("transaction_hash" , "wallet_address") // replace transaction_hash and wallet_address with your transaction hash and wallet address
           .then((data) => {
            console.log(data);
           })
           .catch((err) => {
            console.log(err);
           });

```

# <a id="transactionrecovery">transactionRecovery</a>

This method used for check a transaction that is lost in blockchain
<br>
<br>
endpoint : https://bitocredit.com/api/transaction/recovery/{token}
<br>
<br>

```javascript
    Gateway.transactionRecovery("transaction_hash") // replace transaction_hash with your transaction hash
           .then((data) => {
            console.log(data);
           })
           .catch((err) => {
            console.log(err);
           });

```


# <a id="transactionfee">transactionFee</a>

This method used for check a transaction that is lost in blockchain
<br>
<br>
endpoint : https://bitocredit.com/api/transaction/fee/{token}
<br>
<br>

```javascript
    Gateway.transactionFee()
           .then((data) => {
            console.log(data);
           })
           .catch((err) => {
            console.log(err);
           });
```


# <a id="transactionexample">transactionExample</a>

Please only use this api for test ! it's only an example to show how the server sends data to callback after payment confirmation
<br>
<br>
endpoint : https://bitocredit.com/api/transaction/example/callback
<br>
<br>

```javascript
    Gateway.transactionExample("transaction_hash") // replace transaction_hash with your transaction hash
           .then((data) => {
            console.log(data);
           })
           .catch((err) => {
            console.log(err);
           });

```