import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../style/tabs.css";
const Pills = () => {
  return (
    <div>


<div className="container">
  <div className="row">
 <div className="back-box">
 <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className=" nav-pills"
    >
      <Tab eventKey="home" title="visa"  className=" nav-links">
  <div className="content">
   <div className="search-bar">
    <input type="text" placeholder='search' className='form-control' />
    <button className='btn search-btn'> search</button>
   </div>
  </div>
      </Tab>
      <Tab eventKey="profile" title="flights" className=" nav-links">
      <div className="content">
 <div className="container">
  <div className="row">
    <div className="col-sm-4">
      <input type="text" placeholder='travel to' className='form-control' />
    </div>
    <div className="col-sm-4">
    <input type="text" placeholder='travel from' className='form-control' />
    </div>
    <div className="col-sm-4">
    <input type="date" placeholder='' className='form-control' />
    </div>
    <div className="col-sm-4 ">
    <input type="date" placeholder='' className='form-control'/>
    </div>
    <div className="col-sm-4 ">
    <input type="text" placeholder='' className='form-control' />
    </div>
    <div className="col-sm-4 ">
   <button className='btn search-btn'>submit</button>
    </div>
  </div>
 </div>
  </div>
      </Tab>
      <Tab eventKey="contact" title="hotel"  className=" nav-links">
      <div className="content">
      <div className="container">
  <div className="row">
    <div className="col-sm-4">
      <input type="text" placeholder='search-country' className='form-control' />
    </div>

    <div className="col-sm-4">
    <input type="date" placeholder='' className='form-control' />
    </div>
    <div className="col-sm-4 ">
    <input type="date" placeholder='' className='form-control'/>
    </div>
    <div className="col-sm-4 ">
    <input type="text" placeholder='' className='form-control' />
    </div>
    <div className="col-sm-4 ">
   <button className='btn search-btn'>submit</button>
    </div>
  </div>
 </div>
  </div>

      </Tab>

      <Tab eventKey="step4" title="pakages"  className=" nav-links">
      <div className="content">
      <div className="search-bar">
    <input type="text" placeholder='search' className='form-control w-100' />
    <button className='btn search-btn'> search</button>
   </div>
  </div>
        </Tab>
    </Tabs>
 </div>
  </div>
</div>

    </div>
  )
}

export default Pills