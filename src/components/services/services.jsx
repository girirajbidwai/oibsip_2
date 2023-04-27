import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id = 'services'>
      {/* <h5>What I Offer</h5> */}
      <h2>What I Offer</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__name'>
            <h3>FRONTEND DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>RESPONSIVE DESIGN: Ensure website adapts to all device sizes and screen resolutions for optimal user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ACCESSIBILITY: Implement accessibility features such as alt tags, keyboard navigation and proper semantic HTML.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PERFORMANCE: Optimize website for fast loading speed and minimal resource usage, improving user satisfaction and search ranking.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>INTERACTIVITY: Incorporate engaging UI elements and intuitive user interactions using JavaScript and React components.
</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MODULARITY: Organize code into reusable format, maximizing code efficiency and scalability.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        <article className='service'>
          <div className='service__name'>
            <h3>BACKEND DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User authentication: Allow users to sign up, log in, and manage their profile securely.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database integration: Use MongoDB to store user data, portfolio items, and other relevant information.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API development: Develop RESTful APIs to allow communication between the front-end and back-end.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>File management: Implement file upload and storage for images, videos, and other media files.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Email notification: Send automated emails to users for password reset, account verification, and other important events.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
             
          </ul>
        </article>
        <article className='service'>
          <div className='service__name'>
            <h3>DATA ENGINEERING</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data ingestion: Use Kafka to ingest real-time data from various sources and store it in Spark.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data processing: Use Spark to process large amounts of data efficiently and quickly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data storage: Store processed data in a data warehouse or data lake using appropriate storage systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data pipeline management: Use Airflow to manage and schedule data pipelines for processing and storage.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cloud-based data storage: Use AWS services such as S3, EBS, or Glacier for storing and managing large amounts of data in a secure and cost-effective manner.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
             
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services