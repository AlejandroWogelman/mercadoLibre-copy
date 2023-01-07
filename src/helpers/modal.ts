import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export function alertModal() {
    Swal.fire({
        title: 'Importante',
        text: 'Este sitio emula lo VISUAL de Mercado Libre, hecha sólo para fines de aprendizaje (maquetación). No es un sitio real de compra y/o venta. NO posee relación con Mercado Libre.',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      })
   }
