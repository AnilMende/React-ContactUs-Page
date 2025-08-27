import { MdOutlineMessage } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Button = (props) => {
    // props destructuring
    const {isOutline, icon, text} = props

    return(
        <div>
            <button className={isOutline ? "outline-btn" : "primary-btn"}>
                {props.icon}
                {props.text}  
            </button>

            

        </div>
        
    )

}

export default Button;