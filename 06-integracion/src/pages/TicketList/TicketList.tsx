// import type { Ticket as TicketType } from '../../types'
import tickets from '../../data/data.json'
import TicketRow from '../../components/TicketRow/TicketRow'
import './TicketList.css'
function TicketList() {
    return (
        <div>
            <table className='ticket-table'>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Estado</th>

                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <TicketRow
                            key={ticket.id}
                            ticket={ticket}
                        // ticket={{ ...ticket, estado: ticket.estado as TicketType['estado'] }}

                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TicketList
