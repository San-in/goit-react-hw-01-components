import PropTypes from 'prop-types';
import {
	ItemConteiner,
	ItemLabel,
	ItemPercentage,
} from 'components/StatisticItem/StatisticItem.styled';

export const StatisticItem = ({ statItem, color }) => {
	return (
		<ItemConteiner color={color}>
			<ItemLabel>{statItem.label}</ItemLabel>
			<ItemPercentage>{statItem.percentage}%</ItemPercentage>
		</ItemConteiner>
	);
};

StatisticItem.propTypes = {
	statItem: PropTypes.exact({
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
		id: PropTypes.string.isRequired,
	}).isRequired,
	color: PropTypes.string.isRequired,
};
