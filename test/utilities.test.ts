import * as util from "../src/utils/utilities";

describe("convertToIdKeyValueObj test", () => {
    it("normal", () => { 
        const data = { name: "a", rest: "gaga" };
        expect(util.convertToIdKeyValueObj([data], "name")).toEqual({a: data});
    });
    
    it("given empty array", () => {
      expect(util.convertToIdKeyValueObj([])).toEqual({});
    });

  });
  