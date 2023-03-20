import { Transaction } from "components/Transaction/Transaction";
import { Table, TableBody } from "./TransactionHistory.styled";

export const TransactionHistory = ({transactions}) => {
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
                {transactions.map((transaction) => <Transaction transaction={transaction} key={transaction.id}/> )}
            </TableBody>
        </Table>
    )
}