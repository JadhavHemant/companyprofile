import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <div className='md:p-4 lg:p-3'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-3  max-w-auto lg:p-[50px] '>
                        <div className='text-white md:grid-flow-row'>
                            <h1 className='font-bold'>Download our App</h1>
                         <h1 className='text-[15px] pb-2'>Download App for Android and ios mobile phone</h1>
                            <div>
                                {/* <img src='https://rsanimesh.github.io/images/logo-white.png' alt='ING' className='w-[180px]' /> */}
                                <h1 className='w-[180px] font-bold'>LOGO 2</h1>
                            </div>
                        </div>
                        <div className='text-center text-white md:grid-flow-row'>
                            <div>
                                {/* <img src='https://rsanimesh.github.io/images/logo-white.png' alt='ING' /> */}
                                <h1 className='w-[180px] font-bold'>Other LOGO 3</h1>
                            </div>      
                        </div>
                        <div className='text-center text-white md:grid-flow-row'>
                            <div>
                                <h1 className='font-bold'>Useful Links</h1>
                                <h1>Coupons</h1>
                                <h1>Blog Post</h1>
                                <h1>Return Policy</h1>
                                <h1>Join Affiliate</h1>
                            </div>
                        </div>
                       
                        <div className='text-center text-white md:grid-flow-row'>
                            <div>
                                <h1 className='font-bold'>Follow us</h1>
                                <h1>Facebook</h1>
                                <h1>Twitter</h1>
                                <h1>Instagram</h1>
                                <h1>Youtube</h1>
                            </div>
                        </div>
                      
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
