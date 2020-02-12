import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone'

import { fetchCategories } from '../../actions/dataActions'
import { postActivity } from '../../actions/dataActions'

import axios from 'axios'
const Content = styled.div`
  width: 70%;
  margin: auto;
`
const validation = Yup.object({
  name: Yup.string().min(4, 'Must be 4 characters or more').required('Required'),
  description: Yup.string().min(2, 'must be 20 characters or more').required('Required'),
  country: Yup.string().min(5, 'Country must be at least 5 characters').required('Required'),
  city: Yup.string().min(4, 'City name must be at least 4 characters').required('Required'),
  thumbnail: Yup.string().required('Required'),
  images: Yup.string().required('Required')
})

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name} className="">
        {label}
      </label>
      <input className="text-input form-control" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error text-danger pl-2">{meta.error}</div> : null}
    </div>
  )
}

const UploadComponent = props => {
  const { setFieldValue } = props
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFieldValue('images', acceptedFiles)
    }
  })
  return (
    <div>
      {}
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  )
}

class AddActivity extends Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    const categories = this.props.categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ))

    return (
      <Content className="container">
        <h1 className="text-center h3 pt-4 mb-5 text-warning"> Add Activity</h1>
        <Formik
          initialValues={{
            name: '',
            description: '',
            country: '',
            city: '',
            category_id: '',
            amount: 0,
            thumbnail: '',
            images: []
          }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true)

            const formdata = new FormData()
            formdata.append('[activity]name', values.name)
            formdata.append('[activity]description', values.description)
            formdata.append('[activity]country', values.country)
            formdata.append('[activity]city', values.city)
            formdata.append('[activity]category_id', values.category_id)
            formdata.append('[activity]amount', values.amount)
            formdata.append('[activity]thumbnail', values.thumbnail)
            values.images.forEach((files, i) => {
              formdata.append(`[activity]images`, files)
            })
            this.props.AddActivity(formdata)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form encType="multipart/form-data">
              <div className="form-group">
                <MyTextInput label="Activity name" name="name" placeholder="Enter a Name" type="text" />
              </div>

              <div className="form-group">
                <Field
                  name="description"
                  type="text"
                  as="textarea"
                  placeholder="Description"
                  rows="8"
                  className="form-control"
                />
                <ErrorMessage name="description" component="div" className="text-danger pl-2" />
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <div className="form-group">
                    <MyTextInput label="Country" name="country" placeholder="Country" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <MyTextInput label="City" name="city" placeholder="City" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <Field
                      name="amount"
                      type="number"
                      placeholder="In USD - Leave blank for free activities"
                      className="form-control"
                    />
                    <ErrorMessage name="amount" component="div" className="text-danger pl-2" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <Field name="category_id" type="text" as="select" placeholder="category" className="form-control">
                      {categories}
                    </Field>
                    <ErrorMessage name="category_id" component="div" className="text-danger pl-2" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <Dropzone
                      multiple={false}
                      onDrop={(acceptedFiles) => {
                        console.log(acceptedFiles)
                        setFieldValue('thumbnail', acceptedFiles[0])
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop a thumbnail, or click to select files</p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                    <ErrorMessage name="thumbnail" component="div" className="text-danger pl-2" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        console.log(acceptedFiles)
                        setFieldValue('images', acceptedFiles)
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some Images here, or click to select files</p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                    <ErrorMessage name="thumbnail" component="div" className="text-danger pl-2" />

                    {values.images &&
                      values.images.map((file, i) => (
                        <li key={i}>{`File:${file.name} Type:${file.type} Size:${file.size} bytes`} </li>
                      ))}
                  </div>
                </div>
              </div>

              <div className="form-group pull-right">
                <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-warning">
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    AddActivity: (data) => dispatch(postActivity(data))
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.data.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActivity)
