import type { Ticket } from '../../types'
import './TicketRow.css'
type Props = {
    ticket: Ticket

}
function TicketRow({ ticket }: Props) {
    return (
        <tr className='ticket-row'>
            <td>{ticket.producto}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.estado}</td>
        </tr>
    )
}
export default TicketRow