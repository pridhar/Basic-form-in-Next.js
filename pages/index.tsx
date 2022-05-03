import Head from 'next/head';
import $ from 'jquery';
import { useState } from 'react';
import bg from '../public/Solid-Color-Backgrounds.jpg';

interface FormData {
  firstname: string
  lastname: string
  email: string
  mobile: string
}

const Home = () => {
  const [form, setForm] = useState<FormData>({firstname: '', lastname: '', email: '',mobile: ''})

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
        }).then(response => response.json())
        .then(data => {
        $('#show').html(data.message)
        }).then(() => {setForm({firstname: '', lastname: '', email: '',mobile: ''})
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
     create(data) 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{backgroundImage: `url(${bg.src})`,width: '100%',height: '700px',}}>
    <Head>
      <title>User Data</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"></link>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    </Head>
      <br></br><br></br><br></br><br></br>
      <div className="container-fluid">
        <div className="row"><div className="col-md-4"></div>
          <div className="col-md-3">
            <form  onSubmit={e => {e.preventDefault()
              handleSubmit(form)}}>
              <div className="form-group">
                <input type="text" className="form-control"
                          placeholder="First Name"
                          value={form.firstname}
                          onChange={e => setForm({...form, firstname: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control"
                          placeholder="Last Name"
                          value={form.lastname}
                          onChange={e => setForm({...form, lastname: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control"
                          placeholder="Email"
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control"
                          placeholder="mobile"
                          value={form.mobile}
                          onChange={e => setForm({...form, mobile: e.target.value})} />
              </div>
              <button className="btn btn-primary pl-3 pr-3" type="submit"> Save </button>
              <br></br><br></br>
              <h3 id='show' style={{color: 'white'}}></h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home