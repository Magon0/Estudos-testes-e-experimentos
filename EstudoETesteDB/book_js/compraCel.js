/*
const calculoTotalCompra = function(){
//Calcular Preço total da compra de um celular
var SaldoBancario
const LimiteMensal = 500;
const TXimposto =10
const PrecoTelefone=250
const PrecoAcessório=20
    while (SaldoBancario > LimiteMensal) {
        SaldoBancario += PrecoAcessório
        SaldoBancario+= PrecoAcessório
        SaldoBancario+= PrecoTelefone
        console.log(SaldoBancario)
    }
    console.log(SaldoBancario)
}
*/
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// continue comprando até não ter mais dinheiro
while (amount < bank_balance) {
	// compre um novo celular!
	amount = amount + PHONE_PRICE;

	// podemos comprar o acessório?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

// não esqueça a fatia do governo!
amount = amount + calculateTax( amount );

console.log(
	"Sua compra: " + formatAmount( amount )
);
// Sua compra: $334.76

// Você pode pagar a conta?
if (amount > bank_balance) {
	console.log(
		"Você não pode pagar a conta. :("
	);
}
// Você não pode pagar a conta. :(