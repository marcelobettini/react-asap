import { useForm, type SubmitHandler } from 'react-hook-form'
import './NewTicket.css'
type Inputs = {
    productName: string
    issue: string
    userName: string
    userEmail: string
    phone: string
}
function NewTicket() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {

        console.log(data)
        reset()
    }

    return (
        <div className="new-ticket-container">
            <form className="new-ticket-form" onSubmit={handleSubmit(onSubmit)}>
                <div className='control-group'>
                    <label htmlFor="productName">Producto:</label>
                    <input type="text" id="productName"
                        {...register("productName", {
                            required: {
                                value: true,
                                message: "Nombre de producto es requerido",
                            },
                            maxLength: {
                                value: 20,
                                message: "Nombre de producto no puede exceder 20 caracteres",
                            },
                            minLength: {
                                value: 2,
                                message: "Nombre de producto debe tener al menos 2 caracteres",
                            },
                        })} />
                    {errors.productName && <span className="error">{errors.productName.message}</span>}
                </div>
                <div className='control-group'>
                    <label htmlFor="issue">Problema:</label>
                    <textarea id="issue"
                        {...register("issue", {
                            required: {
                                value: true,
                                message: "Descripción del problema es requerida",
                            },
                            minLength: {
                                value: 16,
                                message: "Descripción del problema debe tener al menos 16 caracteres",
                            },
                        })}></textarea>
                    {errors.issue && <span className="error">{errors.issue.message}</span>}
                </div>
                <div className='control-group'>
                    <label htmlFor="userName">Nombre usuario:</label>
                    <input type="text" id="userName"
                        {...register("userName", {
                            required: {
                                value: true,
                                message: "Nombre de usuario es requerido",
                            },
                            maxLength: {
                                value: 25,
                                message: "Nombre de usuario no puede exceder 25 caracteres",
                            },
                            minLength: {
                                value: 7,
                                message: "Nombre de usuario debe tener al menos 7 caracteres",
                            },
                        })} />
                    {errors.userName && <span className="error">{errors.userName.message}</span>}
                </div>
                <div className='control-group'>
                    <label htmlFor="userEmail">Email:</label>
                    <input type="email" id="userEmail"
                        {...register("userEmail", {
                            required: {
                                value: true,
                                message: "Email es requerido",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Email no es válido",
                            },
                        })} />
                    {errors.userEmail && <span className="error">{errors.userEmail.message}</span>}
                </div>
                <div className='control-group'>
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone"
                        {...register("phone", {

                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Teléfono no es válido",
                            },
                        })} />
                    {errors.phone && <span className="error">{errors.phone.message}</span>}
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}
export default NewTicket