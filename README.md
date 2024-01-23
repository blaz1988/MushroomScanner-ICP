# Mushroom Scanner

Unlock the world of mushrooms with our easy-to-use app. Simply snap a photo of any mushroom, and AI technology will identify it within seconds. Learn about each species, whether it's edible, and connect with fellow enthusiasts. Try our app today and start your mushroom adventure.

### **How to use Mushroom Scanner**

Click 'Upload Image' to get started with a photo.
![image](https://github.com/blaz1988/mushroom_scanner/assets/5670807/a81a2f12-69ea-4e9d-bef2-584720b377f7)

Click 'Next'

![image](https://github.com/blaz1988/mushroom_scanner/assets/5670807/fb0008e3-ad03-4c6e-9b2f-86837a812452)

Select best match and click on "Read More" or "Learn more": 
![image](https://github.com/blaz1988/mushroom_scanner/assets/5670807/9d459034-c4f9-4358-93aa-9c55bae2b3b9)



## **Setup**

### **Frontend Canister**

Ensure that you have the **`dfx`** command-line tool installed on your computer. Check its version with the following command:

```bash
dfx --version
```

If you don't have it installed, follow the instructions in the [ICP SDK installation guide](https://internetcomputer.org/docs/current/developer-docs/setup/install#installing-the-ic-sdk-1), making sure to set up version **`0.15.*`**.

For a smooth deployment, follow the [Azle installation documentation](https://demergent-labs.github.io/azle/installation.html#build-dependencies).

## **Install Dependencies**

To install project dependencies, run the following command:

```bash
npm install
```

## **Run the App Locally**

Before running the app locally, start the local replica with the following command:

```bash
dfx start --clean

```

To run the app locally, ensure that **`dfx`** (Internet Computer CDK) is installed and running. Execute the following command in another terminal window without closing the replica:

```bash
dfx deploy

```

This command deploys both the frontend and backend canisters to your local network. However, you can also deploy them separately.

## **Preview the Deployment**

After deployment, you can access the local preview of the app using the links provided in **green**:

```bash

Frontend canister via browser dfinity_js_frontend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai
Backend canister via Candid interface dfinity_js_backend: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
internet_identity: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai&id=be2us-64aaa-aaaaa-qaabq-cai

```

## **Separate Deployment**

You can deploy individual parts of the app separately:

- Deploy only the backend:

```bash
dfx deploy dfinity_js_backend

```

- Deploy only the frontend:

```bash
dfx deploy dfinity_js_frontend

```

- Test the frontend locally:

```bash
npm start

```

## **Troubleshooting**

If you encounter any issues, reach out to [ivan.blazevic@rubycode.co](ivan.blazevic@rubycode.co)

## **Donate Us*

If you like this project, please consider making a donation to support our work.
![image](https://github.com/blaz1988/mushroom_scanner/assets/5670807/9cd2bc74-a1b3-4bee-9655-5db744792694)


