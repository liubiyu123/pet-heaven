import React from 'react'

const AdoptionForm = () => {

  const submit = () => {
    alert("Form has been submitted and mail to the society for confirmation. thank you for adoption!");
  }

  return (
    <div className='adoption-container'>
      <h2>Adoption Form</h2>
      <p>Please fill in the short form below to share some information with us so that we can assist you in the adoption process.</p>
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
            <label for="inputPassword4" class="form-label">Name of Pet you Adopt</label>
            <input class="form-control" type="text" placeholder="Marco" aria-label="Disabled input example" disabled />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Country</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">City</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Singapore</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Post Code</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="form-group">
            <label for="comment">Why you want to adopt</label>
            <textarea class="form-control" rows="3" id="comment"></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" onClick={submit} >Comfirm and Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdoptionForm