import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

const Contact = () => {
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info"></div>
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +1  123 456 7890
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            contact@vanessa.dev
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Dallas, Texas
                        </div>
                </div>
                <div className="c-right">

                </div>
            </div>
        </div>
    )
}

export default Contact;