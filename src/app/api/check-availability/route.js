import { NextResponse } from "next/server";

// Static array (replace with database in production)
let bookedAppointments = [
  { date: "2025-07-01", time: "10:00 am" },
  { date: "2025-07-01", time: "12:00 pm" },
];

export async function POST(req) {
  try {
    const { date } = await req.json();
    if (!date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    // Filter booked slots for the given date
    const bookedTimes = bookedAppointments
      .filter((item) => item.date === date)
      .map((item) => item.time);

    return NextResponse.json({ bookedTimes });
  } catch (error) {
    console.error("Error in check-availability:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}