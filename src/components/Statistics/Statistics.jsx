import PropTypes from "prop-types";
import { StatisticItem } from "components/StatisticItem/StatisticItem";
import { colors } from "./colors";
import { 
    StatisticsConteiner,
    StatisticsTitle,
    StatisticsList,

} from "./Statistics.styled";

export const Statistics = ({dataOfstats, title}) => {
  
    return (
        <StatisticsConteiner>
            {title && <StatisticsTitle>{title}</StatisticsTitle> }
            <StatisticsList>
                {dataOfstats.map((item, index) => 
                     <StatisticItem statItem={item} key={item.id} color={colors[index]}/>)}
             </StatisticsList>
        </StatisticsConteiner>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    dataOfstats:PropTypes.arrayOf(PropTypes.object).isRequired,
}