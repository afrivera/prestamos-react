import { useState } from 'react';
import { calcularTotal } from '../helper';

const Formulario = ({ cantidad, plazo, setCantidad, setPlazo, setCargando,setTotal }) => {

    // definir state
    const [error, setError] = useState(false);

    // submit del usuario
    const handleSubmit = e => {
        e.preventDefault();
        if( cantidad === 0 || plazo === ''){
            setError(true);
            return;
        }

        // eliminar error previo
        setError(false);

        // habilitar el spinner
        setCargando(true);

        setTimeout(() => {
            // realizar la cotización
            const total = calcularTotal(cantidad, plazo);
            
            // una vez calculado guardar total
            setTotal( total );

            setCargando( false );
            
        }, 3000);



    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div>
                    <label>Cantidad Prestamo {plazo}</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        min="0"
                        onChange={e => setCantidad( parseInt( e.target.value) )}
                    />
                    </div>
                    <div>
                    <label>Plazo para Pagar</label>
                    <select className="u-full-width" onChange={e=> setPlazo( parseInt( e.target.value))}>
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                    </div>
                    <div>
                    <input
                        type="submit"
                        value="Calcular"
                        className="button-primary u-full-width"
                    />
                    </div>
                </div>
            </form>
            {
                error &&
                <p className='error'>Todos los Campos son obligatorios</p>
            }
        </>
    );
};

export default Formulario;
