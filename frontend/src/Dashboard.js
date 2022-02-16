
import React from 'react'
import { useHistory } from "react-router-dom";
import './css/dashboard.css';
function Dashboard() {
    const history = useHistory();
    return (
        <div className="dashboard">
            
            <div className="dashboard__header">
            <h1>Linked <span>in</span></h1>  
            <div className="dashboard__header__right">
                 <a className="signin-text-css" onClick={() => {
                    history.push('/Signup');
                }}>Join now</a>
            
                  <a className="signin-text-css" onClick={() => {
                    history.push('/Login');
                }}>            Sign in</a>
                
                     <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
             {/* <div className='dashboard_bgimg'>
            <img src="https://raw.githubusercontent.com/dhruvsahni89/linkedin-clone-React-practice/80c4d83801c4d25eefad64c236951ee244b7ed34/public/images/login-hero.svg"/>

             </div> */}
            </div>
            <div className='Body__part'>
            {/* <div className="dashboard__body__text">
                <h2>Welcome to your <br/> professional community
                    </h2>
                    </div> */}

                <div className='body__text'>
                <h2>Welcome to your <br/> professional community
                    </h2>
                <input type="submit" value="Search for a job" className='search'></input>
                <input type="submit" value="Find a person you know" className='find'/>
                <input type="submit" value="Learn a new skill" className='skill'/>
                </div>
    
               <img className='dbimage' src='https://i.pinimg.com/736x/e0/e3/95/e0e395c9e3677b4c92c2ec7449cdb241.jpg'/>
               
                </div>
          </div>
        </div>
      

    )
}

export default Dashboard

// const Login = (props) => {
//     return (
//             <Nav>
//                 <a href='/'>
//                     <img src="/images/login-logo.svg" />
//                 </a>
//                 <div>
//                     <Join>Join now</Join>
//                     <SignIn>Sign in</SignIn>
//                 </div>
//             </Nav>
//             <Section>
//                 <Hero>
//                     <h1>Welcome to our professional community</h1>
//                     <img src="/images/login-hero.svg" />
//                 </Hero>
//                 <Form>
//                     <Google onClick={() => props.signIn()}>
//                         <img src="/images/google.svg" />
//                         Sign in with Google
//                     </Google>
//                 </Form>
//             </Section>

       
//     )
// }

