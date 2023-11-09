import React from 'react'
import Language from '../component/Language'

const Contact = () => {
  return (
    <div>
  <div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-4 col-md-6">
      <div class="card shadow">
        <div class="card-body">
          <h2 class="card-title">Feedback</h2>
          <p class="card-text">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email"/>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" rows="3"></textarea>
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Button</button>
            <p class="card-text"><small class="text-muted">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</small></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


<Language/>
    </div>
  )
}

export default Contact
