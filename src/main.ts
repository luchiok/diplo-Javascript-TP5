// Proyecto de instalación de gas natural

class Proyecto {

    // Modificadores de acceso
    public id: number
    public tipo: string
    protected poseeRed: boolean

    constructor(id: number, tipo: string, poseeRed: boolean) {
        this.id = id
        this.tipo = tipo
        this.poseeRed = poseeRed
    }

    // Método tipado, utilizo un boolean para preguntar si el domicilio posee red de gas natural
    public mostrarRed(): string {
        return this.poseeRed ? 'Sí' : 'No'
    }
}

// Herencia de proyecto
class Domicilio extends Proyecto {

    public calle: string
    public numero: number
    public ciudad: string

    // Parámetros opcionales
    public entreCalle1?: string
    public entreCalle2?: string

    // Propiedad privada
    private estadoProyecto: string

    constructor(
        id: number,
        tipo: string,
        poseeRed: boolean,
        calle: string,
        numero: number,
        ciudad: string,
        estadoProyecto: string,
        entreCalle1?: string,
        entreCalle2?: string
    ) {

        super(id, tipo, poseeRed)

        this.calle = calle
        this.numero = numero
        this.ciudad = ciudad
        this.estadoProyecto = estadoProyecto
        this.entreCalle1 = entreCalle1
        this.entreCalle2 = entreCalle2
    }

    // Método público
    public obtenerEstado(): string {
        return this.estadoProyecto
    }
}

// Función con retorno void
function mostrarDatos(proyecto: Domicilio): void {

    console.log('==🏡== DATOS DEL PROYECTO ==🏡==')

    console.log('ID: ', proyecto.id)
    console.log('Tipo: ', proyecto.tipo)
    console.log('Posee red: ', proyecto.mostrarRed())

    console.log(
        'Dirección: ',
        proyecto.calle,
        proyecto.numero
    )

    // Verificación de opcionales
    if (proyecto.entreCalle1 && proyecto.entreCalle2) {

        console.log(
            'Entre calles:',
            proyecto.entreCalle1,
            'y',
            proyecto.entreCalle2
        )
    }

    console.log('Ciudad:', proyecto.ciudad)

    console.log(
        'Estado del proyecto:',
        proyecto.obtenerEstado()
    )
}

// Función con never
function mostrarError(mensaje: string): never {
    throw new Error(mensaje)
}

// Crear objeto
const proyecto1 = new Domicilio(
    1,
    'Nuevo',
    true,
    'Uriburu',
    537,
    'Punta Alta',
    'En proceso',
    'Rivadavia',
    'Mitre'
)

// Mostrar datos
mostrarDatos(proyecto1)

// Ejemplo de uso never
// mostrarError('Error en el sistema')