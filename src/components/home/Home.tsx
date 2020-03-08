import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layout/Layout.tsx'
import Header from './Header.tsx';
import TestPrep from './TestPrep.tsx';

const Home = props => {
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
