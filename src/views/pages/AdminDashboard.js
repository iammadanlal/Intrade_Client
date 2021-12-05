import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="h-screen">
      <div className="h-16"></div>
      <div className="flex" style={{ height: "calc(100% - 4rem)" }}>
        <div className="w-72">
          <div className="p-3">
            <Link to="/categories">
              <div className="shadow p-3 rounded-xl">Categories</div>
            </Link>
            <Link to="/new-registrations">
              <div className="shadow p-3 rounded-xl">New Companies</div>
            </Link>
            <Link to="/logout">
              <div className="shadow p-3 rounded-xl">Logout</div>
            </Link>
          </div>
        </div>
        <div className="shadow-inner w-full rounded-tl-3xl p-4">cjvbjbx</div>
      </div>
    </div>
  );
}
