export INTERNET_IDENTITY_URL=https://identity.ic0.app
export NFID_URL=https://nfid.one/authenticate/?applicationName=OpenChat
export II_DERIVATION_ORIGIN=https://6hsbt-vqaaa-aaaaf-aaafq-cai.ic0.app
export II_ALTERNATIVE_ORIGINS=https://oc.app,https://xp7uu-xyaaa-aaaaf-aoa6a-cai.ic0.app

npm i
npm run check
npx rollup -c
