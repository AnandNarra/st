// Array of driver objects
const DRIVERS = [
  { id: "D001", name: "Arjun", available: true },
  { id: "D002", name: "Meera", available: true },
  { id: "D003", name: "Rahul", available: false }
];

// Array of rider objects
const RIDERS = [
  { id: "R001", name: "Sundeeep", walletBalance: 1000 },
  { id: "R002", name: "Keerthi", walletBalance: 200 }
];

// Empty array to store ride objects
let RIDES = [];

// Save the ride and mark driver as unavailable
function saveRide(RIDES, RiderDetailes, DriversDetails) {
  DriversDetails.available = false;

  const rideRecord = {
    rider: RiderDetailes,
    driver: DriversDetails
  };

  RIDES.push(rideRecord);

  console.log("Saved Ride:", RIDES);
  return rideRecord;
}

// Create a ride object with unique ID
function createRide(RiderDetailes, DriversDetails, distance, fare) {
  const rideId = "RIDE_" + (RIDES.length + 1).toString().padStart(3, '0');

  const ride = {
    rideId,
    riderId: RiderDetailes.id,
    driverId: DriversDetails.id,
    distance,
    fare,
    status: "CONFIRMED"
  };

  console.log("Created Ride:", ride);
  return ride;
}

// Deduct fare from rider's wallet if possible
function processPayment(RiderDetailes, fare) {
  if (RiderDetailes.walletBalance >= fare) {
    RiderDetailes.walletBalance -= fare;
    console.log("Payment successful. Updated rider:", RiderDetailes);
    return RiderDetailes;
  } else {
    console.log("Payment failed: Insufficient balance");
    return null;
  }
}

// Calculate fare based on distance and rate
function calculateFare(distance, ratePerKm) {
  const fare = distance * ratePerKm;
  console.log("Calculated fare:", fare);
  return fare;
}

// Find the first available driver
function matchDriver(DriversDetails) {
  for (const driver of DriversDetails) {
    if (driver.available === true) {
      console.log("Matched Driver:", driver);
      return driver;
    }
  }
  console.log("No drivers available");
  return null;
}

// Handle the full ride request flow
function requestRide(riderId, distance) {
  console.log("Requesting ride for:", riderId, "Distance:", distance);

  const RiderDetailes = RIDERS.find(r => r.id === riderId);
  if (!RiderDetailes) {
    return { error: "Invalid Rider ID" };
  }

  const DriversDetails = matchDriver(DRIVERS);
  if (!DriversDetails) {
    return { error: "No drivers available" };
  }

  const fare = calculateFare(distance, 20);

  const paymentResult = processPayment(RiderDetailes, fare);
  if (!paymentResult) {
    return { error: "Insufficient wallet balance" };
  }

  const rideObj = createRide(RiderDetailes, DriversDetails, distance, fare);

  saveRide(RIDES, RiderDetailes, DriversDetails);

  return {
    message: "Ride Confirmed",
    rideDetails: rideObj,
    updatedRider: RiderDetailes,
    updatedDriver: DriversDetails
  };
}

// ✅ TEST CASE

const requestRide1 = requestRide("R001", 10);
console.log(requestRide1);
