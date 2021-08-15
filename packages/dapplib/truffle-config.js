require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stool response remember unable harvest cover army gesture'; 
let testAccounts = [
"0x3775546e0fd9c1e9fd6d900156f59694fa33b5d6590cd5c3352d1102a798e0b7",
"0xed966529321b4ba1fe9b5b4a41eabadd888943e851b34a8d03b95f41a96cd196",
"0xdb7aaf8c28b06d235514010cb5dbb8152db9d7a96fcddb8feb8a34dbb8209e24",
"0xf79be2c55df697c1c3c7e0d5ea2abc68be3284f5d205a5087abbfa5bfdd2ce53",
"0xda3b788a4deb31664d4806fdc47aba859966954543d01abddfc5a61af83a5284",
"0xe94bc31265860ce53c8537ce88229a941422f3d44e8263b20ac6e72e55dcd553",
"0x1cc2a4d60bb6f3267661169492fe46cc9a93cea3b435b7f9beaba4773533beaf",
"0xb1dbf39bae5360665c4176f96a885b798d6138270637cbe0252e31d8c4f2e767",
"0x557dab2b6a1741e9c57b39b039fa5b7bcab127f05e9ac7490a45087280b49658",
"0x645bbb8feebf499c370a4c2abc7bf8e25916b4354627bdd6715a7a25f6ac501d"
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
            version: '^0.8.0'
        }
    }
};

