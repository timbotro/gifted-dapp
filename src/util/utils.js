import converter from "hex2dec"



export function returnGiftCode(address, pass){
    const hexPass = converter.decToHex(pass)
   return address.replaceAll("\"","").slice(2).concat(hexPass.slice(2))
}

export function decodeGiftCode(giftCode){
    const pass = converter.hexToDec(`0x${giftCode.slice(40)}`)
    return {address: `0x${giftCode.slice(0,40)}`, pass}
}

export function isValid(string) {
    const result =
      string.length === 42 &&
      string.slice(0, 2) === "0x" &&
      !string.includes(":", "'", '"', "[", "]");
    return result;
  };

  export function commonInteract(){
    return ({})
  }

  export const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));