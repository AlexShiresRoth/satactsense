import React from 'react'
import PropTypes from 'prop-types'
import homeStyle from './Layout.module.scss'

const Home: React.FunctionComponent<{ 
    children: any;
}> = (props) => {
    console.log(props)
    return (
        <main className={homeStyle.main__container}>
           {props.children}
        </main>
    )
}

Home.propTypes = {

}

export default Home
