import React, { useState } from "react";
import { SiIfood } from 'react-icons/si';
import './header.styles.scss';
import JSONDATA from '../../../src/MOCK_DATA .json'

const Header = (val) => {
    const [index, setIndex] = useState(1);
    const [searchItem, setSearchItem] = useState("");
    return (
        <div className="main-header">
            <div className="header">
                <div className="header-icon" to="/">
                    <SiIfood size='4em' />
                </div>
                <div className="logo-text" to="/">
                    CERV
                </div>
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="search here..." onChange={(e) => {
                            setSearchItem(e.target.value);
                        }}/>
                </div>
                </div>
                <div className="one-index">
                <div className="index-1" onClick={() => { setIndex(1) }} >
                <h4 className="lang"> Customer </h4>
                </div>
                <div className="customer-data">
                { index == 1 &&  <div className="data">
                {
                    JSONDATA.filter((val) => {
                        if(searchItem  == ""){
                            return val
                        } else if (val.first_name.toLowerCase().includes(searchItem.toLowerCase())){
                            return val
                        }
                    }).map((val, key) => {
                        return <div className="val-first-name" key={key}>
                            <p>{val.first_name}</p>
                        </div>
                    })
                }
            </div>}
            </div>
            </div>
            <div className="two-index">
            <div className="index-2" onClick={() => { setIndex(2) }} >
                <h4 className="cur"> Caterer </h4>
            </div>
            <div className="customer2-data">jhsijg
                {/* { index == 2 &&  <div className="data">
                {
                    JSONDATA.filter((val) => {
                        if(searchItem  == ""){
                            return val
                        } else if (val.first_name.toLowerCase().includes(searchItem.toLowerCase())){
                            return val
                        }
                    }).map((val, key) => {
                        return <div className="val-first-name" key={key}>
                            <p>{val.first_name}</p>
                        </div>
                    })
                }
            </div>} */}
            </div>
        </div>
        </div>

    )
}

export default Header;