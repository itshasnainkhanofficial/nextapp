import React from 'react';
import styles from '../../styles/styling/About.module.css';
import scssstyle from '../../styles/styling/About.module.scss';
function about() {
    return (
        <div className={scssstyle.bg}>
            <h2 className={styles.highlight}>About us page</h2>
            <button className="btn btn-danger">Go</button>
        </div>
    )
}

export default about
