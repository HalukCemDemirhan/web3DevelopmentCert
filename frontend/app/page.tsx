import Image from "next/image";
import { createConfig, useAccount, useReadContract } from "wagmi";
import { http, createConfig } from 'wagmi'
import {mainnet, sepolia } from 'wagmi/chains'
import { injected} from 'wagmi/connectors'


const config = createConfig {
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected()
    ]
}

function ConnectWallet() { 
  const { isConnected } = useAccount() 
  if (isConnected) return <Account /> 
  return <WalletOptions /> 
} 



const queryClient = new QueryClient()

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
      <Button> Metamask </Button> 
      <element onclick="ConnectWallet()">Connect to wallet</element>
      <div> Increase the counter by one </div> 
      
        <ConnectWallet /> 
      </QueryClientProvider> 
    </WagmiProvider>
  )

    const[ data: Increment, error, isPending] = useReadContract {
      abi,
      function
      address: '0x38A5Ad3dF0b035B5e51Da83De687aCD9318c265a'
    } --- connected to the contract read

    if (isPending) return <div> Loading </div>

    import * as React from 'react'
import { useWriteContract } from 'wagmi' 
import { abi } from './abi' 
 
export function MintNFT() {
  const { data: hash, writeContract } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({ 
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', 
      abi, 
      functionName: 'mint', 
      args: [BigInt(tokenId)], 
    }) 
  } 

  return (
    <form onSubmit={submit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit">Increase counter</button>
      {hash && <div>Transaction Hash: {hash}</div>} 
    </form>
  )
}

    


}

