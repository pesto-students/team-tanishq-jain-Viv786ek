function generateTransactionId() {
  let id = 0;
  return function () {
    return Symbol(`TRANSACTION_ID_${id++}`);
  };
}

const getTransactionId = generateTransactionId();

const transaction1 = getTransactionId();
console.log(transaction1);
