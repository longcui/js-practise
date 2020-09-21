const moment = require("moment");

//  import moment from "moment";
//     ^^^^^^
//     SyntaxError: Cannot use import statement outside a module
//       at ScriptTransformer._transformAndBuildScri
// import moment from "moment";    

test("", () => {
    expect(moment.isDate(0)).toBe(false);
});

test("", () => {
    jest.spyOn(moment, "isDate").mockImplementation(() => {
        return true;
    });
    expect(moment.isDate(0)).toBe(true);
});

