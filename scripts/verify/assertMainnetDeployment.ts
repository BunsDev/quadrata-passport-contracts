import * as dotenv from "dotenv";
import { getAddress } from "ethers/lib/utils";
dotenv.config();

const { expect } = require("chai");
const { constants } = require("ethers");
const { ethers } = require("hardhat");

const {
  ALL_ATTRIBUTES,
  ALL_ACCOUNT_LEVEL_ATTRIBUTES,
  ALL_ATTRIBUTES_BY_DID,
  ALL_ROLES,
  GOVERNANCE_ROLE,
  PAUSER_ROLE,
  ISSUER_ROLE,
  DEFAULT_ADMIN_ROLE,
  READER_ROLE,
  PRICE_PER_ATTRIBUTES,
  PRICE_PER_BUSINESS_ATTRIBUTES,
  TIMELOCK_ADMIN_ROLE,
  PROPOSER_ROLE,
  EXECUTOR_ROLE,
  ISSUER_SPLIT,
} = require("../../utils/constant.ts");

const {
  QUADRATA_TREASURY,
  TIMELOCK,
  MULTISIG,
  TOKEN_IDS,
  ISSUERS,
} = require("../data/mainnet.ts");

// ------------ BEGIN - TO MODIFY --------------- //
const QUAD_GOV = getAddress("0xBfa59A31b379A62304327386bC2b03096D7695B3");
const QUAD_PASSPORT = getAddress("0x2e779749c40CC4Ba1cAB4c57eF84d90755CC017d");
const QUAD_READER = getAddress("0xFEB98861425C6d2819c0d0Ee70E45AbcF71b43Da");

const DEPLOYER = getAddress("0x33CDAD2fB7eD4F37b2C9B8C3471786d417C0e5BD");

// GnosisSafe multisig
const FAB_MULTISIG = getAddress("0x1f0B49e4871e2f7aaB069d78a8Fa31687b1eA91B");
const HUY_MULTISIG = getAddress("0x8Adbed5dB1Fa983A4Ae2bcaFEa26Aeac5Aee867c");

// Passport Holders
const TEDDY = getAddress("0xffE462ed723275eF8E7655C4883e8cD428826669");
const DANIEL = getAddress("0x5501CC22Be0F12381489D0980f20f872e1E6bfb9");
const TRAVIS = getAddress("0xD71bB1fF98D84ae00728f4A542Fa7A4d3257b33E");
// ------------ END - TO MODIFY --------------- //

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// MAINNET CHECKS
(async () => {
  const signers = await ethers.getSigners();
  const network = await signers[0].provider.getNetwork();

  const EXPECTED_ROLES_QUAD_GOVERNANCE = [
    { USER: TEDDY, ROLES: [] },
    { USER: DANIEL, ROLES: [] },
    { USER: TRAVIS, ROLES: [] },
    { USER: HUY_MULTISIG, ROLES: [] },
    { USER: FAB_MULTISIG, ROLES: [] },
    { USER: ISSUERS[0].wallet, ROLES: [ISSUER_ROLE] },
    { USER: ISSUERS[0].treasury, ROLES: [] },
    { USER: QUADRATA_TREASURY[network.chainId], ROLES: [PAUSER_ROLE] }, // we expect treasury to be a pauser bc it is our multisig
    { USER: ISSUERS[0].treasury, ROLES: [] },
    { USER: DEPLOYER, ROLES: [] },
    { USER: TIMELOCK, ROLES: [DEFAULT_ADMIN_ROLE, GOVERNANCE_ROLE] },
    { USER: MULTISIG[network.chainId], ROLES: [PAUSER_ROLE] },
    { USER: QUAD_READER, ROLES: [READER_ROLE] },
    { USER: QUAD_GOV, ROLES: [] },
    { USER: QUAD_PASSPORT, ROLES: [] },
  ];

  const EXPECTED_ROLES_TIMELOCK = [
    { USER: TEDDY, ROLES: [EXECUTOR_ROLE] },
    { USER: DANIEL, ROLES: [] },
    { USER: TRAVIS, ROLES: [] },
    { USER: HUY_MULTISIG, ROLES: [EXECUTOR_ROLE] },
    { USER: FAB_MULTISIG, ROLES: [EXECUTOR_ROLE] },
    { USER: ISSUERS[0].wallet, ROLES: [] },
    { USER: ISSUERS[0].treasury, ROLES: [] },
    {
      USER: QUADRATA_TREASURY[network.chainId],
      ROLES: [PROPOSER_ROLE, EXECUTOR_ROLE],
    }, // we expect treasury to be a proposer bc it is our multisig
    { USER: DEPLOYER, ROLES: [] },
    { USER: TIMELOCK, ROLES: [TIMELOCK_ADMIN_ROLE] },
    { USER: MULTISIG[network.chainId], ROLES: [PROPOSER_ROLE, EXECUTOR_ROLE] },
    { USER: QUAD_READER, ROLES: [] },
    { USER: QUAD_GOV, ROLES: [] },
    { USER: QUAD_PASSPORT, ROLES: [] },
  ];

  console.log("!!!!! Make sure you have updated all contract addresses !!!!!!");
  console.log("Starting Deployment Verification on Mainnet/Polygon ..");
  const passport = await ethers.getContractAt("QuadPassport", QUAD_PASSPORT);
  const governance = await ethers.getContractAt("QuadGovernance", QUAD_GOV);
  const reader = await ethers.getContractAt("QuadReader", QUAD_READER);
  const timelock = await ethers.getContractAt(
    "IAccessControlUpgradeable",
    TIMELOCK
  );

  // --------------- QuadPassport --------------------
  // Check Initialize
  expect(await passport.symbol()).equals("QP");
  expect(await passport.name()).equals("Quadrata Passport");
  expect(await passport.governance()).equals(QUAD_GOV);
  expect(await passport.pendingGovernance()).equals(constants.AddressZero);
  console.log("[QuadPassport] Initializer: OK");

  // --------------- QuadReader --------------------
  // Check Initialize
  expect(await reader.governance()).equals(QUAD_GOV);
  expect(await reader.passport()).equals(QUAD_PASSPORT);
  console.log("[QuadReader] Initializer: OK");

  // --------------- QuadGovernance --------------------
  // Check Passport Correctly linked
  expect(await governance.passport()).equals(QUAD_PASSPORT);
  console.log("[QuadGovernance] QuadPassport correctly linked: OK");

  // Check Treasury correctly set
  const treasury = await governance.treasury();
  expect(treasury.toLowerCase()).equals(
    QUADRATA_TREASURY[network.chainId].toLowerCase()
  );
  console.log("[QuadGovernance] Protocol treasury correctly set: OK");

  // Check that all issuers have been set
  const issuers = await governance.getIssuers();
  expect(await governance.getIssuersLength()).equals(ISSUERS.length);
  expect(issuers.length).equals(ISSUERS.length);

  ISSUERS.forEach(async (issuer: any) => {
    await delay(1000);
    expect(await governance.issuersTreasury(issuer.wallet)).equals(
      issuer.treasury
    );
    expect(await governance.getIssuerStatus(issuer.wallet)).equals(true);
    ALL_ATTRIBUTES.forEach(async (attrType: string) => {
      if (issuer.attributesPermission.includes(attrType)) {
        expect(
          await governance.getIssuerAttributePermission(issuer.wallet, attrType)
        ).equals(true);
      } else {
        expect(
          await governance.getIssuerAttributePermission(issuer.wallet, attrType)
        ).equals(false);
      }
    });
  });
  console.log("[QuadGovernance] All issuers have been correctly set: OK");

  // Check that Revenue split have been correctly set
  expect(await governance.revSplitIssuer()).equals(ISSUER_SPLIT);
  console.log("[QuadGovernance] revSplitIssuer correctly set: OK");

  // Check that Price have been correctly set
  ALL_ATTRIBUTES.forEach(async (attrType: string) => {
    await delay(1000);
    expect(await governance.pricePerAttributeFixed(attrType)).equals(
      PRICE_PER_ATTRIBUTES[network.chainId][attrType]
    );
    expect(await governance.pricePerBusinessAttributeFixed(attrType)).equals(
      PRICE_PER_BUSINESS_ATTRIBUTES[network.chainId][attrType]
    );
  });
  console.log("[QuadGovernance] Price for query correctly set: OK");

  // Check that tokenId have been correctly set
  TOKEN_IDS.forEach(async (tokenId: any) => {
    await delay(1000);
    expect(await governance.eligibleTokenId(tokenId.id)).equals(true); // Default Quadrata Passport

    expect(await passport.uri(tokenId.id)).equals(tokenId.uri);
  });
  expect(
    await governance.eligibleTokenId(TOKEN_IDS[TOKEN_IDS.length - 1].id + 1)
  ).equals(false);
  expect(await governance.getMaxEligibleTokenId()).to.equal(TOKEN_IDS.length);
  console.log("[QuadGovernance] TokenId have been correctly set: OK");

  // Check attribute eligibility
  for (const attribute of ALL_ATTRIBUTES) {
    await delay(1000);
    expect(await governance.eligibleAttributesByDID(attribute)).equals(
      ALL_ATTRIBUTES_BY_DID.includes(attribute)
    );
  }
  console.log(
    "[QuadGovernance] attribute by DID eligibility correctly set: OK"
  );
  for (const attribute of ALL_ATTRIBUTES) {
    await delay(1000);
    expect(await governance.eligibleAttributes(attribute)).equals(
      ALL_ACCOUNT_LEVEL_ATTRIBUTES.includes(attribute)
    );
  }
  console.log("[QuadGovernance] attribute ligibility correctly set: OK");

  // Check AccessControl
  const checkUserRoles = async (accountRoles: any, contract: any) => {
    accountRoles.forEach(async (accRole: any) => {
      const account = accRole.USER;
      const expectedRoles = accRole.ROLES;
      ALL_ROLES.forEach(async (role: string) => {
        await delay(1000);
        // console.log(
        //   `Checking Role ${
        //     reversePrint[role]
        //   } for User ${account} with expected roles ${
        //     reversePrint[expectedRoles[0]]
        //   }`
        // );
        expect(await contract.hasRole(role, account)).equals(
          expectedRoles.includes(role)
        );
      });
      await delay(1000);
    });
  };

  await checkUserRoles(EXPECTED_ROLES_QUAD_GOVERNANCE, governance);
  console.log("[QuadGovernance] Access Control verified: OK");
  await checkUserRoles(EXPECTED_ROLES_TIMELOCK, timelock);
  console.log("[Timelock] Access Control verified: OK");
})();
