import Swal from 'sweetalert2'
import { toast } from "react-toastify";

export function toastSwal(title: string) {
    Swal.fire({
      title: title,
      showConfirmButton: false,
      timer: 4000,
      toast: true,
      position: "top-right",
    });
}
export function hideLoading() {
    Swal.fire({
        title: 'Vui lòng chờ...!',
        text: 'Đang xử lý dữ liệu...',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        loaderHtml: ''
      })
}

export function Swalhtml(html: string) {
    Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        html: html
      })
}

export function SwalClose() {
    Swal.close()
}

export const toastError = (mess: any) => toast.error(`${mess}`)

export const toastSuccess = (mess: any) => toast.success(`${mess}`)

