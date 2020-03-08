import React from 'react'
import PropTypes from 'prop-types'
import headerStyle from './Header.module.scss';

const Header = (props: any) => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.column_left}>
                <h1>SAT/ACT Sense.</h1>
                <p>Making sense of the SAT & ACT.</p>
            </div>
            <div className={headerStyle.column_right}></div>
        </header>
    )
}

Header.propTypes = {

}

export default Header
