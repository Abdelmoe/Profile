import React , {useState} from 'react';
import {images} from '../../constants';
import {AppWrap , MotionWrap} from '../../wrapper';
import {client } from '../../client';
import './Footer.scss';

const  Footer = () => {
    const [formData, setFormData] = useState({name:'' , email:'' , message:''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const {name , email , message} = formData;

    
    const handleChangeInput =  (e) => {
        const {name , value} = e.target;
        setFormData({...formData , [name]:value })
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name : name,
            email:email,
            message:message,


        }
        client.create(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        })
    }
return (
    <>
        <h2 className='head-text'>Take a coffe && chat with me</h2>

        <div className="app__footer-cards">
            <div className="app__footer-card">
                <img src={images.email} alt="email" />
                <a href="mailto:MoonMoh2515@outlook.sa" className='p-text'>MoonMoh2515@outlook.sa</a>
            </div>
            <div className="app__footer-card">
                <img src={images.mobile} alt="mobile" />
                <a href="tel: +249 (911) 080-319" className='p-text'>+249 (911) 080-319</a>
            </div>

         {!isFormSubmitted   ? 
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className='p-text' name='name' type="text"  placeholder='Your Name ' value={name}  onChange={handleChangeInput}/>
                </div>
                <div className="app__flex">
                    <input className='p-text' name='email' type="email"  placeholder='Your email ' value={email}  onChange={handleChangeInput}/>
                </div>
                <div>
                    <textarea 
                      className='p-text'
                      placeholder='Your Massage'
                      value={message}
                      name="message"
                      onChange={handleChangeInput}
                            
                    
                    >

                    </textarea>

                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                

            </div>
            :
            <div>
                <h3 className='head-text'>Thank you for getting in touch!</h3>
            </div>
        }
        </div>
    </>
)
}


export default AppWrap(

    MotionWrap(Footer , 'app__footer'),
    'contact',
    'app__whitebg'
) 
// export default footer;
