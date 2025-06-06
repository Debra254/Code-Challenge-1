function estimateTransactionFee(amountToSend) {
    let fee = amountToSend * 0.015;

    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    const total = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${fee}
Total Amount to Be Debited: KES ${total}

Send Money Securely!`);
}

const amount = Number(prompt("How much would you like to send? (KES):"));
estimateTransactionFee(amount);
