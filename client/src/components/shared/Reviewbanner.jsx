import React from 'react';
import revbannerImage from "../../images/rev-ban.jpg"
const Reviewbanner = ()=>{
    return (
        <>
            <div>
                <div className="container-fluid col-md-12 my-3">
                    <img src={revbannerImage} alt="" style={{ width: '100%' }} />
                </div>
            </div>      
        </>
    )
}
export default Reviewbanner


