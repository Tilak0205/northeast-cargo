import React from 'react';
import {Row,Col  } from 'antd';
import {useNavigate, useParams } from 'react-router-dom';

import IMG_SEA from '../assets/images/container-ship.png';
import IMG_ROAD from '../assets/images/delivery-truck.png';
import IMG_FLIGHT from '../assets/images/airline.png';
import IMG_BREXIT from '../assets/images/brexit.png';



const NewBooking = ()=>{
    const TYPE = document.URL.indexOf("booking")==1?'booking':'quote';

    const navigate = useNavigate();
    
    return(
        <>
            <div  className="section">
                <h1 className='page-heading'>{TYPE=='booking'?'New Booking':'New Quote'} </h1>     
                
                <p>Please provide details for your request</p>

                <h2>Type of Service</h2>
                <Row gutter={30} className='services'>
                    <Col span={5}>
                        <div className='service by-road' onClick={()=>{navigate('/new-booking/form/road')}}>
                            <h3>ROAD</h3>
                            <p>Primary Transport: Road</p>
                            <img src={IMG_ROAD}/>
                        </div>
                        
                    </Col>
                    <Col span={5}>
                        <div className='service by-air' onClick={()=>{navigate('/new-booking/form/air')}}>
                            <h3>AIR</h3>
                            <p>Primary Transport: Air</p>
                            <img src={IMG_FLIGHT}/>
                            
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className='service by-sea' onClick={()=>{navigate('/new-booking/form/sea')}}>
                            <h3>SEA</h3>
                            <p>Primary Transport: Sea</p>
                            <img src={IMG_SEA}/>
                            
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className='service by-cc' onClick={()=>{navigate('/custom-clearance/form')}}>
                            <h3>Customs Clearance</h3>
                            <p>Customs Clearance (UK / EU)</p>
                            <img src={IMG_BREXIT}/>
                            
                        </div>
                    </Col>
 
                        
                </Row>
                
                 

            </div>  
        </>
    )
}

export default NewBooking;