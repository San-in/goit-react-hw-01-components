import { Transaction } from 'components/Transaction/Transaction';
import {
	Table,
	TableBody,
} from 'components/TransactionHistory/TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>
			<TableBody>
				{transactions.map(transaction => (
					<Transaction transaction={transaction} key={transaction.id} />
				))}
			</TableBody>
		</Table>
	);
};

TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}).isRequired
	),
};
