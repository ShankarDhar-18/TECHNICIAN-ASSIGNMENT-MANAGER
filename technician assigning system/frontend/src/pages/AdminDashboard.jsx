import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [bookingRes, orderRes] = await Promise.all([
          axios.get("http://localhost:6500/api/bookings"),
          axios.get("http://localhost:6500/api/orders"),
        ]);
        setBookings(bookingRes.data);
        setOrders(orderRes.data);
      } catch (error) {
        console.error("❌ Error fetching admin dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const formatPaymentMode = (mode) => {
    return mode === "COD" ? "💰 Cash on Delivery" : "💳 Online Payment";
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h5>Loading admin dashboard...</h5>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📊 Admin Dashboard</h2>

      {/* 🛒 Spare Parts Orders Table */}
      <div className="mb-5">
        <h4 className="mb-3">🛒 Spare Parts Orders</h4>
        {orders.length === 0 ? (
          <p className="text-muted">No orders found.</p>
        ) : (
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Customer</th>
                <th>Items</th>
                <th>Address</th>
                <th>Phone</th>
                <th>WhatsApp</th>
                <th>Total</th>
                <th>Payment Mode</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx}>
                  <td>{order.user || "Unknown"}</td>
                  <td>
                    <ul className="pl-3 mb-0">
                      {order.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.address}</td>
                  <td>{order.phone}</td>
                  <td>{order.wp}</td>
                  <td>₹{order.total}</td>
                  <td>{formatPaymentMode(order.mode)}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 👷 Technician Bookings Table */}
      <div className="mb-5">
        <h4 className="mb-3">👷 Technician Bookings</h4>
        {bookings.length === 0 ? (
          <p className="text-muted">No bookings yet.</p>
        ) : (
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>User</th>
                <th>Technician Type</th>
                <th>Location</th>
                <th>Date</th>
                <th>Status</th> {/* ✅ Booking Status added */}
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, idx) => (
                <tr key={idx}>
                  <td>{b.name || "Unknown User"}</td>
                  <td>{b.technicianType || "Unknown Type"}</td>
                  <td>{b.location || "Unknown Location"}</td>
                  <td>{new Date(b.createdAt).toLocaleString()}</td>
                  <td>✔️ Confirmed</td>{" "}
                  {/* You can change this based on actual booking state */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
