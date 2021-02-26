import React , {Fragment,useEffect,useState} from "react";

import Swal from 'sweetalert2'
import axios from 'axios';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function User() {

   const [pais,setPais] = React.useState([]);

   const url = 'https://restcountries.eu/rest/v2/all';

   useEffect( () =>{
    obtenerDatos();
   },[])



   const obtenerDatos =  async () =>{
     const data = await fetch(url)
     const paises = await data.json();
     setPais(paises);  
     console.log(pais);
   }

  
  const [datos,setDatos] = useState({
    nombre:'',
    apellido:'',
    documento:'',
    _pais:''
  });

  const onCambio = (e) =>{  
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
    console.log(datos._pais)
  
  }

  const enviarDatos = (e) =>{
    e.preventDefault();


    if(datos.nombre == ''){
      Swal.fire(
        'Debe llenar el campo nombre',
        'Presione el boton para continuar',
        'error'
      )
      return false;
    }
    if(datos.apellido == ''){
      Swal.fire(
        'Debe llenar el campo apellido',
        'Presione el boton para continuar',
        'error'
      )
      return false;
    }
    if(datos.documento == ''){
      Swal.fire(
        'Debe llenar el campo documento',
        'Presione el boton para continuar',
        'error'
      )
      return false;
    }

    
    Swal.fire(
      'Mensaje enviado',
      'Presione el boton para continuar',
      'success'
    )

  }
  return (
    <>
    <Fragment>
    <Container fluid>
      <Row>
        <Col md="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Información del formulario</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={enviarDatos}>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Nombre</label>
                      <Form.Control                       
                        placeholder="Nombre"
                        name="nombre"
                        type="text"
                        onChange={onCambio}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="6">
                    <Form.Group>
                      <label>Apellido</label>
                      <Form.Control
                        placeholder="Apellido"
                        name="apellido"
                        type="text"
                        onChange={onCambio}
                      ></Form.Control>
                    </Form.Group>
                  </Col>                
                </Row>

                <Row>
                  <Col className="pr-1" md="6">
                  <label>Selecionar un Pais</label>
                  <select className="form-control" name="_pais" onChange={onCambio}>
                   {
                     pais.map(item =>(
                       <option key={item.alpha3Code} value={item.alpha3Code} >{item.name}</option>
                     ))
                   }
                  </select>             
                  </Col>
                  <Col className="px-1" md="6">
                    <Form.Group>
                      <label>Numero de Documento</label>
                      <Form.Control
                        placeholder="Numero de Documento"
                        name="documento"
                        type="text"
                        onChange={onCambio}
                      ></Form.Control>
                    </Form.Group>
                  </Col>                
                </Row>              
                
              
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                >
                  Enviar
                </Button>
              <span>  </span>
                <Button
                  className="btn-fill pull-right"
                  type="button"
                  variant="info"
                >
                  Cancelar
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
    </Fragment>
  </>
  
  );
}

export default User;
