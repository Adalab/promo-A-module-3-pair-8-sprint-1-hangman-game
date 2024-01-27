function ListadoTareas () {
   return (
      <ul className="task-list">
                <li className="tachado">
                    <input id="1657692730126289" type="checkbox" checked="" />
                    Recoger setas en el campo
                </li>
                <li className="tachado">
                    <input id="16576927301283248" type="checkbox" checked="" />
                    Comprar pilas
                </li>
                <li className="tachado">
                    <input id="16576927301315832" type="checkbox" checked=""/>
                    Poner una lavadora de blancos
                </li>
                <li>
                    <input id="16576927301332268" type="checkbox"/>
                    Aprender cómo se realizan las peticiones al servidor
                    en JavaScript
                </li>
                <li>
                    <input id="16576927301332392" type="checkbox"/>
                    Ir al gimnasio
                </li>
                <li>
                    <input id="16576927301334592" type="checkbox"/>
                    Comprar bragas
                </li>
            </ul>
   )
}

export default ListadoTareas