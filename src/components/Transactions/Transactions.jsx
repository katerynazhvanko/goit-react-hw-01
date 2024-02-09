import PropTypes from 'prop-types'

import css from './Transactions.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
                <tr className={css.title}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} id={id} className={css.string}>
                            <td className={css.type}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                )})}  
            </tbody>
        </table>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired).isRequired
}