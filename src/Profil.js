import React, { Component } from 'react';
import './App.css';
import foto from './foto.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Profil extends Component {
    render() {
        return (
            <div className="container">
                <div className="foto">
                <center><img src={foto} width="350px" height="350px" border="5"/></center>
                </div>
                <div className="container">
                    <center><h3>-----Nurcahya Nania Anabela-----</h3></center>
                    <center><h5>Jurusan Teknologi Informasi</h5></center>
                    <center><h5>Prodi D4 Teknik Informatika</h5></center>
                    <center><h5>Politeknik Negeri Malang</h5></center>
                    <center><h3>----------------------------------------------------------------------------</h3></center>
                </div>
                </div>
        );
    }
  }

