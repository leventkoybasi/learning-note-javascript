import React, { useState } from "react";

function TaskForm() {
  const [formData, setFormData] = useState({});

  function handleInputChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      };
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form className="p-3" onSubmit={handleFormSubmit}>
        <div className="row mb-3">
          <label htmlFor="task" className="col-sm-2 col-form-label">
            Task
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="task"
              name="task"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="priority"
                name="priority"
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="priority">
                Oncelikli
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

//13:41de kadim
