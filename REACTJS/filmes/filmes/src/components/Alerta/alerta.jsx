import Swal from "sweetalert2"
import "./alerta.css"

export const Alerta = ({
    title,
    text,
    icon,
    showCancelButton = null,
    confirmButtonText = null,
    cancelButtonText = null,
    confirmButtonColor = "#ff0202ff" ,
    cancelButtonColor = "#a4a4a4ff",
}) => {
    return (
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor
        })
    )
}