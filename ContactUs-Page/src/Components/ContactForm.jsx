import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {

    return(
        <section className="Form">

            <div className="contact-Form">

                <div className="top-btns">
                    <Button text = "VIA SUPER CHAT" icon={<MdOutlineMessage fontSize="24px"/>} />

                    <Button text = "VIA CALL" icon={<FiPhoneCall fontSize="24px"/>} />
                </div>

                
                  <Button isOutline={true} text = "VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>} />
                

                <form action="">

                    <div className="form-elements">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                    </div>

                    <div className="form-elements">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email"/>
                    </div>

                    <div className="form-elements">
                        <label htmlFor="name">Textarea</label>
                        <textarea name="name" rows="6"/>
                    </div>

                    {/* for submit button */}
                    <div className="submit-btn">
                        <Button text = "SUBMIT" />
                    </div>
                </form>

            </div>

            <div className="contact-Image">
                <img src="/images/contact-services.png" alt="contact services" />
            </div>
        </section>
    )

}

export default ContactForm;