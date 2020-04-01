import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
// import img9 from './img9.jpg';
// import img10 from './img10.jpg';
// import img11 from './img11.jpg';
// import img12 from './img12.jpg';

export class Lagu extends Component {
    constructor(){
        super();
        this.state = {
            hide1 : true,
            hide2 : true,
            hide3 : true,
            hide4 : true,
            hide5 : true,
            hide6 : true,
            hide7 : true,
            hide8 : true,            
        }

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);
        this.handleChange8 = this.handleChange8.bind(this);

    };

    handleChange1(event){
        if(this.state.hide1){
            this.setState({hide1: false});
            this.setState({hide2: true});
            this.setState({hide3: true});
            this.setState({hide4: true});
            this.setState({hide8: true});
            this.setState({hide7: true});
            this.setState({hide6: true});
            this.setState({hide5: true});
        }
        else{
            this.setState({hide1: true});
        }
    }
    handleChange2(event){
        if(this.state.hide2){
            this.setState({hide2: false});
            this.setState({hide8: true});
            this.setState({hide7: true});
            this.setState({hide6: true});
            this.setState({hide5: true});
            this.setState({hide1: true});
            this.setState({hide3: true});
            this.setState({hide4: true});
        }
        else{
            this.setState({hide2: true});
        }
    }

    handleChange3(event){
        if(this.state.hide3){
            this.setState({hide3: false});
            this.setState({hide8: true});
            this.setState({hide7: true});
            this.setState({hide6: true});
            this.setState({hide5: true});
            this.setState({hide2: true});
            this.setState({hide1: true});
            this.setState({hide4: true});
        }
        else{
            this.setState({hide3: true});
        }
    }

    handleChange4(event){
        if(this.state.hide4){
            this.setState({hide4: false});
            this.setState({hide8: true});
            this.setState({hide7: true});
            this.setState({hide6: true});
            this.setState({hide5: true});
            this.setState({hide3: true});
            this.setState({hide2: true});
            this.setState({hide1: true});
        }
        else{
            this.setState({hide4: true});
        }
    }

    handleChange5(event){
        if(this.state.hide5){
            this.setState({hide5: false});
            this.setState({hide6: true});
            this.setState({hide7: true});
            this.setState({hide8: true});
            this.setState({hide4: true});
            this.setState({hide3: true});
            this.setState({hide2: true});
            this.setState({hide1: true});
        }
        else{
            this.setState({hide5: true});
        }
    }

    handleChange6(event){
        if(this.state.hide6){
            this.setState({hide6: false});
            this.setState({hide7: true});
            this.setState({hide8: true});
            this.setState({hide5: true});
            this.setState({hide4: true});
            this.setState({hide3: true});
            this.setState({hide2: true});
            this.setState({hide1: true});
        }
        else{
            this.setState({hide6: true});
        }
    }

    handleChange7(event){
        if(this.state.hide7){
            this.setState({hide7: false});
            this.setState({hide8: true});
            this.setState({hide6: true});
            this.setState({hide5: true});
            this.setState({hide4: true});
            this.setState({hide3: true});
            this.setState({hide2: true});
            this.setState({hide1: true});
        }
        else{
            this.setState({hide7: true});
        }
    }

    handleChange8(event){
        if(this.state.hide8){
            this.setState({hide8: false});
            this.setState({hide7: true});
            this.setState({hide6: true});
            this.setState({hide5: true});
            this.setState({hide4: true});
            this.setState({hide3: true});
            this.setState({hide2: true});
            this.setState({hide1: true});
        }
        else{
            this.setState({hide8: true});
        }
    }

    render() {
        const style1 = this.state.hide1 ? {display: 'none'} : {};
        const style2 = this.state.hide2 ? {display: 'none'} : {};
        const style3 = this.state.hide3 ? {display: 'none'} : {};
        const style4 = this.state.hide4 ? {display: 'none'} : {};
        const style5 = this.state.hide5 ? {display: 'none'} : {};
        const style6 = this.state.hide6 ? {display: 'none'} : {};
        const style7 = this.state.hide7 ? {display: 'none'} : {};
        const style8 = this.state.hide8 ? {display: 'none'} : {};
        return (
            <div className="row">
            <div className="col-sm-9">
            <div className="row">
                <div className="col-sm-3">
                    <img src= { img1 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Bungsu - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange1} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                </div>

                <div className="col-sm-3">
                    <img src= { img2 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Bungsu - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange2} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                </div>

                <div class="col-sm-3">
                    <img src={ img3 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Sulung - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange3} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                </div>

                <div class="col-sm-3">
                    <img src={ img4 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Rehat - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange4} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                </div>

                    <div className="row">
                    <div className="col-sm-3">
                    <img src={ img5 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Konon - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange5} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                </div>

                <div class="col-sm-3">
                    <img src={ img6 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Jakarta - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange6} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                </div>

                <div class="col-sm-3">
                    <img src={ img7 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Topik - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange7} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                </div>

                <div class="col-sm-3">
                    <img src={ img8 } class="img-thumbnail" width="250px" height="300px" />
                    <div className="container">
                        <h5><center>Sausade - Kunto Aji</center></h5>
                    </div>
                    <div>
                    <button type="button" onClick={this.handleChange8} class="btn btn-secondary btn-lg btn-block">
                        Lihat Lirik
                    </button>
                    </div>
                    </div>

                    <div className="row">
                    </div>
            </div>
            </div>
            </div>

            <div className="col-sm-3">
                <div className="rows" style={style1}>
                <h1>Bungsu - Kunto Aji</h1>
                    <div className="container">
                        <p>Cukupkanlah</p>
                        <p>Ikatanmu</p>
                        <p>Relakanlah yang tak seharusnya untukmu</p>
                        <p>Cukupkanlah</p>
                        <p>Ikatanmu</p>
                        <p>Relakanlah yang tak seharusnya untukmu</p>
                        <p>Cukupkanlah</p>
                        <p>Ikatanmu</p>
                        <p>Relakanlah yang tak seharusnya untukmu</p>
                        <p>Cukupkanlah</p>
                        <p>Ikatanmu</p>
                        <p>Relakanlah yang tak seharusnya untukmu</p>
                        <p>Sebelum kau menjaga</p>
                        <p>Merawat melindungi</p>
                        <p>Segala yang berarti</p>
                        <p>Yang sebaiknya kau jaga</p>
                        <p>Adalah dirimu sendiri</p>
                    </div>
                </div>
                <div className="rows" style={style2}>
                <h1>Pilu Membiru - Kunto Aji</h1>
                    <div className="container">
                        <p>Akhirnya aku lihat lagi</p>
                        <p>Sederhana tanpa banyak cela</p>
                        <p>Wangimu Berlalu</p>

                        <p>Akhirnya aku lihat lagi</p>
                        <p>Jemarimu yang bergerak bebas</p>
                        <p>Seiring Tawamu Hu woo</p>

                        <p>Tak ada yang seindah matamu</p>
                        <p>Hanya rembulan</p>
                        <p>Tak ada yang selembut sikapmu</p>
                        <p>Hanya Lautan</p>
                        <p>Tak tergantikan</p>
                        <p>Walau kita taklagi saling menyapa</p>
                    </div>
                </div>

                <div className="rows" style={style3}>
                    <h1>Sulung - Kunto Aji</h1>
                    <p>Cukupkanlah</p>
                    <p>Ikatanmu</p>
                    <p>Relakanlah yang tak seharusnya untukmu</p>
                    <p>Yang sebaiknya kau jaga, adalah dirimu sendiri</p>
                    <p></p>
                    <p>Cukupkanlah</p>
                    <p>Ikatanmu</p>
                    <p>Relakanlah yang tak seharusnya untukmu</p>
                    <p>Yang sebaiknya kau jaga, adalah dirimu sendiri</p>
                    <p></p>
                    <p>Cukupkanlah</p>
                    <p>Ikatanmu</p>
                    <p>Relakanlah yang tak seharusnya untukmu</p>
                    <p>Yang sebaiknya kau jaga, adalah dirimu sendiri</p>
                </div>

                <div className="rows" style={style4}>
                    <h1>Rehat - Kunto Aji</h1>
                    <p>Serat-serat harapan</p>
                    <p>masih terjalin</p>
                    <p>suaramu terdengar</p>
                    <p>masihlah nyaring</p>
                    <p>dan bergema</p>
                    <p>diruang-ruang hatimu</p>

                    <p>REFF:</p>
                    <p>tenangkan hati</p>
                    <p>semua ini bukan salahmu</p>
                    <p>jangan berhenti</p>
                    <p>yang kau takutkan takkan terjadi</p>
                    <p>****</p>

                    <p>yang dicari hilang</p>
                    <p>yang dikejar lari</p>
                    <p>yang ditunggu</p>
                    <p>yang diharap</p>
                    <p>biarkanlah semesta bekerja</p>
                    <p>untukmu</p>
                    <p>BACK TO REFF</p>
                </div>

                <div className="rows" style={style5}>
                    <h1>Konon Katanya - Kunto Aji</h1>
                    <p>Kau tak pernah berubah</p>
                    <p>kau masih saja</p>
                    <p>dengan peran yang kau tak suka</p>
                    <p>apa kata ayah</p>
                    <p>jadi pembatas ruang berkarya</p>
                    <p>REFF:</p>
                    <p>Konon Katanya</p>
                    <p>Konon Katanya</p>
                    <p>Konon konon konon katanya</p>
                    <p>Konon Katanya</p>
                    <p>Konon Katanya</p>
                    <p>Konon Katanya</p>
                    <p>Konon konon konon katanya</p>
                    <p>Konon Katanya</p>
                    <p>***</p>
                    <p>jangan ragu-ragu</p>
                    <p>cantik kau tahu</p>
                    <p>hidup bukan tentang</p>
                    <p>angkaa.....</p>
                    <p>BACK TO REFF</p>
                </div>

                <div className="rows" style={style6}>
                    <h1>Jakarta Jakarta - Kunto Aji</h1>
                    <p>Dalam hati aku selalu ingin beranjak pergi</p>
                    <p>Kota yang sama yang mnembuatku tegak berdiri</p>
                    <p>Hingar bingar sudut jalan yang takkan pernah mati</p>
                    <p>Kota yang sama yang membuatku merasa sepi</p>
                    <p>Jangan salahkan barisan panjang dipusat kota</p>
                    <p>Kita bergegas mengejar mimpi yang sama</p>
                    <p>REFF:</p>
                    <p>Jakarta, Jakarta dan kenangannya</p>
                    <p>Berpacu memburu impianku</p>
                    <p>Jakarta, jakarta dan kenangannya</p>
                    <p>Berpacu memburu impianku</p>
                    <p>***</p>
                    <p>Sekeras-kerasnya</p>
                    <p>Benturkan (benturkan), bentuklah dirimu</p>
                    <p>BACK TO REFF</p>
                </div>

                <div className="rows" style={style7}>
                    <h1>Topik Semalam - Kunto Aji</h1>
                    <p>Semalam</p>
                    <p>Kau tanyakan lagi</p>
                    <p>Arah kita, sanggupah, aku, mengikatmu untuk selamanya</p>
                    <p>kau jangan takut</p>
                    <p>aku punya rencana</p>
                    <p>kau jangan takut</p>
                    <p>walau semua masih ada di kepala</p>
                    <p>REFF:</p>
                    <p>Jika kau mau bersabar dan mencoba mengerti</p>
                    <p>kupastikan engkau bahagia</p>
                    <p>jika kau bisa bertahan menungguku disini</p>
                    <p>kupastikan engkau bahagia</p>
                </div>

                <div className="rows" style={style8}>
                    <h1>Saudade - Kunto Aji</h1>
                    <p>Dikatakan oleh angin</p>
                    <p>yang menghasilkan gelombang</p>
                    <p>jadilah besar besatari</p>
                    <p>dan manfaat untuk sekitar</p>

                    <p>dikatakan awan hitam</p>
                    <p>sebelum datangnya hujan</p>
                    <p>berjalan aku dikutuk</p>
                    <p>dan engkau yang dirayakan</p>
                    <p>perjalanan</p>
                    <p>takdir dan kenangan</p>
                    <p>berselimut doa</p>
                    <p>hangatnya akan terjaga</p>
                </div>
            </div>
            </div> 
        );
    }

  }

