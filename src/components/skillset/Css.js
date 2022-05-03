import React from 'react'

const Css = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div style={{ width: '20%' }}>
                <h4>CSS3/Sass</h4>
            </div>
            <div style={{ width: '60%' }}>
                <div className="progress border border-secondary">
                    <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100">
                        90%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Css
