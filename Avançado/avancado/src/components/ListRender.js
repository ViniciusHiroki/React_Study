import { useState } from 'react'

const ListRender = () => {
    const [list] = useState([{id: 1, nome: 'Jairson'}, {id: 2, nome: 'Joelson'}, {id: 3, nome: 'Josinei'}]);

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {item.nome}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender