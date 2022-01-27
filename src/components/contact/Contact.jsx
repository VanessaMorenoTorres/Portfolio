import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault()
        
    }


    return(
        <div className="c" id='contact'>
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
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch, how can I help you? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi in odit repellendus ex consequatur tempora. Laudantium, iusto rem nesciunt, velit ipsam impedit dignissimos dolor mollitia recusandae officiis illum, obcaecati eum!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}> 
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name'/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject'/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email'/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} name="message" placeholder='Message' id="" cols="30" rows="5"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;