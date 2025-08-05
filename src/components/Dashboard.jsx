import useStore from "../utils/Store";
import walletImg from "../assets/wallet.jpg";

const Dashboard = () => {
    const { tokenBalancesInfo,nftBalancesInfo,recentTransactionsInfo } = useStore();
    return (
        <>
        <div className="m-4 flex justify-between gap-3 flex-col md:flex-row font-semibold">
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-4 ">
                <h1 className="font-bit-count text-2xl">Token Balances</h1>
                <div className="flex flex-col gap-3 mt-3 overflow-y-auto h-80">
                    {tokenBalancesInfo.length != 0 ? tokenBalancesInfo.map((token) => (
                        <div key={token.contract_address} className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <img src={token.logo_url} alt="token logo" className="h-auto w-8 rounded-full"
                                onError={(e) => (e.currentTarget.src = walletImg)} />
                                <p>{token.contract_display_name}</p>
                            </div>
                            <p>{token.pretty_quote}</p>
                        </div>
                )) : <div>No items yet..</div>}
                </div>
            </div>
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-4 ">
                 <h1 className="font-bit-count text-2xl">NFT</h1>
                 <div className="flex flex-col gap-3 mt-3 overflow-y-auto h-80">
                    {nftBalancesInfo.length != 0 ? nftBalancesInfo.map((token) => (
                        <div key={token.contract_address} className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <img src={token.nft_data[0].external_data.image} alt="token logo" className="h-auto w-12 rounded-md"
                                onError={(e) => (e.currentTarget.src = walletImg)} />
                                <p>{token.contract_name}</p>
                            </div>
                            <p>{token.pretty_quote}</p>
                        </div>
                )) : <div>No items yet..</div>}
                </div>
            </div>
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-4 ">
                 <h1 className="font-bit-count text-2xl">Transactions</h1>
                 <div className="flex flex-col gap-3 mt-3 overflow-y-auto h-80">
                    {recentTransactionsInfo.length != 0 ? recentTransactionsInfo.map((token) => (
                        <div key={token.contract_address} className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <img src={walletImg} alt="token logo" className="h-auto w-8 rounded-full"
                                onError={(e) => (e.currentTarget.src = walletImg)} />
                                <p>{token.contract_display_name}</p>
                            </div>
                            <div className="">
                                <span className="">From: {token.from_address}</span>
                                <span className="">To: {token.to_address}</span>
                            </div>
                            <p>{token.pretty_gas_quote}</p>
                        </div>
                )) : <div>No items yet..</div>}
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;