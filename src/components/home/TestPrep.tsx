import React from 'react'
import PropTypes from 'prop-types'
import testStyle from './TestPrep.module.scss';
import { AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai'
const TestPrep = props => {
    return (
        <section className={testStyle.section}>
            <div className={testStyle.column}>
                <h2>Test Preparation</h2>
                <p>
                    SAT/ACT Sense offers one-on-one or small group tutoring for the PSAT/SAT,
                    ACT, Subject Tests, and academic subjects, in your home, and on your schedule.
                    Tutoring lessons can also be scheduled at local libraries, after school facilities,
                    and community centers. Before tutoring lessons begin, your student will take an initial
                    Diagnostic Test to help identify his/her strengths and weaknesses.
                    An individual assessment plan is created and lessons are tailored to
                    your student’s learning style. At SAT/ACT Sense we take our work very seriously
                    and are committed to seeing your student reach his/her goals.
                </p>
            </div>
            <div className={testStyle.column}>
                <div className={testStyle.inner}>
                    <AiOutlineUser />
                    <p>One on One Private Tutoring.</p>
                </div>
                <div className={testStyle.inner}>
                    <AiOutlineUsergroupAdd />
                    <p>Small Group Tutoring.</p>
                </div>
            </div>
        </section>
    )
}

TestPrep.propTypes = {

}

export default TestPrep
