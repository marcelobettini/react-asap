import type { iClient } from '../types'
import './Client.css'

export default function Client({ name, email, phone }: iClient) {
    console.log("se monta Client")
    return (
        <li className='client-card'>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </li>
    )
}
