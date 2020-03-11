import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout/Layout'
import Header from './Header';
import TestPrep from './TestPrep';

const Home = () => {
    return (
        <Layout>
            <Header />
            <TestPrep />
        </Layout>
    )
}

Home.propTypes = {

}

export default Home
