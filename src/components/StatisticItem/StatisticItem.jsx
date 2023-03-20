import PropTypes from "prop-types";
import { ItemConteiner, ItemLabel, ItemPercentage } from "./StatisticItem.styled";

export const StatisticItem = ({statItem, color}) => {
    return (
        <ItemConteiner style={{backgroundColor:color}}>
        <ItemLabel>{statItem.label}</ItemLabel>
        <ItemPercentage>{`${statItem.percentage}%`}</ItemPercentage>
        </ItemConteiner>
    )
};

StatisticItem.propTypes = {
    statItem:PropTypes.exact({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id:PropTypes.string.isRequired,
       
    }),
    color:PropTypes.string.isRequired,
}

