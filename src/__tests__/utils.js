import { getCostKeys, getCostValues } from "../utils/utils";
import data from "../data/age-of-empires-units.json";

describe('HELPERS TEST', () => {
    it('Should get cost keys correctly', () => {
        const costKeys = getCostKeys(data)
        expect(costKeys).toEqual(['wood', 'gold', 'food']);
    })

    it('Should get correct string for cost values (for unit table)', () => {
        const costValue = getCostValues({
            "Wood": 25,
            "Gold": 45
          })
          expect(costValue).toEqual("Wood: 25, Gold: 45");
    })

    it('Should get "No Cost" for units which dont have cost values', () => {
        const costValue = getCostValues()
          expect(costValue).toEqual(["No cost"]);
    })
})