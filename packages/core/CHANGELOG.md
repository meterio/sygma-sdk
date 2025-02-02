# Changelog

## [1.4.0](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.3.1...core-v1.4.0) (2024-10-16)


### Features

* semi fungible evm ([#554](https://github.com/sygmaprotocol/sygma-sdk/issues/554)) ([f20d786](https://github.com/sygmaprotocol/sygma-sdk/commit/f20d7867f9a41f90700dc6fb61bc21dec08d34cc))

## [1.3.1](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.3.0...core-v1.3.1) (2024-10-11)


### Bug Fixes

* remove `process` depedency which causes browser integration failure ([#559](https://github.com/sygmaprotocol/sygma-sdk/issues/559)) ([d2eef8d](https://github.com/sygmaprotocol/sygma-sdk/commit/d2eef8dfcea2aef6a40015c840ea39b9fe264505))

## [1.3.0](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.2.3...core-v1.3.0) (2024-09-26)


### Features

* **evm:** Expanding SDK to support Native transfer with optional con… ([#545](https://github.com/sygmaprotocol/sygma-sdk/issues/545)) ([eb57424](https://github.com/sygmaprotocol/sygma-sdk/commit/eb5742473dbb21bc0c18da7e73dcea50b0c769cd))

## [1.2.3](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.2.2...core-v1.2.3) (2024-09-18)


### Bug Fixes

* edge incompatibility  ([#540](https://github.com/sygmaprotocol/sygma-sdk/issues/540)) ([a1270ba](https://github.com/sygmaprotocol/sygma-sdk/commit/a1270ba1af51744d5c72c24e68fa45d0d99ab999)), closes [#539](https://github.com/sygmaprotocol/sygma-sdk/issues/539)

## [1.2.2](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.2.1...core-v1.2.2) (2024-09-10)


### Bug Fixes

* remove json file to fix json import error ([#527](https://github.com/sygmaprotocol/sygma-sdk/issues/527)) ([e2bd0d6](https://github.com/sygmaprotocol/sygma-sdk/commit/e2bd0d6480f98a4676e6870d58a0622b96c96212))

## [1.2.1](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.2.0...core-v1.2.1) (2024-09-10)


### Bug Fixes

* import for utils on core package ([#520](https://github.com/sygmaprotocol/sygma-sdk/issues/520)) ([f718e74](https://github.com/sygmaprotocol/sygma-sdk/commit/f718e74256a0a687916b383179693cf1a31ec66b))

## [1.2.0](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.1.0...core-v1.2.0) (2024-09-09)


### Features

* **bitcoin:** Added support for Bitcoin transfers ([#389](https://github.com/sygmaprotocol/sygma-sdk/issues/389)) ([1f428b1](https://github.com/sygmaprotocol/sygma-sdk/commit/1f428b1b4d8dd0a6b04488f532f3e9d10c5d1b15))

## [1.1.0](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.0.3...core-v1.1.0) (2024-09-05)


### Features

* **evm:** Added support for creating cross chain non fungible asset transfer transactions ([#460](https://github.com/sygmaprotocol/sygma-sdk/issues/460)) ([6c40781](https://github.com/sygmaprotocol/sygma-sdk/commit/6c40781593c927a06a42f593c511520f41d028d5))

## [1.0.3](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.0.2...core-v1.0.3) (2024-09-03)


### Bug Fixes

* typo ([#507](https://github.com/sygmaprotocol/sygma-sdk/issues/507)) ([d91a780](https://github.com/sygmaprotocol/sygma-sdk/commit/d91a7802b2ab2eb0c30e062a7c2a04e8be1904f2))

## [1.0.2](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.0.1...core-v1.0.2) (2024-08-21)


### Bug Fixes

* Unified `tsconfig.json` in all subpackages to eliminate build discrepancies ([#487](https://github.com/sygmaprotocol/sygma-sdk/issues/487)) ([7be55ff](https://github.com/sygmaprotocol/sygma-sdk/commit/7be55ffed0dc079887ba7bfe11917dda4ddf890b))

## [1.0.1](https://github.com/sygmaprotocol/sygma-sdk/compare/core-v1.0.0...core-v1.0.1) (2024-08-20)


### Bug Fixes

* Add low balance validation  ([#481](https://github.com/sygmaprotocol/sygma-sdk/issues/481)) ([db4fcaf](https://github.com/sygmaprotocol/sygma-sdk/commit/db4fcaf879e673674bd5c1cf97b86bab59c4a0ff))

## 1.0.0 (2024-08-13)


### Features

* Added Liquidity helper function in `@buildwithsygma/utils` ([#407](https://github.com/sygmaprotocol/sygma-sdk/issues/407)) ([ad7b041](https://github.com/sygmaprotocol/sygma-sdk/commit/ad7b041fd0ae510e3b91cf171ed9db15fccc1a2a))
* btc interfaces definition ([#387](https://github.com/sygmaprotocol/sygma-sdk/issues/387)) ([57073e1](https://github.com/sygmaprotocol/sygma-sdk/commit/57073e1f9fbb828096c360b845f1cda1f343de2d))
* Implement fungible EVM transfers v3 ([#375](https://github.com/sygmaprotocol/sygma-sdk/issues/375)) ([f0806d3](https://github.com/sygmaprotocol/sygma-sdk/commit/f0806d3eb446c4228ca4956ebfcf498c51d7c406))
* Implement fungible substrate transfers  ([#378](https://github.com/sygmaprotocol/sygma-sdk/issues/378)) ([a1f0b50](https://github.com/sygmaprotocol/sygma-sdk/commit/a1f0b50ea8d90046595d72d876f012cbeb4048f2))
* Implement generic EVM-&gt;EVM transfers ([#392](https://github.com/sygmaprotocol/sygma-sdk/issues/392)) ([a24e1e7](https://github.com/sygmaprotocol/sygma-sdk/commit/a24e1e78c2945458a5891d82c695dc84640c5bdd))
* Lykhoyda/fix address format for destination ([#400](https://github.com/sygmaprotocol/sygma-sdk/issues/400)) ([6dfa9d2](https://github.com/sygmaprotocol/sygma-sdk/commit/6dfa9d238cfd6ab9cade9fae4cd33497d07d5d96)), closes [#367](https://github.com/sygmaprotocol/sygma-sdk/issues/367)


### Bug Fixes

* separation of rp configs ([#433](https://github.com/sygmaprotocol/sygma-sdk/issues/433)) ([1fc3931](https://github.com/sygmaprotocol/sygma-sdk/commit/1fc393170d5f495854eeba0f1f7c41b3e3ae4c4e))


### Miscellaneous Chores

* release 1.0.0 ([bb6a505](https://github.com/sygmaprotocol/sygma-sdk/commit/bb6a5053d843960f445f0dacebe101745f4d908f))
