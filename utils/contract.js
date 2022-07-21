import getWeb3 from "./web3";
let contract;
import Cinema from './contracts/Cinema.json';
const getContract=async()=>{
    let web3= await getWeb3();
    let id = await web3.eth.net.getId();
    // console.log("id",id)
    let address = Cinema.networks["4"].address;
    contract = await new web3.eth.Contract(Cinema.abi,address);
    return contract;
}

export default getContract;