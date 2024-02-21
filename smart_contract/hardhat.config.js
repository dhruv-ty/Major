// https://eth-sepolia.g.alchemy.com/v2/Iy3OdO99ElhaZiCjZEMQXxFcwH8njphE

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Iy3OdO99ElhaZiCjZEMQXxFcwH8njphE',
      accounts: ['cbdb7b00ae22df0766ecf686be49a595a7246e7a780f805f940d3985cb98c7d0']
    }
  }
}