import Head from 'next/head';
import $ from 'jquery';
import { useForm } from 'react-hook-form';
import bg from '../public/Solid-Color-Backgrounds.jpg';

interface FormData {
  firstname: string
  lastname: string
  email: string
  mobile: string
}

const Home = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

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
        reset();
      })
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
            <form  onSubmit={handleSubmit(create)}>
              <div className="form-group">
                <input type="text"  className={`form-control ${
                            errors.firstname ? 'form-control is-invalid' : null
                          }`} placeholder="First Name"
                          {...register('firstname', { required: 'You must enter your First Name'
                           })}
                        />
                       <div className="invalid-feedback">{errors?.firstname?.message}</div>
              </div>
              <div className="form-group">
                <input type="text" className={`form-control ${
                            errors.lastname ? 'form-control is-invalid' : null
                          }`} placeholder="Last Name"
                          {...register('lastname', { required: 'You must enter your Last Name'
                           })}
                        />
                       <div className="invalid-feedback">{errors?.lastname?.message}</div>
              </div>
              <div className="form-group">
                <input type="text" className={`form-control ${
                            errors.email ? 'form-control is-invalid' : null
                          }`} placeholder="Email"
                          {...register('email', { required: 'You must enter your Email',
                           
                          })}
                        />
                       <div className="invalid-feedback">{errors?.email?.message}</div>
              </div>
              <div className="form-group">
                <input type="text" className={`form-control ${
                            errors.mobile ? 'form-control is-invalid' : null
                          }`} placeholder="Mobile No"
                          {...register('mobile', { required:  false,
                           
                          })} />
                          
              </div><br></br>
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
