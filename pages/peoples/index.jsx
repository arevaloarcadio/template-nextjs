import styles from '../../styles/Peoples.module.css'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function Peoples({ peoples }) {
  return (
    <Layout>
      <div className={styles.displayCenter}>
        <h1>Personas</h1>
      </div>
      <br/>
      <div className={styles.floatRight}>
        <Link 
          href="/peoples/new"
        >
          <button className="btn btn-primary">Agregar</button>
        </Link>
      </div>
       <br/>
      <div>
        <table id="tablePeoples" className="table table-responsive-sm table-striped table-align-middle">
          <thead className={styles.tableCentered}>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Apellido</th>
            </tr>
          </thead>
          <tbody className={styles.tableCentered}>
            {peoples.map(({ id, dni, name, last_name }) => (
              <tr key={id}>
                <td>{dni}</td>
                <td>{name}</td>
                <td>{last_name}</td>
                <td>
                  <Link 
                    href={'/peoples/' + id}
                  >
                    <button className="btn btn-secondary">Editar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}


export async function getServerSideProps() {
  
  const res = await fetch("http://localhost:3000/api/peoples", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    }
  });
  
  const peoples = await res.json();
  
  return { 
    props: { 
      peoples 
    }
  };
}