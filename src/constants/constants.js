export const SUPPORTED_CHAINS = [1, 30, 31, 5777]

export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,
  RSK_MAINNET: 30,
  RSK_TESTNET: 31,
}

export const NETWORK_LABELS = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GOERLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.RSK_MAINNET]: null,
  [ChainId.RSK_TESTNET]: 'Testnet',
}

export const adminAccount = '0xD046b0b7DD1d15C84eE0733E085045B040db0b03'.toLowerCase()
