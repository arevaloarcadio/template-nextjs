import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../../components/Layout'
import styles from '../../styles/Peoples.module.css'
import { useState } from 'react';
import Router from 'next/router';
import Toast from '../../utils/toast'

export default function New() {
  
  const [dni, setDni] = useState('');
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [messages, setMessages] = useState([]);

  const postData = async () => {
    try {
      
      setMessages([])

      const res = await fetch("/api/peoples", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({dni,name,last_name})
      });

    const data = await res.json();
    
    console.log(data)
    
    if(data?.message){
      //setMessages([data?.message])
      Toast(data?.message,'error');

    }else{
      Toast("Persona agregada existosamente",'success');
      Router.push('/peoples')
    }
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
       <div className={styles.displayCenter}>
        <h1>Agregar Persona</h1>
      </div>
      <div className={styles.displayCenterPadding}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="DNI"
          autoComplete="off"
          name="dni"
          value={dni}
          onChange={(event) => setDni(event.target.value)}
        />
       </div>
      <div className={styles.displayCenterPadding}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Nombre"
          autoComplete="off"
          name="name"
          value={name}
           onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={styles.displayCenterPadding}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Apellido"
          autoComplete="off"
          name="last_name"
          value={last_name}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      
      <br/>
      {Object.entries(messages).map(([key, value]) => (
        <div className={styles.displayCenter} key={key}>
          {value}
        </div>
      ))}
      <br/>
      <div className={styles.displayCenterPadding}>
        <button className="btn btn-success" onClick={postData}>Agregar</button>
      </div>
    </Layout>
  )
}
