import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee= useLoaderData();
    const { _id, name, quantity, taste, supplier, category, details, photo } =
    coffee;

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, taste, supplier, category, details, photo};
        console.log(updatedCoffee);

       fetch(`http://localhost:5000/coffee/${_id}`, {
        method : "PUT",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(updatedCoffee)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.modifiedCount){
          Swal.fire({
            title: 'success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
       })
    }

    return (
        <div className="text-5xl text-center font-semibold">
      Update coffee
      <form onSubmit={handleUpdate}>
        <div className="flex justify-between gap-4 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
              name="name"
                type="text"
                placeholder="Coffee Name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
              name="quantity"
                type="text"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-4 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
              name="supplier"
                type="text"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
              name="taste"
                type="text"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-4 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
              name="category"
                type="text"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
              name="details"
                type="text"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-4 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
              name="photo"
                type="text"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn w-full">
            <input type="submit" value="Add Coffee" />
        </button>
      </form>
    </div>
    );
};

export default UpdateCoffee;