"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[309],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,u=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return a?r.createElement(u,s(s({ref:t},c),{},{components:a})):r.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6759:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var r=a(3117),n=(a(7294),a(3905));const o={sidebar_position:2},s="Quick setup",p={unversionedId:"quick-setup",id:"version-V2/quick-setup",title:"Quick setup",description:"Set up a new Hardhat project with Semaphore.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-V2/quick-setup.md",sourceDirName:".",slug:"/quick-setup",permalink:"/es/docs/quick-setup",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/quick-setup.md",tags:[],version:"V2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-V2/mySidebar",previous:{title:"Proofs",permalink:"/es/docs/guides/proofs"},next:{title:"Private voting use case",permalink:"/es/docs/use-cases/private-voting"}},i={},l=[{value:"Create a Node.js project",id:"create-a-nodejs-project",level:2},{value:"Install Hardhat",id:"install-hardhat",level:2},{value:"Install Semaphore packages",id:"install-semaphore-packages",level:2},{value:"Create the Semaphore contract",id:"create-the-semaphore-contract",level:2},{value:"Create a Hardhat task",id:"create-a-hardhat-task",level:2},{value:"Test your contract",id:"test-your-contract",level:2},{value:"Deploy your contract",id:"deploy-your-contract",level:2}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-setup"},"Quick setup"),(0,n.kt)("p",null,"Set up a new Hardhat project with Semaphore.\nLearn how to create and test an Ethereum smart contract that uses zero-knowledge\nproofs to verify membership."),(0,n.kt)("p",null,"To check out the code used in this guide, visit the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/quick-setup"},"quick-setup")," repository."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#create-a-nodejs-project"},(0,n.kt)("strong",{parentName:"a"},"Create a Node.js project"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#install-hardhat"},(0,n.kt)("strong",{parentName:"a"},"Install Hardhat"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#install-semaphore-packages"},(0,n.kt)("strong",{parentName:"a"},"Install Semaphore packages"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#create-the-semaphore-contract"},(0,n.kt)("strong",{parentName:"a"},"Create the Semaphore contract"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#create-a-hardhat-task"},(0,n.kt)("strong",{parentName:"a"},"Create a Hardhat task"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#test-your-contract"},(0,n.kt)("strong",{parentName:"a"},"Test your contracts"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#deploy-your-contract"},(0,n.kt)("strong",{parentName:"a"},"Deploy your contract")))),(0,n.kt)("h2",{id:"create-a-nodejs-project"},"Create a Node.js project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node.js ",(0,n.kt)("em",{parentName:"a"},"LTS version")),"\ninstructions to install ",(0,n.kt)("inlineCode",{parentName:"p"},"node")," (Hardhat may not work with Node.js ",(0,n.kt)("em",{parentName:"p"},"Current"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," instructions\nto download and install the ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," package manager.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a directory for the project and change to the new directory."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir semaphore-example\ncd semaphore-example\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In your terminal, run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn init")," to initialize the Node.js project."))),(0,n.kt)("h2",{id:"install-hardhat"},"Install Hardhat"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a development environment you can use to\ncompile, deploy, test, and debug Ethereum software.\nHardhat includes the Hardhat Network, a local Ethereum network for development."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," to install ",(0,n.kt)("a",{parentName:"p",href:"https://hardhat.org/getting-started/"},"Hardhat"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add hardhat --dev\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," to run ",(0,n.kt)("inlineCode",{parentName:"p"},"hardhat")," and create a JavaScript project:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'yarn hardhat\n# At the prompt, select "Create a JavaScript project"\n# and then enter through the prompts.\n')))),(0,n.kt)("h2",{id:"install-semaphore-packages"},"Install Semaphore packages"),(0,n.kt)("p",null,"Semaphore provides contracts, JavaScript libraries and an Hardhat plugin for developers building zero-knowledge applications."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@semaphore-protocol/contracts")," provides contracts to manage groups and verify Semaphore proofs on-chain."),(0,n.kt)("li",{parentName:"ul"},"JavaScript libraries help developers build zero-knowledge applications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@semaphore-protocol/hardhat")," allow developers Hardhat tasks to deploy verifiers and Semaphore contracts.")),(0,n.kt)("p",null,"To install these dependencies for your project, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," to install ",(0,n.kt)("inlineCode",{parentName:"p"},"@semaphore-protocol/contracts"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @semaphore-protocol/contracts@2.6.1\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," to install the Semaphore JavaScript libraries and the Hardhat plugin:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @semaphore-protocol/identity@2.6.1 @semaphore-protocol/group@2.6.1 @semaphore-protocol/proof@2.6.1 @semaphore-protocol/hardhat@0.1.0 --dev\n")))),(0,n.kt)("p",null,"For more detail about ",(0,n.kt)("em",{parentName:"p"},"Semaphore contracts"),", see ",(0,n.kt)("a",{parentName:"p",href:"https://semaphore.appliedzkp.org/docs/technical-reference/contracts"},"Contracts"),".\nTo view the source of our packages, see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1#-packages"},"semaphore")," repository."),(0,n.kt)("h2",{id:"create-the-semaphore-contract"},"Create the Semaphore contract"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("inlineCode",{parentName:"p"},"Greeter")," contract that uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"Semaphore.sol")," contract:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rename ",(0,n.kt)("inlineCode",{parentName:"p"},"Lock.sol")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Greeter.sol")," and replace the content with the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="./contracts/Greeter.sol"',title:'"./contracts/Greeter.sol"'},'//SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@semaphore-protocol/contracts/interfaces/ISemaphore.sol";\n\n/// @title Greeter contract.\n/// @dev The following code is just an example to show how Semaphore can be used.\ncontract Greeter  {\n    event NewGreeting(bytes32 greeting);\n    event NewUser(uint256 identityCommitment, bytes32 username);\n\n    ISemaphore public semaphore;\n\n    uint256 groupId;\n    mapping(uint256 => bytes32) users;\n\n    constructor(address semaphoreAddress, uint256 _groupId) {\n        semaphore = ISemaphore(semaphoreAddress);\n        groupId = _groupId;\n\n        semaphore.createGroup(groupId, 20, 0, address(this));\n    }\n\n    function joinGroup(uint256 identityCommitment, bytes32 username) external {\n        semaphore.addMember(groupId, identityCommitment);\n\n        users[identityCommitment] = username;\n\n        emit NewUser(identityCommitment, username);\n    }\n\n    function greet(\n        bytes32 greeting,\n        uint256 merkleTreeRoot,\n        uint256 nullifierHash,\n        uint256[8] calldata proof\n    ) external {\n        semaphore.verifyProof(groupId, merkleTreeRoot, greeting, nullifierHash, groupId, proof);\n\n        emit NewGreeting(greeting);\n    }\n}\n')))),(0,n.kt)("h2",{id:"create-a-hardhat-task"},"Create a Hardhat task"),(0,n.kt)("p",null,"Hardhat lets you write ",(0,n.kt)("a",{parentName:"p",href:"https://hardhat.org/guides/create-task.html#creating-a-task"},"tasks"),"\nthat automate building and deploying smart contracts and dApps.\nTo create a task that deploys the ",(0,n.kt)("inlineCode",{parentName:"p"},"Greeter")," contract, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("inlineCode",{parentName:"p"},"tasks")," folder and add a ",(0,n.kt)("inlineCode",{parentName:"p"},"./tasks/deploy.js")," file that contains the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./tasks/deploy.js"',title:'"./tasks/deploy.js"'},'const { task, types } = require("hardhat/config")\n\ntask("deploy", "Deploy a Greeter contract")\n    .addOptionalParam("semaphore", "Semaphore contract address", undefined, types.address)\n    .addParam("group", "Group identifier", 42, types.int)\n    .addOptionalParam("logs", "Print the logs", true, types.boolean)\n    .setAction(async ({ logs, semaphore: semaphoreAddress, group: groupId }, { ethers, run }) => {\n        if (!semaphoreAddress) {\n            const { address: verifierAddress } = await run("deploy:verifier", { logs, merkleTreeDepth: 20 })\n\n            const { address } = await run("deploy:semaphore", {\n                logs,\n                verifiers: [\n                    {\n                        merkleTreeDepth: 20,\n                        contractAddress: verifierAddress\n                    }\n                ]\n            })\n\n            semaphoreAddress = address\n        }\n\n        const Greeter = await ethers.getContractFactory("Greeter")\n\n        const greeter = await Greeter.deploy(semaphoreAddress, groupId)\n\n        await greeter.deployed()\n\n        if (logs) {\n            console.log(`Greeter contract has been deployed to: ${greeter.address}`)\n        }\n\n        return greeter\n    })\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In your ",(0,n.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file, add the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./hardhat.config.js"',title:'"./hardhat.config.js"'},'require("@nomiclabs/hardhat-waffle")\nrequire("@semaphore-protocol/hardhat")\nrequire("./tasks/deploy") // Your deploy task.\n\nmodule.exports = {\n    solidity: "0.8.4"\n}\n')))),(0,n.kt)("h2",{id:"test-your-contract"},"Test your contract"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://hardhat.org/plugins/nomiclabs-hardhat-waffle.html"},(0,n.kt)("inlineCode",{parentName:"a"},"hardhat-waffle")),"\nlets you write tests with the ",(0,n.kt)("a",{parentName:"p",href:"https://getwaffle.io/"},"Waffle")," test framework\nand ",(0,n.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"Chai assertions"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," to install the ",(0,n.kt)("inlineCode",{parentName:"p"},"hardhat-waffle")," plugin and dependencies for smart\ncontract tests:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' \\\n   @nomiclabs/hardhat-ethers 'ethers@^5.0.0' chai\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the Semaphore ",(0,n.kt)("a",{parentName:"p",href:"http://www.trusted-setup-pse.org/"},"zk trusted setup files"),"\nand copy them to the ",(0,n.kt)("inlineCode",{parentName:"p"},"./static")," folder."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd static\nwget http://www.trusted-setup-pse.org/semaphore/20/semaphore.zkey\nwget http://www.trusted-setup-pse.org/semaphore/20/semaphore.wasm\n")),(0,n.kt)("p",{parentName:"li"}," Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/docs/glossary/#trusted-setup-files"},"trusted setup files"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rename the ",(0,n.kt)("inlineCode",{parentName:"p"},"Lock.js")," test file to ",(0,n.kt)("inlineCode",{parentName:"p"},"Greeter.js")," and replace the content with the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./test/Greeter.js"',title:'"./test/Greeter.js"'},'const { Identity } = require("@semaphore-protocol/identity")\nconst { Group } = require("@semaphore-protocol/group")\nconst { generateProof, packToSolidityProof, verifyProof } = require("@semaphore-protocol/proof")\nconst { expect } = require("chai")\nconst { run, ethers } = require("hardhat")\n\ndescribe("Greeter", function () {\n    let greeter\n\n    const users = []\n    const groupId = 42\n    const group = new Group()\n\n    before(async () => {\n        greeter = await run("deploy", { logs: false, group: groupId })\n\n        users.push({\n            identity: new Identity(),\n            username: ethers.utils.formatBytes32String("anon1")\n        })\n\n        users.push({\n            identity: new Identity(),\n            username: ethers.utils.formatBytes32String("anon2")\n        })\n\n        group.addMember(users[0].identity.generateCommitment())\n        group.addMember(users[1].identity.generateCommitment())\n    })\n\n    describe("# joinGroup", () => {\n        it("Should allow users to join the group", async () => {\n            for (let i = 0; i < group.members.length; i++) {\n                const transaction = greeter.joinGroup(group.members[i], users[i].username)\n\n                await expect(transaction).to.emit(greeter, "NewUser").withArgs(group.members[i], users[i].username)\n            }\n        })\n    })\n\n    describe("# greet", () => {\n        const wasmFilePath = "./static/semaphore.wasm"\n        const zkeyFilePath = "./static/semaphore.zkey"\n\n        it("Should allow users to greet", async () => {\n            const greeting = ethers.utils.formatBytes32String("Hello World")\n\n            const fullProof = await generateProof(users[1].identity, group, groupId, greeting, {\n                wasmFilePath,\n                zkeyFilePath\n            })\n            const solidityProof = packToSolidityProof(fullProof.proof)\n\n            const transaction = greeter.greet(\n                greeting,\n                fullProof.publicSignals.merkleRoot,\n                fullProof.publicSignals.nullifierHash,\n                solidityProof\n            )\n\n            await expect(transaction).to.emit(greeter, "NewGreeting").withArgs(greeting)\n        })\n    })\n})\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," commands to compile and test your contract:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn hardhat compile\nyarn hardhat test\n")))),(0,n.kt)("h2",{id:"deploy-your-contract"},"Deploy your contract"),(0,n.kt)("p",null,"To deploy your contract in a local Hardhat network (and use it in your dApp), run the following ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn hardhat node\nyarn hardhat deploy --group 42 --network localhost # In another tab.\n")),(0,n.kt)("p",null,"For a more complete demo that provides a starting point for your dApp,\nsee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/boilerplate/"},"semaphore-boilerplate"),"."))}d.isMDXComponent=!0}}]);