export function formatCurrency( numberToFormat ) {
	const formatter = Intl.NumberFormat( 'de-DE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	} );

	return formatter.format( numberToFormat );
}