import React from 'react'

const Bootstrap = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div style={{ width: '20%' }}>
                <h4>Bootstrap</h4>
            </div>
            <div style={{ width: '60%' }}>
                <div className="progress border border-secondary">
                    <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100">
                        95%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bootstrap
