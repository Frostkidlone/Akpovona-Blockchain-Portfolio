// Simple frontend using ethers.js
const connectBtn = document.getElementById('connect');
const accountDiv = document.getElementById('account');
const balanceDiv = document.getElementById('balance');
const sendBtn = document.getElementById('send');

let provider;
let signer;

async function connect() {
  if (!window.ethereum) {
    alert('Install MetaMask');
    return;
  }
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  const account = await signer.getAddress();
  accountDiv.innerText = `Account: ${account}`;
  const bal = await provider.getBalance(account);
  balanceDiv.innerText = `Balance: ${ethers.utils.formatEther(bal)} ETH`;
}

async function sendTx() {
  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;
  if (!signer) {
    alert('Connect wallet first');
    return;
  }
  const tx = await signer.sendTransaction({ to: recipient, value: ethers.utils.parseEther(amount) });
  alert('Transaction sent: ' + tx.hash);
}

connectBtn.onclick = connect;
sendBtn.onclick = sendTx;
