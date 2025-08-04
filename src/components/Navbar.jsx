import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
    const [address,setAddress] = useState("");
    const [tokenBalancesInfo, setTokenBalancesInfo] = useState();

    const handleChange = (e) => {
        setAddress(e.target.value);
    }

    const seeWallet = async() => {
        const url = `https://api.covalenthq.com/v1/eth-mainnet/address/${address}/balances_v2/`;
        const options = {method: 'GET', headers: {Authorization: 'Bearer '}, body: undefined};

        try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setTokenBalancesInfo(data);
        } catch (error) {
        console.error(error);
        }
        console.log(address);
    }


    return (
        <>
            <nav className="m-4 flex gap-4 md:gap-8">
                <div className="text-white bg-jet p-3 w-1/5 md:w-2/10 rounded-lg text-center flex items-center justify-center">
                 <a className="font-bit-count text-3xl" href="./">{window.innerWidth > 768 ? "WalletSeer" : "WS"}</a>
                </div>
                <div className="flex gap-2 items-center justify-center text-white bg-jet p-3 w-4/5 md:w-8/10 rounded-lg">
                 <div className="relative">
                    <input type="text" className="outline-none py-1 px-2 border-white border-1 rounded-md indent-2" placeholder="Enter Wallet Address..." onChange={handleChange} />
                    <div className="absolute right-[1px] top-[1px] bg-white text-dim-gray p-1 rounded-r-md"><CiSettings /></div>
                 </div>
                    <button className="bg-dim-gray text-white p-2 md:p-4 rounded-lg" onClick={seeWallet}><IoMdSearch /></button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;