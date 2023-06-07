import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../../components/Layout'
import styles from '../../styles/Peoples.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function New() {
  
  const [people, setPeople] = useState({
    dni: "",
    name: "",
    last_name: "",
  });

  const [messages, setMessages] = useState([]);
  
  const router = useRouter();
  
  useEffect(() => {
    const fetchPeople = async (id) => {
      try {
        
        const res = await fetch("http://localhost:3000/api/peoples/" + id, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          }
        });
        const people = await res.json();
        console.log(people)
        //console.log(await res.json())
        setPeople(people);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchPeople(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  const handleChange = ({ target: { name, value } }) =>
    setProduct({ ...product, [name]: value });

  const postData = async () => {
    try {
      
      const res = await fetch("/api/peoples/" + router.query?.id , {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(people)
      });

    const data = await res.json();
    
    console.log(toast)
    
    toast.success("Task deleted");

    /*if(!data.data){
      setMessages(data?.errors)
    }*/

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
          value={people.dni}
          onChange={handleChange}
        />
       </div>
      <div className={styles.displayCenterPadding}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Nombre"
          autoComplete="off"
          name="name"
          value={people.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.displayCenterPadding}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Apellido"
          autoComplete="off"
          name="last_name"
          value={people.last_name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.displayCenterPadding}>
        <button className="btn btn-success" onClick={postData}>Modificar</button>
      </div>
      {Object.entries(messages).map(([key, value]) => (
        <div className={styles.displayCenter} key={key}>
          {value}
        </div>
      ))}
    </Layout>
  )
}
