import React, { Component} from 'react'
import styled from '@emotion/styled'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import *  as Yup from 'yup'

const Content = styled.div`
  width:70%;
  margin:auto;
`
const validation = Yup.object({
  title: Yup.string()
    .min(4, 'Must be 4 characters or more')
    .required('Required'),
  description: Yup.string()
    .min(20, 'must be 20 characters or more')
    .required('Required'),
  country: Yup.string()
    .min(5, 'Country must be at least 5 characters')
    .required('Required'),
  city: Yup.string()
    .min(4, 'City name must be at least 4 characters')
    .required('Required'),
  thumbnail: Yup.string()
    .required('Required')
})

class AddActivity extends Component {
  render () {
    return (
      <Content className='container'>
        <h1 className='text-center h3 pt-4 mb-5 text-warning'> Add Activity</h1>
        <Formik
          initialValues = {{ title: '', description: '', country: '', city: '', amount: null, thumbnail: '' }}
          validationSchema = {validation}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (

            <Form>
              <div className='form-group'>
                <Field name='title' type='text' placeholder= 'Title' className='form-control'/>
                <ErrorMessage name="title" component="div" className='text-danger pl-2' />
              </div>
              <div className='form-group'>
                <Field name='description' type='text' as='textarea' placeholder='Description' rows='8' className='form-control'/>
                <ErrorMessage name='description' component="div" className='text-danger pl-2'/>
              </div>
              <div className='form-group row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <Field name='country' type='text' placeholder='Country' className='form-control'/>
                    <ErrorMessage name='country' component="div" className='text-danger pl-2'/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <Field name='city' type='text' placeholder='City' className='form-control'/>
                    <ErrorMessage name='city' component="div" className='text-danger pl-2'/>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <Field name='amount' type='number' placeholder='In USD - Leave blank for free activities' className='form-control'/>
                    <ErrorMessage name='amount' component="div" className='text-danger pl-2'/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <Field name='thumbnail' type='file' placeholder='Thumbnail Image' className='form-control'/>
                    <ErrorMessage name='thumbnail' component="div" className='text-danger pl-2'/>
                  </div>
                </div>
              </div>

              <div className='form-group pull-right'>
                <button type='submit' disabled={isSubmitting} className='btn btn-lg btn-warning'>
                  Add Activity
                </button>
              </div>
            </Form>
          )}

        </Formik>
      </Content>
    )
  }
}

export default AddActivity
