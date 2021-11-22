import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

const {
  ATTRIBUTE_AML,
  ATTRIBUTE_COUNTRY,
  ISSUER_ROLE,
} = require("../utils/constant.ts");

const {
  deployPassport,
  deployGovernance,
} = require("../../utils/deployment.ts");
const { signMint } = require("../utils/signature.ts");

describe("QuadPassport", async () => {
  let passport: Contract;
  let governance: Contract;
  let deployer: SignerWithAddress,
    admin: SignerWithAddress,
    minterA: SignerWithAddress,
    minterB: SignerWithAddress,
    issuer: SignerWithAddress;
  const tokenId = 1;
  const baseURI = "https://quadrata.io";
  let sig: any;
  let quadDID = ethers.utils.formatBytes32String(
    "did:example:123456789abcdefghi"
  );
  let aml = ethers.utils.formatBytes32String("LOW");
  let country = ethers.utils.formatBytes32String("FRANCE");
  let issuedAt = Math.floor(new Date().getTime() / 1000);
  let mintPrice = ethers.utils.parseEther("0.03");

  describe("mintPassport", async () => {
    beforeEach(async () => {
      [deployer, admin, minterA, minterB, issuer] = await ethers.getSigners();
      governance = await deployGovernance(admin);
      governance.connect(admin).grantRole(ISSUER_ROLE, issuer.address);
      passport = await deployPassport(governance, admin, baseURI);
      governance.connect(admin).setPassportContractAddress(passport.address);
      sig = await signMint(
        issuer,
        minterA,
        tokenId,
        quadDID,
        aml,
        country,
        issuedAt
      );

      await passport
        .connect(minterA)
        .mintPassport(tokenId, quadDID, aml, country, issuedAt, sig, {
          value: mintPrice,
        });
    });

    it("success - getAttribute(AML)", async () => {
      const response = await passport.getAttribute(
        minterA.address,
        tokenId,
        ATTRIBUTE_AML
      );
      expect(response[0]).to.equal(aml);
      expect(response[1]).to.equal(issuedAt);
    });

    it("success - getAttribute(COUNTRY)", async () => {
      const response = await passport.getAttribute(
        minterA.address,
        tokenId,
        ATTRIBUTE_COUNTRY
      );
      expect(response[0]).to.equal(country);
      expect(response[1]).to.equal(issuedAt);
    });

    it("fail", async () => {
      console.log(deployer.address);
      console.log(minterB.address);
      expect(false).to.equal(true);
      quadDID = "hello";
      country = "hello";
      issuedAt = 5;
      mintPrice = ethers.utils.parseEther("0.02");

      aml = ethers.utils.formatBytes32String("MEDIUM");
    });
  });
  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });
});
