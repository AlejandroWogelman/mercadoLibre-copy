import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export function alertModal() {
    Swal.fire({
        title: 'Importante',
        text: 'Este sitio es una copia de mercado libre, hecha sólo para fines educativos. NO posee relación con Mercado Libre.',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      })
   }
