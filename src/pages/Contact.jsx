import axios from "axios"
import { useState } from "react"

const initialFormData = {
    fullName: '',
    email: '',
    message: '',
    stack: 'none',
    access_key: '6eec6cb9-254c-47c4-bc51-6e0dfcf69583'
}

function Contact () {
    const [formData, setFormData] = useState(initialFormData)
    const [alertMessage, setAlertMessage] = useState('')

    const handleSubmit = async(event) => {
        event.preventDefault()

        const url = 'https://api.web3forms.com/submit'
        const res = await axios.post(url, formData)

        setAlertMessage('Your submission was recieved!')
        setFormData({
            ...initialFormData
        })
    
        setTimeout(() => {
            setAlertMessage('')
        }, 3500)
    }

    const handleInputChange = (event) => {
        const dataProp = event.target.name
        setFormData({
            ...formData,
            [dataProp]: event.target.value
        })
    }

    return(
        <>
            <h1 className="text-center light-font">Contact Me</h1>
            
            {alertMessage && <p className="alert-message text-center">{alertMessage}</p> }


            <form onSubmit={handleSubmit} className="contact-form column">
                <input onChange={handleInputChange} value={formData.fullName} name="fullName" type="text" placeholder="Enter you full name"/>
                <input onChange={handleInputChange} value={formData.email} name="email" type="text" placeholder="Enter your email address"/>
                <label>Please choose the stack you are inquiring about:</label>
                
                <select onChange={handleInputChange} name="stack" value={formData.stack}>
                    <option value="none" defaultValue={true}>None</option>
                    <option value="MERN">MERN</option>
                    <option value="MEAN">MEAN</option>
                    <option value="MEVN">MEVN</option>
                </select>
                <textarea onChange={handleInputChange} value={formData.message} name="message"rows="10" cols="30" placeholder="Enter you message"></textarea>
                <button>Send</button>
            </form>
        </>
    )
}     

export default Contact