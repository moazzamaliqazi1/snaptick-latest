import React from 'react';
import frames from "../../images/frames.png";
import book from "../../images/book.png";
import payments from "../../images/payments.png";
import orders from "../../images/orders.png";
import shipping from "../../images/shipping.png";
import issues from "../../images/issues.png";
const Help = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2 iconshelp p-3'>
                        <center>
                            <img
                                className="section-image section2-image img-fluid my-1"
                                alt=""
                                width='130px'
                                style={{}}
                                src={frames}
                            />
                            <a className='iconlinkshelp' href="#frames">Frames</a>
                        </center>
                    </div>

                    <div className='col-md-2 iconshelp p-3'>
                        <center>
                            <img
                                className="section-image section2-image img-fluid my-1"
                                alt=""
                                width='130px'
                                height='130px'
                                style={{}}
                                src={book}
                            />
                            <a className='iconlinkshelp' href="#books">Books</a>
                        </center>
                    </div>

                    <div className='col-md-2 iconshelp p-3'>
                        <center>
                            <img
                                className="section-image section2-image img-fluid my-1"
                                alt=""
                                width='120px'
                                style={{}}
                                src={payments}
                            />
                            <a className='iconlinkshelp' href="#payment">Payment</a>
                        </center>
                    </div>

                    <div className='col-md-2 iconshelp p-3'>
                        <center>
                            <img
                                className="section-image section2-image img-fluid my-1"
                                alt=""
                                width='120px'
                                style={{}}
                                src={orders}
                            />
                            <a className='iconlinkshelp' href="#orders">Orders</a>
                        </center>
                    </div>

                    <div className='col-md-2 iconshelp p-3'>
                        <center>
                            <img
                                className="section-image section2-image img-fluid my-1"
                                alt=""
                                width='120px'
                                style={{}}
                                src={shipping}
                            />
                            <a className='iconlinkshelp' href="#shipping">Shipping</a>
                        </center>
                    </div>

                    <div className='col-md-2 iconshelp p-3'>
                        <center>
                            <img
                                className="section-image section2-image img-fluid my-1"
                                alt=""
                                width='120px'
                                style={{}}
                                src={issues}
                            />
                            <a className='iconlinkshelp' href="#issues">Order Issues</a>
                        </center>
                    </div>

                </div>
            </div>

            <hr className="m-5" id='frames' />

            <div className='container' >
                <div className='col-md-12'>
                    <br/>
                    <h3 className='headinghelp'>
                        <img
                            className="section-image section2-image img-fluid my-1"
                            alt=""
                            width='120px'
                            style={{}}
                            src={frames}
                        />
                        &nbsp; Frames</h3>

                    <h3 className='questions pt-3'>Where are your frames made?</h3>
                    <p className='answers pt-1'>Our frames are handmade locally in the Lahore, Pakistan.</p>

                    <h3 className='questions pt-3'>What are your frames made out of?</h3>
                    <p className='answers pt-1'>All of our standard frames are made out of solid plastic.</p>

                    <h3 className='questions pt-3'>Will I be able to hang them?</h3>
                    <p className='answers pt-1'>Yes, all of our frames come with a hanging wire.</p>

                    <h3 className='questions pt-3'>Will I be able to stand them?</h3>
                    <p className='answers pt-1'>Yes, all of our frames come with a stand on backside.</p>

                    <h3 className='questions pt-3'>What frame sizes do you offer?</h3>
                    <p className='answers pt-1'>We offer a two varieties of handmade custom frame sizes.
                        The best way is to preview them with your photo. <br />Here are some options:
                        <br />Standard Frame: 8"x10"
                        <br />Executive Frame: 12"x 14"
                    </p>

                    <h3 className='questions pt-3'>Will I be able to change the pictures in my frame?</h3>
                    <p className='answers pt-1'>
                        Our frames are professionally sealed with paper backing, so we advise against changing the photo yourself.
                    </p>

                </div>
            </div>

            <hr className="m-5" id='books' />
            <br/>

            <div className='container'>
                <div className='col-md-12'>
                    <h3 className='headinghelp'>
                        <img
                            className="section-image section2-image img-fluid my-1"
                            alt=""
                            width='120px'
                            style={{}}
                            src={book}
                        />
                        &nbsp; Books</h3>

                    <h3 className='questions pt-3'>Where is your books printed?</h3>
                    <p className='answers pt-1'>Our books are printed locally in the Lahore, Pakistan.</p>

                    <h3 className='questions pt-3'>What is size of your Book?</h3>
                    <p className='answers pt-1'>Our book is of standard size 5R - 5" x 7".</p>

                </div>
            </div>


            
            <hr className="m-5" id='payment' />
            <br/>
            <div className='container'>
                <div className='col-md-12'>
                    <h3 className='headinghelp'>
                        <img
                            className="section-image section2-image img-fluid my-1"
                            alt=""
                            width='120px'
                            style={{}}
                            src={payments}
                        />
                        &nbsp; Payment</h3>

                    <h3 className='questions pt-3'>What payment options do you offer?</h3>
                    <p className='answers pt-1'>We accept all major credit cards and Cash on Delivery.</p>

                    <h3 className='questions pt-3'>Is shopping with you secure?</h3>
                    <p className='answers pt-1'>Yes it is. We use a trusted third party payment processor (https://stripe.com/) that is used by many major retailers.</p>

                </div>
            </div>

            <hr className="m-5" id='orders' />
            <br/>
            <div className='container'>
                <div className='col-md-12'>
                    <h3 className='headinghelp'>
                        <img
                            className="section-image section2-image img-fluid my-1"
                            alt=""
                            width='120px'
                            style={{}}
                            src={orders}
                        />
                        &nbsp; Orders</h3>

                    <h3 className='questions pt-3'>How do I change or cancel my order?</h3>
                    <p className='answers pt-1'>Please contact us immediately at support@snaptickpk.com if you need to change or cancel your order.</p>

                    <h3 className='questions pt-3'>How do I change shipping address?</h3>
                    <p className='answers pt-1'>Please contact us at support@snaptickpk.com if you need to change your shipping address. Once your order has shipped we will be unable to make any changes.</p>

                </div>
            </div>

            <hr className="m-5" id='shipping' />
            <br/>

            <div className='container'>
                <div className='col-md-12'>
                    <h3 className='headinghelp'>
                        <img
                            className="section-image section2-image img-fluid my-1"
                            alt=""
                            width='120px'
                            style={{}}
                            src={orders}
                        />
                        &nbsp; Shipping</h3>

                    <h3 className='questions pt-3'>How long do orders generally take?</h3>
                    <p className='answers pt-1'>Orders will take couple of business days to assemble. Orders generally leave our studio within 3-4 business days. As soon as your order leaves our hands we will send tracking information.</p>

                    <h3 className='questions pt-3'>Can I track my order?</h3>
                    <p className='answers pt-1'>Yes you can with tracking id that provided after placing order. You can also check status of your orders in User Profile. You will receive an email with tracking information as soon as your order leaves our hands.</p>
                    
                    <h3 className='questions pt-3'>Where do you ship?</h3>
                    <p className='answers pt-1'>SnapTick ships to all Pakistan.</p>

                    <h3 className='questions pt-3'>How do I change shipping address?</h3>
                    <p className='answers pt-1'>Please contact us at support@snaptickpk.com if you need to change your shipping address. Once your order has shipped we will be unable to make any changes.</p>


                </div>
            </div>
            
            <hr className="m-5" id='issues' />
            <br/>

            <div className='container'>
                <div className='col-md-12'>
                    <h3 className='headinghelp'>
                        <img
                            className="section-image section2-image img-fluid my-1"
                            alt=""
                            width='120px'
                            style={{}}
                            src={issues}
                        />
                        &nbsp; Order Issues</h3>

                    <h3 className='questions pt-3'>My item is damaged</h3>
                    <p className='answers pt-1'>Oh no! We are sorry that you’ve received a damaged item! We inspect each item before shipping, but damages can occur in transit. Please send a picture of the broken item to support@snaptickpk.com and we will arrange a replacement for you.</p>

                    <h3 className='questions pt-3'>What is your return policy?</h3>
                    <p className='answers pt-1'>We can't offer blanket returns for change of mind. We try to print every image as true to the original that we receive. If for any reason you are unhappy with your SnapTick please contact support@snaptickpk.com and we will try to remedy the situation.</p>

                </div>
            </div>

        </>
    )
}
export default Help


