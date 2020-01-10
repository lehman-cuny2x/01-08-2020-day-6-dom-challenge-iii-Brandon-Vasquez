
const fromCurrEl = document.getElementById('fromCurr');
const fromAmmountEl = document.getElementById('fromAmmount');
const toCurrencyEl = document.getElementById('toCurr');
const to_ammountEl = document.getElementById('toAmmount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

fromCurrEl.addEventListener('change', calculate);
fromAmmountEl.addEventListener('input', calculate);
toCurrencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	const temp = fromCurrEl.value;
	fromCurrEl.value = toCurrencyEl.value;
	toCurrencyEl.value = temp;
	calculate();
});

function calculate() {
	const fromCurr = fromCurrEl.value;
	const toCurr = toCurrencyEl.value;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurr}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[toCurr];
		rateEl.innerText = `1 ${fromCurr} = ${rate} ${toCurr}`
		to_ammountEl.value = (fromAmmountEl.value * rate).toFixed(2);
	})
}

calculate();