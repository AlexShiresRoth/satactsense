//All content for header section
import React from "react";

const currentYear = new Date();
const year = currentYear.getFullYear();
console.log(year);
export const headerText = [
  {
    title: "Landing",
    id: "LANDING",
    banner: "Not sure what to do about upcoming exams?",
    text: [{ par: <p>We Can Help.</p> }],
  },
  {
    title: "AP Testing",
    id: "AP",
    banner: `Are you ready for the new VIRTUAL AP exam in May ${year}?`,
    text: [
      { par: <p>Are the new structures and formats confusing?</p> },
      {
        par: (
          <p>
            Our experienced AP tutors/instructors can help navigate you through
            the material and the online formats of AP exams.
          </p>
        ),
      },
      {
        par: (
          <p>
            We can offer remote tutoring for a variety of AP exams based on the
            student's availability, scheduling, and skillset.
          </p>
        ),
      },
      { par: <p>Click the tests that apply.</p> },
    ],
  },
  {
    title: "SAT II Subject Testing",
    id: "SUBJECT",
    banner:
      "Some colleges require SAT II Subject Testing in addition to regular SAT tests.",
    text: [
      {
        par: (
          <p>
            As a student/parent, how do I know if my son/daughter should take an
            SAT II Subject Test?
          </p>
        ),
      },
      {
        par: (
          <p>
            Students will take a qualifying test to see if preparing for the
            individual subject test is in their best interests.
          </p>
        ),
      },
      {
        par: (
          <p>
            Students generally take the SAT II Subject Tests in June following
            their AP exams in May.
          </p>
        ),
      },
    ],
  },
  {
    title:
      "Johns Hopkins Program For Advanced Testing: The Center for Talented Youth",
    id: "CTY",
    banner: `For the Johns Hopkins program, which test students can take depends on his/her grade level, as listed below.`,
    text: [
      {
        par: (
          <p>
            The School and Ability Test (SCAT) is offered only to students in
            grades 2-8.
          </p>
        ),
      },
      {
        par: (
          <p>The SCAT test contains a quantitative and verbal assessment.</p>
        ),
      },
      {
        par: (
          <p>
            The SCAT test is computer-based, timed, multiple-choice, and
            flexibly scheduled.
          </p>
        ),
      },
      {
        par: (
          <p>The PSAT is offered only to sudents in between grades 5 and 6.</p>
        ),
      },

      {
        par: (
          <p>The SAT is offered only to sudents in between grades 7 and 8.</p>
        ),
      },
    ],
  },
  {
    title: "The PSAT & PLAN (Shortened version of the ACT)",
    id: "PSAT/PLAN",
    banner: `Please contact us for more information!`,
    text: [
      {
        par: (
          <p>
            Both tests are typically taken in 10th and 11th grades as precursors
            to the SAT/ACT.
          </p>
        ),
      },
      {
        par: (
          <p>
            Typically offered once a year, these tests are conducted in schools
            on assigned dates.
          </p>
        ),
      },
      {
        par: (
          <p>
            Taken in 11th grade, the PSAT qualifies students for National Merit
            Scholarships.
          </p>
        ),
      },
      {
        par: <p> All questions are multiple choice (no essay).</p>,
      },
      {
        par: (
          <p>
            Generally, students prepare for these tests the summer before
            10th/11th grade.
          </p>
        ),
      },
    ],
  },
  {
    title: "General Tutoring Sessions",
    id: "GENERAL",
    banner: `We can tutor for any high school and college course subject from Anthropology to Zoology.`,
    text: [
      { par: <p>Experienced and certified teachers from K-12.</p> },
      {
        par: (
          <p>
            Elementary and Middle School tutoring also available
            (Reading/Writing/Math skills).
          </p>
        ),
      },
      { par: <p>1 Hour lessons (Standard).</p> },
      {
        par: (
          <p>
            Flexible Scheduling (On your son/daughter's schedule, not the
            tutor’s).
          </p>
        ),
      },
      {
        par: (
          <p>
            Tutors typically communicate with students PRIOR to the lesson, so
            the tutors know what material to cover.
          </p>
        ),
      },
      { par: <p>No Commitment (other than one lesson at a time).</p> },
    ],
  },
  {
    title: "SAT/ACT",
    id: "SAT/ACT",
    banner: "We can service students with test accommodations.",
    text: [
      {
        par: (
          <p>
            Step #1: We will conduct an assessment of both the SAT/ACT tests to
            determine which test is better suited for the student: SAT or ACT.
          </p>
        ),
      },
      {
        par: (
          <p>
            Step #2: Design a game plan to prepare for the official SAT/ACT and
            begin coordinating the lessons with the tutors.
          </p>
        ),
      },
      { par: <p>-Typically lessons are 90 minutes to two hours.</p> },
      {
        par: (
          <p>
            -Specialist for each section (Verbal and Math Instructor and/or a
            Verbal and Math/Science instructor).
          </p>
        ),
      },
      {
        par: (
          <p>
            -No Commitment to any set number of lessons: one lesson at a time
            with each tutor and feedback.
          </p>
        ),
      },
      {
        par: (
          <p>
            -Customized based on the student's availability, skill set, and
            starting scores.{" "}
          </p>
        ),
      },
      {
        par: (
          <p>
            Step #3: After the student has completed 3-4 lessons with each
            tutor, the student will then take his/her next simulated practice
            SAT/ACT test.
          </p>
        ),
      },
    ],
  },

  {
    title: "SAT (College Board)",
    id: "SAT",
    banner: "Tutoring for the SAT/ACT is our specialty.",
    text: [
      {
        par: (
          <p>
            What are the best practice materials/resources for students to
            prepare?
          </p>
        ),
      },
      {
        par: (
          <p>
            What is the best strategy to increase my SAT Verbal score from
            low-mid 600's to 700+, especially after working with a tutor?
          </p>
        ),
      },
      {
        par: (
          <p>
            Why are the "word most nearly means" questions on the SAT Reading
            most important for the 500-level student?
          </p>
        ),
      },
      {
        par: (
          <p>
            What are the best ways to alleviate "Math anxiety” on the "No
            Calculator" section?
          </p>
        ),
      },
    ],
  },
  {
    title: "ACT Preparation",
    id: "ACT",
    banner: "Tutoring for the SAT/ACT is our specialty.",
    text: [
      {
        par: (
          <p>
            What are the best speed Reading methods to use on the ACT Reading
            section?
          </p>
        ),
      },
      {
        par: (
          <p>
            Will the new ACT Sectional testing(“a la carte”) take place in
            September?
          </p>
        ),
      },
      {
        par: <p>Why is the ACT Verbal more “coachable” than the SAT Verbal?</p>,
      },
      {
        par: <p>How do I prepare for the ACT Science section?</p>,
      },
    ],
  },
  {
    title: "ACT Materials",
    id: "ACTMAT",
    banner: "As an Amazon Associate we earn from qualifying purchases.",
    text: [],
  },
  {
    title: "College Consulting and Life Coaching",
    id: "CCLC",
    banner: `Not sure where to start your college application process? We can help.
Our exclusive college consulting and life coaching program is a "White Glove Service." `,
    text: [
      {
        par: (
          <p>
            Designed for parents requiring guidance during their first time
            through the college admissions process, our program includes "mock"
            interviews, school recommendations, and daily assistance with the
            admissions and recruitment processes.
          </p>
        ),
      },
      {
        par: (
          <p>
            During our initial evaluation session, our professional consultants
            interview candidates without a script to gain a better understanding
            of “who they really are" and assess which schools might be good
            fits.
          </p>
        ),
      },
      {
        par: <p>Factors we take in account:</p>,
      },
      {
        par: <p>- personality</p>,
      },

      {
        par: <p>- likes and dislikes</p>,
      },
      {
        par: <p>- academic interests</p>,
      },
      {
        par: <p>- grades and test scores</p>,
      },
      {
        par: <p>- extracurricular activities</p>,
      },

      { par: <p>We also offer:</p> },
      {
        par: (
          <p>
            - Editing services for the common application essay and supplemental
            essay.
          </p>
        ),
      },

      {
        par: (
          <p>
            To see if this program is a good fit for you and your child, call
            today
            <a href="tel:516-509-3186">516-509-3186</a>.
          </p>
        ),
      },
    ],
  },
  {
    title: "Testimonials",
    id: "TES",
    banner: "Read what successful students have said about us!",
    text: [],
  },
];
