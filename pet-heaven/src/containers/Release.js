import React from 'react'

const Release = () => {

  const submit = () => {
    alert("Form has been submitted and mail to the society for confirmation. will inform you when we are ready");
  }


  return (
    <div className='release-container'>
      <h2>Release Form</h2>
      <p>Please fill in the short form below to share some information with us so that we can assist you in the release process.</p>

      <div className='form'>
        <form class="form-inner row g-3">
          <div className='col-md-6'>
            <label for="usr">Name</label>
            <input type="text" class="form-control" id="usr" />
          </div>
          <div className='col-md-6'>
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Name of Pet you release</label>
            <input class="form-control" type="text" id="name"/>
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Pet Type</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Cat</option>
              <option>Dog</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Pet Age</label>
            <input type="text" class="form-control" id="inputAge" />
          </div>
          <div class="form-group">
            <label for="comment">Reason of release</label>
            <textarea class="form-control" rows="3" id="comment"></textarea>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Documents</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" onClick={submit} >Comfirm and Submit</button>
          </div>
        </form>
      </div>
  </div>
  )
}

export default Release