function calculateTax() {
    const assetValue = parseFloat(document.getElementById('income').value);
    let tax = 0;

    if (assetValue <= 100000) {
        tax = (assetValue - 0) * 0.03;
    } else if (assetValue <= 150000) {
        tax = (100000 * 0.03) + (assetValue - 100000) * 0.05;
    } else if (assetValue <= 300000) {
        tax = (100000 * 0.03) + (50000 * 0.05) + (assetValue - 150000) * 0.10;
    } else if (assetValue <= 500000) {
        tax = (100000 * 0.03) + (50000 * 0.05) + (150000 * 0.10) + (assetValue - 300000) * 0.15;
    } else if (assetValue <= 750000) {
        tax = (100000 * 0.03) + (50000 * 0.05) + (150000 * 0.10) + (200000 * 0.15) + (assetValue - 500000) * 0.22;
    } else if (assetValue <= 1000000) {
        tax = (100000 * 0.03) + (50000 * 0.05) + (150000 * 0.10) + (200000 * 0.15) + (250000 * 0.22) + (assetValue - 750000) * 0.27;
    } else if (assetValue <= 2000000) {
        tax = (100000 * 0.03) + (50000 * 0.05) + (150000 * 0.10) + (200000 * 0.15) + (250000 * 0.22) + (250000 * 0.27) + (assetValue - 1000000) * 0.35;
    } else {
        tax = (100000 * 0.03) + (50000 * 0.05) + (150000 * 0.10) + (200000 * 0.15) + (250000 * 0.22) + (250000 * 0.27) + (1000000 * 0.35) + (assetValue - 2000000) * 0.45;
    }

    // Calculate monthly tax
    const monthlyTax = tax / 12;

    document.getElementById('result').innerText = `ภาษีที่ต้องจ่ายต่อเดือน: ${monthlyTax.toFixed(2)} บาท`;
}
