import { Row } from "./Transaction.styled";

export const Transaction = ({transaction}) => {
    const{ type, amount, currency} = transaction;
    return (
        <Row>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </Row>
    )
};