const FormContact = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="nombre"
                    className="font-urbanist font-bold text-base"
                >
                    Nombre*
                </label>
                <input
                    type="text"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    className="border-none px-4 py-3 rounded-md"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="font-urbanist font-bold text-base"
                >
                    Email*
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    className="border-none px-4 py-3 rounded-md"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="comentarios"
                    className="font-urbanist font-bold text-base"
                >
                    Si tienes alguna duda en específico, escríbela aquí.
                </label>
                <textarea
                    type="text"
                    placeholder="Escribe tu comentario"
                    id="comentarios"
                    name="comentarios"
                    className="border-none px-4 py-3 rounded-md h-28"
                />
            </div>
            <input
                type="submit"
                value="Enviar"
                className="btn-contact font-urbanist font-base font-semibold rounded-2xl py-2 "
            />
        </form>
    );
};

export default FormContact;
