// import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
// import { Button, } from "react-bootstrap"
// // import Arrydynamic from '../main/Arrydynamic';
// import dynamic from "../style/dynamic.css";
// import Form from 'react-bootstrap/Form'
// const Dynamicdata = (props) => {
//     const [lgShow, setLgShow] = useState(false);
//     const [smshow, setsmShow] = useState(false);



//     const Cardinfo = [

//         {
//             id: "1",
//             name: "turkey",
//             pkr: " PKR 12,000",
//             img: "./images/Untitled-1-01.png",
//            countheading: " now our team is working for you on this page",
//             countname: " Turkey"
//         },



//         {
//             id: "2",
//             name: "united kingdom",
//             pkr: "PKR 48,000",
//             img: "./images/Untitled-1-02.png",
//             countheading: " now our team is working for you on this page",
//             countname: " United Kingdom"
//         },




//         {
//             id: "3",
//             name: "south africa",
//             pkr: "PKR 25,000",
//             img: "./images/Untitled-1-03.png",
//             countheading: " now our team is working for you on this page",
//             countname: " South Africa"
//         },




//         {
//             id: "4",
//             name: "egypt",
//             pkr: "PKR 12,000",
//             img: "./images/Untitled-1-04.png",
//             countheading: " now our team is working for you on this page",
//             countname: " egypt"

//         },







//         {
//             id: "5",
//             name: "spain",
//             pkr: "PKR 25,000",
//             img: "./images/untitled-1-05.png",
//             countheading: " now our team is working for you on this page",
//             countname: " spain"

//         },


//         {
//             id: "6",
//             name: "switzerland",
//             pkr: "PKR 30,000",
//             img: "./images/Untitled-1-06.png",
//             countheading: " now our team is working for you on this page",
//             countname: " switzerland"

//         },
//         {
//             id: "7",
//             name: "france",
//             pkr: "PKR 30,000",
//             img: "./images/Untitled-1-07.png",
//             countheading: " now our team is working for you on this page",
//             countname: " france"

//         },
//         {
//             id: "8",
//             name: "belgium",
//             pkr: "PKR 35,000",
//             img: "./images/Untitled-1-08.png",
//             countheading: " now our team is working for you on this page",
//             countname: " belguim"

//         },
//         {
//             id: "9",
//             name: "sweden",
//             pkr: "pkr 30,000",
//             img: "./images/Untitled-1-09.png",
//             countheading: " now our team is working for you on this page",
//             countname: " sweden"

//         },
//         {
//             id: "10",
//             name: "denmark",
//             pkr: "PKR 25,000",
//             img: "./images/Untitled-1-10.png",
//             countheading: " now our team is working for you on this page",
//             countname: " denmark"

//         },

//         {
//             id: "11",
//             name: "germany",
//             pkr: "PKR 30,000",
//             img: "./images/Untitled-1-11.png",
//             countheading: " now our team is working for you on this page",
//             countname: " germany"
//         },

//         {
//             id: "12",
//             name: "malaysia",
//             pkr: "PKR 16,000",
//             img: "./images/Untitled-1-12.png",
//             countheading: " now our team is working for you on this page",
//             countname: " malaysia"

//         },

//         {
//             id: "13",
//             name: "singapore",
//             pkr: "PKR 15,500",
//             img: "./images/Untitled-1-13.png",
//             countheading: " now our team is working for you on this page",
//             countname: " singapore"

//         },

//         {
//             id: "14",
//             name: "thailand",
//             pkr: "PKR 12,000",
//             img: "./images/Untitled-1-14.png",
//             countheading: " now our team is working for you on this page",
//             countname: " thailand"

//         },

//         {
//             id: "15",
//             name: "azerbaijan",
//             pkr: "PKR 8,000",
//             img: "./images/Untitled-1-15.png",
//             countheading: " now our team is working for you on this page",
//             countname: " azerbaijan"

//         },

//         {
//             id: "16",
//             name: "sri lanka",
//             pkr: "PKR 10,000",
//             img: "./images/Untitled-1-16.png",
//             countheading: " now our team is working for you on this page",
//             countname: " sri lanka "

//         },

//         {
//             id: "17",
//             name: "cambodia",
//             pkr: "PKR 12,000",
//             img: "./images/Untitled-1-17.png",
//             countheading: " now our team is working for you on this page",
//             countname: " cambodia"

//         },

//         {
//             id: "18",
//             name: "bahrain",
//             pkr: "PKR 30,000",
//             img: "./images/Untitled-1-18.png",
//             countheading: " now our team is working for you on this page",
//             countname: " bahrain"
//         },
//         {
//             id: "19",
//             name: "dubai",
//             pkr: "PKR 19,000",
//             img: "./images/Untitled-1-19.png",
//             countheading: " now our team is working for you on this page",
//             countname: " dubai"

//         },
//         {
//             id: "20",
//             name: "qatar",
//             pkr: "PKR 10,000",
//             img: "./images/Untitled-1-20.png",
//             countheading: " now our team is working for you on this page",
//             countname: " qatar"

//         },



//     ];


//     return (





//         <div className='container cont2'>
//             <div className='row '>
//                 <h1 className='text-center my-5'>Visit Visa Services</h1>

//                 {
//                     Cardinfo.map((data) => {


//                         return (


//                             <>

//                                 <div className='col-sm-12 col-xl-3 col-lg-4 col-md-6 '>

//                                     <div className='box my-5 col-lg-12' key={data.id}>
//                                         <div className='text-center'>
//                                             <img className="country-flag  " src={data.img} /> </div>

//                                         <h4 className='text-center heading'></h4>
//                                         <h4 className='text-center heading'>{data.name}</h4>
//                                         <p className="text-center">{data.pkr}</p>

//                                         <button className='text-center btn btn-primary  batn' onClick={() => setLgShow(true)}>    <span></span>Details</button>
//                                         <button className='text-center btn btn-primary  batn' onClick={() => setsmShow(true)}>Apply Now</button>
//                                     </div>
//                                 </div>








//                                 <Modal
//                                     size="lg"
//                                     show={lgShow}
//                                     onHide={() => setLgShow(false)}
//                                     aria-labelledby="example-modal-sizes-title-lg"
//                                     className="modal-detail"
//                                 >
//                                     <Modal.Header closeButton>
//                                         <Modal.Title id="example-modal-sizes-title-lg" >
//                                             {data.countname}
//                                         </Modal.Title>
//                                     </Modal.Header>
//                                     <Modal.Body>{data.countheading}</Modal.Body>
//                                 </Modal>


//                                 <Modal
//                                     size="lg"
//                                     show={smshow}
//                                     onHide={() => setsmShow(false)}
//                                     aria-labelledby="example-modal-sizes-title-lg"
//                                     className="modal-detail"
//                                 >
//                                     <Modal.Header closeButton>
//                                         <Modal.Title id="example-modal-sizes-title-lg" >
//                                             {data.countname}
//                                         </Modal.Title>
//                                     </Modal.Header>
//                                     <Modal.Body>{data.countheading}
                                    
                                    
//                                     <Form>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
                                    
                                    
                                    
//                                     </Modal.Body>
//                                 </Modal>









//                             </>

//                         )



//                     })
//                 };





//             </div>

//         </div>









//     );





// }

// export default Dynamicdata;