import React from 'react'
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';
function widget() {
    return (

        <>
            <div className="widget">
                <div className="widget_top">
                    <div className="widget__header">
                        <h4>LinkedIn News</h4>
                        <InfoIcon />
                    </div>
                    <div className='widget__body'>
                        <ul className='widget__options'>
                            <li>
                                <h4>Slaying Job Search Fees</h4>
                                <p>9d ago * 4,55 readers</p>
                            </li>
                            <li>
                                <h4>How to handle a workplace breakup</h4>
                                <p>6d ago * 6,11 readers</p>
                            </li>
                            <li>
                                <h4>What if things don't work out</h4>
                                <p>3d ago * 3,75 readers</p>
                            </li>
                            <li>
                                <h4>A Two Pizza rule for eating</h4>
                                <p>2d ago * 3,12 readers</p>
                            </li>
                            <li>
                                <h4>Get noticed by recuriters</h4>
                                <p>7d ago * 4,126 readers</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="widget_bottom">
                    <div className="widget__header">
                        <h4>Today's top courses</h4>
                        <InfoIcon />
                    </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Leading with a Heavy Heat</h4>
                            <p>Kay Coly</p>
                        </li>
                        <li>
                            <h4>Building Resillience</h4>
                            <p>Tatianan Kolovau</p>
                        </li>

                        <li>
                            <h4>Flexi leave is the new flexi</h4>
                            <p>Kay Coly</p>
                        </li>
                        <li>
                            <h4>Shorter hour boost productivity</h4>
                            <p>Tatianan Kolovau</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        
        </>
    )
}

export default widget
