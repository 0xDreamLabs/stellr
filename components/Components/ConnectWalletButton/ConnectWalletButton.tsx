import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWalletButton = () => (
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      // Note: If your app doesn't use authentication, you
      // can remove all 'authenticationStatus' checks
      const ready = mounted && authenticationStatus !== 'loading';
      const connected = ready
          && account
          && chain
          && (!authenticationStatus
            || authenticationStatus === 'authenticated');
      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            style: {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <button onClick={openConnectModal} type="button" className="bg-red-500 py-2 px-4 rounded-full hover:cursor-pointer hover:bg-rainbow hover:animate-rainbow">
                  Connect Wallet
                </button>
              );
            }
            if (chain.unsupported) {
              return (
                <button onClick={openChainModal} type="button" className="bg-red-700 py-2 px-4 rounded-full text-white">
                  Wrong network
                </button>
              );
            }
            return (
              <div style={{ display: 'flex', gap: 12 }}>
                <button onClick={openAccountModal} type="button" className="bg-primary-700 rounded-full py-2 px-4">
                  {account.displayName}
                </button>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
);
export default ConnectWalletButton;
