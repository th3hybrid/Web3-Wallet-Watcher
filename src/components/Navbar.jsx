import { useState,useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import useStore from "../utils/Store";
const COVALENT_API_KEY = import.meta.env.VITE_COVALENT_API_KEY;
import { ToastContainer, toast } from 'react-toastify';
import { isAddress } from "ethers";


const Navbar = () => {

    const [address,setAddress] = useState("");
    const {setTokenBalancesInfo,setNftBalancesInfo,setRecentTransactionsInfo,setIsLoading} = useStore();
    const [width, setWidth] = useState(window.innerWidth);
    const [chainName, setChainName] = useState("");

    const handleChangeChain = (e) => {
        setChainName(e.target.value);
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {
        const addressStored = JSON.parse(localStorage.getItem('address')) || "";
        const chainNameStored = JSON.parse(localStorage.getItem('chainName')) || "";
        if(addressStored === "" || chainNameStored === "") return;
        setAddress(addressStored);
        setChainName(chainNameStored);
        seeWallet();
    }, [address,chainName]);

    const handleChange = (e) => {
        setAddress(e.target.value);
    }

    const seeWallet = async() => {
        if (!isAddress(address)) {
            toast('Invalid Address', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }
        if (chainName === "") {
            toast('Invalid Chain Name', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }
        const nftUrl = `https://api.covalenthq.com/v1/${chainName}/address/${address}/balances_nft/`;
        const nftOptions = {method: 'GET', headers: {Authorization: `Bearer ${COVALENT_API_KEY}`}, body: undefined};

     
        const txUrl = `https://api.covalenthq.com/v1/${chainName}/address/${address}/transactions_v3/`;
        const txOptions = {method: 'GET', headers: {Authorization: `Bearer ${COVALENT_API_KEY}`}, body: undefined};

        const tokenUrl = `https://api.covalenthq.com/v1/${chainName}/address/${address}/balances_v2/`;
        const tokenOptions = {method: 'GET', headers: {Authorization: `Bearer ${COVALENT_API_KEY}`}, body: undefined};

        try {
        setIsLoading(true);
        const tokenResponse = await fetch(tokenUrl, tokenOptions);
        const nftResponse = await fetch(nftUrl,nftOptions);
        const txResponse = await fetch(txUrl,txOptions);
        const tokenData = await tokenResponse.json();
        const nftData = await nftResponse.json();
        const txData = await txResponse.json();
        console.log(tokenData);
        console.log(nftData);
        console.log(txData);
        localStorage.setItem('address', JSON.stringify(address));
        localStorage.setItem('chainName', JSON.stringify(chainName));
        setTokenBalancesInfo(tokenData.data.items);
        setNftBalancesInfo(nftData.data.items);
        setRecentTransactionsInfo(txData.data.items);
        setIsLoading(false);
        } catch (error) {
        console.error(error);
        }
    }

    return (
        <>
            <nav className="m-5 flex gap-4 md:gap-8">
                <div className="text-white bg-jet p-3 w-1/5 md:w-2/10 rounded-lg text-center flex items-center justify-center">
                 <a className="font-bit-count text-3xl" href="./">{width > 768 ? "WalletSeer" : "WS"}</a>
                </div>
                <div className="flex gap-3 items-center px-4 text-white bg-jet w-4/5 md:w-8/10 rounded-lg">
                 <input type="text" className="outline-none py-1 px-1 border-white border-2 rounded-md w-4/5" placeholder="Enter Wallet Address..." value={address} onChange={handleChange} />
                 <select value={chainName} onChange={handleChangeChain} className="w-1/5 border-white border-b-2 focus:outline-none block w-full bg-jet">
                    <option value="" disabled>Select Chain</option>
                    <option value="eth-mainnet">Ethereum</option>
                    <option value="matic-mainnet">Polygon</option>
                    <option value="bsc-mainnet">Binance Smart Chain</option>
                    <option value="avalanche-mainnet">Avalanche</option>
                    <option value="arbitrum-mainnet">Arbitrum</option>
                    <option value="optimism-mainnet">Optimism</option>
                </select>
                 <button className="bg-dim-gray text-white p-2 rounded-lg cursor-pointer" onClick={seeWallet} ><IoMdSearch /></button>
                </div>
                <ToastContainer/>
            </nav>
        </>
    );
}

export default Navbar;