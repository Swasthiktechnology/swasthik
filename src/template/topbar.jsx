import React from 'react'

const Topbar = () => {

    const mail = ('swasthiktechnology@outlook.com');
    return (
        <div className='container-fluid topbar theme-primary theme-thirdly'>
            <div className='container'>
                
                    <div className='text-center w-100 pt-2 pb-2'>
                    <p className='mail-hover'>You can directly contact us at <a className="theme-secondary font-weight-bold hover" href={'mailto:'+mail} >{mail}</a></p>
                    </div>
                
            </div>
        </div>
    )
}

export default Topbar