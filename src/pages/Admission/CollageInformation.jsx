import React from 'react';
import Container from '../../components/Container/Container';

const CollageInformation = () => {
  const handleInformation = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const date = form.date.value;
    const photo = form.photo.value;
    const information = {
      name,
      subject,
      email,
      number,
      address,
      date,
      photo,
    };
    console.log(information);
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleInformation}>
          <div className="md:flex mb-4 gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Candidate Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Candidate Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Subject
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4 gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Candidate Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Candidate Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Candidate Phone number
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="number"
                  placeholder="Candidate Phone number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4 gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Address
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Date of birth
                </span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-4 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <button className="btn btn-success text-white capitalize text-lg">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
};

export default CollageInformation;