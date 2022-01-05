import "./intro.css"
import Me from "../../img/vm2.png"
import Mouse from "../../img/mouse.png"

const Intro = () => {
    return (
        <div className='i'>
            <div className= 'i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Vanessa Moreno</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Social Worker</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Placeholder</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop modern websites of all types, and am passionate about mental health and inclusivity.
                    </p>
                </div>
                <img src={Mouse} alt="" className="i-scroll" />

            </div>
            
            <div className= 'i-right'>
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
};

export default Intro