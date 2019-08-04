import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      Dashboad :
      <div className='fixed-action-btn'>
        <Link to='/survey/new' className='btn-floating btn-large red'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
}
