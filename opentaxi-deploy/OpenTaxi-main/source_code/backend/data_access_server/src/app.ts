import express from "express";
import bodyParser from "body-parser";
import { BookingController } from "./controllers/booking_controller";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const bookingController = new BookingController();

app.post("/bookings", bookingController.createBooking);
app.get("/bookings/:id", bookingController.getBooking);
app.put("/bookings/:id", bookingController.updateBooking);
app.delete("/bookings/:id", bookingController.deleteBooking);
app.get("/bookings/:id/addresses", bookingController.getBookingAddresses);
app.post("/bookings/with-addresses", bookingController.createBookingWithAddresses);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});