import React from 'react';
import gif from '../../assets/main46.jpg'
import styles from './index.less';

export default () => {
    return (
        <div className={styles.container}>
            <h1>hello webpack</h1>
            <div>
                <img src={gif} />
            </div>
            <div className={styles.banner}></div>
        </div>
    )
}