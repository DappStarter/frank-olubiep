require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone street renew stereo essay grace light army gate'; 
let testAccounts = [
"0x1ce3301f163573264a87e13a026c788931ff0ecccb6b8686e3ccb0f32e9ed568",
"0x047e3c6d95bf4ed9b215c27551cbfe2148487ca6e5f26038fb454446ccd3843e",
"0x4a78d3ffbf63b128ecb2b7567f145a16acc61c4e098cbf64b824d46243bd78e6",
"0xc6cb5f1009a27750ccd27f5b8a57f2be7a0c80d6b4b5aa84e11c857b541b2f5f",
"0x9d5558877ce4cbba54d06af7c1f161b4ceb56d8483082ba1dc7ac5769bb627fa",
"0x1fce15cf097e244d4c3ac624cd3f42937fa1676474143ceade5d802eae25aabd",
"0x1877db5383f2d56ea0656ddb28bc0e2e91130a74f305bf6ce10d890e1d8e9aa7",
"0x66139c037b81708743fea950b3656dab7481687638eb2191d3b208ad8f407056",
"0x703b563151e2317baedfffe266144f617cad6c0a17987927acf591860a1b9f1a",
"0x60b7b747766a740212570b83d8f2e5b3ce4424e363a9bcfb3c0f1adc9a9e8f66"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
