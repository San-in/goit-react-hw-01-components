import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { colors } from 'components/Statistics/colors';
import {
	StatisticsConteiner,
	StatisticsTitle,
	StatisticsList,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ stats, title }) => {
	return (
		<StatisticsConteiner>
			{title && <StatisticsTitle>{title}</StatisticsTitle>}
			<StatisticsList>
				{stats.map((item, index) => (
					<StatisticItem statItem={item} key={item.id} color={colors[index]} />
				))}
			</StatisticsList>
		</StatisticsConteiner>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
			id: PropTypes.string.isRequired,
		})
	).isRequired,
};
