// import dotp from "dot-prop-immutable-chain";
const dotp = require("dot-prop-immutable-chain");

describe("get", () => {
    test("has value", () => {
        const updated = dotp({
            a: {
                b: 1
            }
        })
            .get("a.b")
            .value();

        expect(updated).toEqual(1);
    });

    test("does not have value", () => {
        const updated = dotp({
            a: {
                b: 1
            }
        })
            .get("a.c")
            .value();

        expect(updated).toEqual(undefined);
    });

});

describe("set", () => {
    test("override", () => {
        const updated = dotp({
            a: {
                b: 1
            }
        })
            .set("a.b", 2)
            .value();
    
        expect(updated).toEqual({
            a: {
                b: 2
            }
        });
    });
    
    test("input has no value of c", () => {
        const updated = dotp({
            a: {
                b: 1,
            }
        })
            .set("a.c", v => {
                console.log(v);
                return v;
            })
            .value();
    
        expect(updated).toEqual({
            a: {
                b: 1,
                c: {}
            }
        });
    });
    
    test("input has value of c", () => {
        const updated = dotp
            .set({
                a: {
                    b: 1,
                    c: 2
                }
            }, "a.c", v => {
                console.log(v);
                return v;
            })
    
        expect(updated).toEqual({
            a: {
                b: 1,
                c: 2
            }
        });
    });
 });