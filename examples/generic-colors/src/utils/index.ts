import { ethers } from "ethers";

const decodeColor = (color: string) => `#${ethers.utils.hexStripZeros(color).substring(2).toUpperCase()}`

export { decodeColor }