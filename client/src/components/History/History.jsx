import axios from "axios";
import { useState } from "react"

const History = () => {
    const [information , setInformation] = useState({
        email:'',
        phone:''
    })
    const [history, setHistory] = useState([]);


    const handelChange = (e)=>{
        setInformation(prev=> ({...prev, [e.target.name]: e.target.value}))
        console.log(information)
    }

    const handelHistory = async ()=>{
        try {
            let param = new URLSearchParams(information);
            const res = await axios.get(`http://localhost:3002/history?${param}`)
            console.log(res.data)
           setHistory(res.data)
           console.log(history)
        } catch (error) {
            return error
        }

    }

  return (
    <>
        <input type="text" placeholder="email" onChange={handelChange} name="email" />
        <input type="text" onChange={handelChange} name="phone" />
        <button onClick={handelHistory} >Check history </button>

        <div className="historyView">
            {
                history.map((el)=>(
                    <>
                    <div>
                        {el.idOrders}

                       <pre>
                       {el.orderInfo}
                        </pre> 

                    </div>
                    </>
                ))
            }
        </div>

    </>
  )
}

export default History