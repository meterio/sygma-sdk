import type { SygmaConfig } from '../types.js';
import { FeeHandlerType, Network, ResourceType } from '../types.js';

export const configForRegtest: SygmaConfig = {
  domains: [
    {
      id: 1,
      caipId: '',
      chainId: 1337,
      name: 'Ethereum 1',
      nativeTokenAdapter: '',
      type: Network.EVM,
      bridge: '0x6CdE2Cd82a4F8B74693Ff5e194c19CA08c2d1c68',
      handlers: [
        {
          type: ResourceType.FUNGIBLE,
          address: '0x02091EefF969b33A5CE8A729DaE325879bf76f90',
        },
        {
          type: ResourceType.NON_FUNGIBLE,
          address: '0xC2D334e2f27A9dB2Ed8C4561De86C1A00EBf6760',
        },
        {
          type: ResourceType.PERMISSIONLESS_GENERIC,
          address: '0x156fA85e1df5d69B0F138dcEbAa5a14ca640FaED',
        },
        {
          type: ResourceType.PERMISSIONED_GENERIC,
          address: '0xF956Ba663bd563f585e00D5973E06b443E5C4D65',
        },
      ],
      nativeTokenSymbol: 'eth',
      nativeTokenFullName: 'ether',
      nativeTokenDecimals: BigInt(18),
      blockConfirmations: 1,
      startBlock: BigInt(1),
      feeRouter: '0x1CcB4231f2ff299E1E049De76F0a1D2B415C563A',
      feeHandlers: [
        {
          address: '0x8dA96a8C2b2d3e5ae7e668d0C94393aa8D5D3B94',
          type: FeeHandlerType.BASIC,
        },
        {
          address: '0x30d704A60037DfE54e7e4D242Ea0cBC6125aE497',
          type: FeeHandlerType.PERCENTAGE,
        },
      ],
      resources: [
        {
          resourceId: '0x0000000000000000000000000000000000000000000000000000000000000000',
          type: ResourceType.FUNGIBLE,
          address: '0x37356a2B2EbF65e5Ea18BD93DeA6869769099739',
          symbol: 'ERC20TST',
          decimals: 18,
          caip19: '',
        },
        {
          resourceId: '0x0000000000000000000000000000000000000000000000000000000000000200',
          type: ResourceType.NON_FUNGIBLE,
          address: '0xE54Dc792c226AEF99D6086527b98b36a4ADDe56a',
          symbol: 'ERC721TST',
          decimals: 18,
          caip19: '',
        },
        {
          resourceId: '0x0000000000000000000000000000000000000000000000000000000000000300',
          type: ResourceType.FUNGIBLE,
          address: '0x78E5b9cEC9aEA29071f070C8cC561F692B3511A6',
          symbol: 'ERC20LRTest',
          decimals: 18,
          caip19: '',
        },
      ],
    },
    {
      id: 2,
      caipId: '',
      chainId: 1338,
      name: 'evm2',
      nativeTokenAdapter: '',
      type: Network.EVM,
      bridge: '0x6CdE2Cd82a4F8B74693Ff5e194c19CA08c2d1c68',
      handlers: [
        {
          type: ResourceType.FUNGIBLE,
          address: '0x02091EefF969b33A5CE8A729DaE325879bf76f90',
        },
        {
          type: ResourceType.NON_FUNGIBLE,
          address: '0xC2D334e2f27A9dB2Ed8C4561De86C1A00EBf6760',
        },
        {
          type: ResourceType.PERMISSIONLESS_GENERIC,
          address: '0x156fA85e1df5d69B0F138dcEbAa5a14ca640FaED',
        },
        {
          type: ResourceType.PERMISSIONED_GENERIC,
          address: '0xF956Ba663bd563f585e00D5973E06b443E5C4D65',
        },
      ],
      nativeTokenSymbol: 'eth',
      nativeTokenFullName: 'ether',
      nativeTokenDecimals: BigInt(18),
      blockConfirmations: 1,
      startBlock: BigInt(1),
      feeRouter: '0x1CcB4231f2ff299E1E049De76F0a1D2B415C563A',
      feeHandlers: [
        {
          address: '0x8dA96a8C2b2d3e5ae7e668d0C94393aa8D5D3B94',
          type: FeeHandlerType.BASIC,
        },
        {
          address: '0x30d704A60037DfE54e7e4D242Ea0cBC6125aE497',
          type: FeeHandlerType.PERCENTAGE,
        },
      ],
      resources: [
        {
          resourceId: '0x0000000000000000000000000000000000000000000000000000000000000000',
          type: ResourceType.FUNGIBLE,
          address: '0x37356a2B2EbF65e5Ea18BD93DeA6869769099739',
          symbol: 'ERC20TST',
          decimals: 18,
          caip19: '',
        },
        {
          resourceId: '0x0000000000000000000000000000000000000000000000000000000000000200',
          type: ResourceType.NON_FUNGIBLE,
          address: '0xE54Dc792c226AEF99D6086527b98b36a4ADDe56a',
          symbol: 'ERC721TST',
          decimals: 18,
          caip19: '',
        },
        {
          resourceId: '0x0000000000000000000000000000000000000000000000000000000000000300',
          type: ResourceType.FUNGIBLE,
          address: '0x78E5b9cEC9aEA29071f070C8cC561F692B3511A6',
          symbol: 'ERC20LRTest',
          decimals: 18,
          caip19: '',
        },
      ],
    },
    {
      "id": 4,
      "caipId": "bip122:000000000933ea01ad0ee984209779ba",
      "chainId": 5,
      "bridge": "",
      "name": "Bitcoin-Testnet3",
      "type": Network.BITCOIN,
      "nativeTokenSymbol": "BTC",
      "nativeTokenFullName": "Bitcoin",
      "nativeTokenDecimals": BigInt(8),
      "blockConfirmations": 2,
      "startBlock": BigInt(1),
      "feeAddress": "mkHS9ne12qx9pS9VojpwU5xtRd4T7X7ZUt",
      "resources": [
        {
          "resourceId": "0x0000000000000000000000000000000000000000000000000000000000001000",
          "caip19": "",
          "type": ResourceType.FUNGIBLE,
          "address": "bcrt1pdf5c3q35ssem2l25n435fa69qr7dzwkc6gsqehuflr3euh905l2sjyr5ek",
          "burnable": false,
          "symbol": "BTC",
          "decimals": 8,
          "tweak": "c82aa6ae534bb28aaafeb3660c31d6a52e187d8f05d48bb6bdb9b733a9b42212",
          "script": "51206a698882348433b57d549d6344f74500fcd13ad8d2200cdf89f8e39e5cafa7d5",
          "feeAmount": 100,
        }
      ]
    },
  ],
};
