import useStore from "../utils/Store";
import walletImg from "../assets/wallet.jpg";
import voidImg from "../assets/void.svg";
import { LuNotepadText } from "react-icons/lu";

const Dashboard = () => {
    const { tokenBalancesInfo,nftBalancesInfo,recentTransactionsInfo } = useStore();

    const dateConverter = (timestamp) => {
         const dateInstance = new Date(timestamp);
         return dateInstance.toUTCString();
    }
    return (
        <>
        <div className="m-5 flex justify-between gap-3 flex-col md:flex-row font-semibold">
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-4 ">
                <h1 className="font-bit-count text-2xl">Token Balances</h1>
                <div className="flex flex-col gap-3 mt-4 overflow-y-auto h-80">
                    {tokenBalancesInfo.length != 0 ? tokenBalancesInfo.map((token) => (
                        <div key={token.contract_address} className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <img src={token.logo_url} alt="token logo" className="h-auto w-9 rounded-full"
                                onError={(e) => (e.currentTarget.src = walletImg)} />
                                <p>{token.contract_display_name}</p>
                            </div>
                            <p>{token.pretty_quote}</p>
                        </div>
                )) : <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center "><img src={voidImg} className="h-60 w-60" alt="" />
                        <p className="text-xl mt-5">No Items Found!</p>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-4 ">
                 <h1 className="font-bit-count text-2xl">NFT</h1>
                 <div className="flex flex-col gap-3 mt-4 overflow-y-auto h-80">
                    {nftBalancesInfo.length != 0 ? nftBalancesInfo.map((token) => (
                        <div key={token.contract_address} className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <img src={token.nft_data[0].external_data.image} alt="token logo" className="h-auto w-12 rounded-md"
                                onError={(e) => (e.currentTarget.src = walletImg)} />
                                <p>{token.contract_name}</p>
                            </div>
                            <p>{token.pretty_quote}</p>
                        </div>
                )) : <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center "><img src={voidImg} className="h-60 w-60" alt="" />
                        <p className="text-xl mt-5">No Items Found!</p>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-4 ">
                 <h1 className="font-bit-count text-2xl">Transactions</h1>
                 <div className="flex flex-col gap-3 mt-4 overflow-y-auto h-80">
                    {recentTransactionsInfo.length != 0 ? recentTransactionsInfo.map((token) => (
                        <div key={token.tx_hash} className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-jet"><LuNotepadText /></div>
                                <div className="flex flex-col">
                                    <a href={token.explorers[0].url} target="_blank">{token.tx_hash.slice(0,8) + `...` + token.tx_hash.slice(-8)}</a>
                                    <p className="text-sm">{dateConverter(token.block_signed_at)}</p>
                                </div>
                            </div>
                            <p>{token.pretty_gas_quote}</p>
                        </div>
                )) : <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center "><img src={voidImg} className="h-60 w-60" alt="" />
                        <p className="text-xl mt-5">No Items Found!</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;