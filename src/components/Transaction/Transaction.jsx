import { Row } from 'components/Transaction/Transaction.styled';
import PropTypes from 'prop-types';

export const Transaction = ({ transaction }) => {
	const { type, amount, currency } = transaction;
	return (
		<Row>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</Row>
	);
};
Transaction.propTypes = {
	transaction: PropTypes.exact({
		id: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
	}).isRequired,
};
