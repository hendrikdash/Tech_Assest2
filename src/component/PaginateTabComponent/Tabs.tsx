import React, {FC } from 'react';

interface InitProps {
    tabs?: any[] ;
    activeTab?: number;
    handleTab: (value: number) => void | any;
}


const Tabs:FC<InitProps> = (props) => {
    const { activeTab, tabs } = props;
    
    return(
        <div className="container-fluid tab-manager ">
            <div className="row">
                {tabs? tabs.map(({ label , value },ind) => (
                    <div
                        key={ind}
                        // di
                        className={`col tab ${value === activeTab  ? 'selected-tab' : ''}`}
                        // onClick={() => handleTab(value)}
                    >
                        <a className="unSkews">
                            {label}
                        </a>
                        
                    </div>
                )): undefined}
            </div>
        </div>
    );
}

export default Tabs;