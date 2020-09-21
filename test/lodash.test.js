const _ = require("lodash");

test("", () => {
    expect(_.has({}, "")).toBe(false);
});

test("", () => {
    jest.spyOn(_, "has").mockImplementation(() => {
        return true;
    });
    expect(_.has({}, "")).toBe(true);
});