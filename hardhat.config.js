require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
module.exports = {
  solidity: '0.8.3',
  networks: {
    rinkeby: {
      url: "WR1pS0okONs62ONyJEZ5bxkJuunwbKUm",
      accounts: ["94799288ee480966d5f7b2007841aa919a4ac38fd35a2150f1c5797f714b9fe6"],
    },
  },
}