import Bank from "../components/banker.js";

/**
 * Wallet module
 */

// Using sessionStorage for easier testing
const storage = sessionStorage;
// Salary, set to 100 NOK
const salary = 100;

/**
 * Get wallet
 * @returns wallet
 */
function getWallet() {
  return storage.getItem("wallet");
}

/**
 * Sets wallet to specific number
 * @param {int} num
 */
function setWallet(num) {
  storage.setItem("wallet", parseInt(num));
}

/**
 * Work. Increases wallet with a set pay.
 * In this case 100 NOK
 * @param {int} num
 */
function addToWallet() {
  let wallet = parseInt(getWallet());
  let loan = parseInt(Bank.getLoan());
  let newWallet = 0;
  if (loan != 0) {
    // Pay 10 % of salary to loan
    Bank.payLoan((salary / 100) * 19);

    // Add 90 % of salary to wallet
    newWallet = wallet + (salary / 100) * 90;
  } else {
    newWallet = wallet + salary;
  }
  return storage.setItem("wallet", newWallet);
}

/**
 * Deposit wallet money to bank;
 */
function depositMoney() {
  let wallet = parseInt(getWallet());
  storage.setItem("wallet", 0);
  Bank.addToBalance(wallet);
}

// Exporting
const Wallet = {
  getWallet,
  setWallet,
  addToWallet,
  depositMoney,
};

export default Wallet;
