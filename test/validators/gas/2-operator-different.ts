const { expect } = require("chai");

import * as helpers from "../../helpers/contract-helpers"
let registryContract: any, operatorIDs: any, shares: any, owner: any
const numberOfOperators = 4
const operatorFee = 4

describe("Register Validator Gas Tests 2 Operator Different", () => {
    beforeEach(async () => {
        const contractData = await helpers.initializeContract(numberOfOperators, operatorFee)
        registryContract = contractData.contract
        operatorIDs = contractData.operatorIDs
        shares = contractData.shares
    })

    it("2 Operator Different", async () => {
        const validatorPK = `0x98765432109876543210987654321098765432109876543210987654321098765432109876543210987654321098100`

        await registryContract.registerValidator(
            [1, 2, 3, 4],
            `${validatorPK}0`,
            shares[0],
            "10000"
        )

        await registryContract.registerValidator(
            [1, 2, 5, 6],
            `${validatorPK}1`,
            shares[1],
            "10000"
        )
    })

});
