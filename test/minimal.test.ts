import { minimumAbsoluteDifference } from "../src/hackerrank/MinimalAbsoluteDiff";

const fs = require("fs");
const path = require("path");

describe("", () => { 


    it("", async (done) => { 
        // fetch("./data/MinimalAbsoluteDiffTestData.txt")
        //     .then(res => res.text())
        //     .then(data => console.log(data));
        const file = path.join(__dirname, "./data", "MinimalAbsoluteDiffTestData.txt");

       await fs.readFile(file, 'utf8', (err, data) => {
            const ret = minimumAbsoluteDifference(data.split(" "))
            // expect(ret).toEqual("2");
           console.log(data);
           
           done();
       }); 
    });
});