import React from "react";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-sm-center mt-5 bg-dark text-white">
        <div className="col-sm-8">
          <TaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
