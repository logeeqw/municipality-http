
/**
 *@author Quinn Logee
 *@version 0.01
 * @summary rolls an input type of dice an input number of time
 * @todo nothing
 */

"use strict";
let acctNum;
acctNum = 0;

document.getElementById(`problem`).addEventListener("click", function (){
    problem()
});

document.getElementById(`login`).addEventListener("click", function (){
    login()
});

/**
 * @method
 * @desc allows the user to report an issue
 * @returns {null}
 */
function problem(){
    window.prompt(`What seems to be the issue?`);
    window.prompt(`Where did this occur`);
    window.prompt(`What do you think the appropriate response is?`);
    loadUsers();
    writeUsers();
}

/**
 * @method
 * @desc allows the user to log in
 * @returns {null}
 */
function login(){
    window.prompt (`Please enter your name`);
    window.prompt (`Please enter a password`);
    window.alert(`Your user ID is ${acctNum ++}`);
    loadUsers();
    writeUsers();
}

/**
 * @method
 * @desc puts user array into I/O
 * @returns {null}
 */
function loadUsers() {
    let customersFile = IO.readFileSync(`data/user-data.csv`, 'utf8');
    let lines = customersFile.toString().split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
        customers.push(lines[i].toString().split(/,/));
    }
}

/**
 * @method
 * @desc Writes the user array to a different file
 * @returns {null}
 */
function writeUsers() {
    const COLUMNS = 4;
    for (let i = 0; i < users.length; i++) {
        if (users[i]) {
            for (let j = 0; j < COLUMNS; j++) {
                if (j < COLUMNS - 1) {
                    IO.appendFileSync(`data/dataX.csv`, `${users[i][j]},`);
                } else if (i < customers.length - 1) {
                    IO.appendFileSync(`data/dataX.csv`, `${users[i][j]}\n`);
                } else {
                    IO.appendFileSync(`data/dataX.csv`, `${users[i][j]}`);
                }
            }
        }
    }
    IO.unlinkSync(`data/user-data.csv`);
    IO.renameSync(`data/dataX.csv`, `data/user-data.csv`);
}