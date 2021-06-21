const fs = require("fs");

/**
 * if the error is caught, it will not elevated further.
 */
const main = () => {
    readNotExistFile()
        .then(
            () => { console.log('good!') },
            e => console.error('nooooooo.. but it has not been here because it is caught:' + e)
        );
 }

const readNotExistFile = async () => {
    try {
       await fs.promises.readFile('notExist.txt');
    } catch (e) {
        console.error('hi, ' + e);
    }
}

// readNotExistFile();
main();