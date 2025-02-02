export const allowedCancel = [1, 2, 3];
export const getStatusLabel = (status) => {
  switch (status) {
    case 1:
      return "Placed";
    case 2:
      return "Confirmed";
    case 3:
      return "Processing";
    case 4:
      return "Shipped";
    case 5:
      return "In Transit";
    case 6:
      return "Out For Delivery";
    case 7:
      return "Delivered";
    case 8:
      return "Canceled";
    case 9:
      return "Attempted Delivery";
    case 10:
      return "Lost";
    default:
      return "Unknown";
  }
};

export const getStatusColor = (status) => {
  switch (status) {
    case 1:
      return "bg-blue-100 text-blue-800"; // Placed
    case 2:
      return "bg-purple-100 text-purple-800"; // Confirmed
    case 3:
      return "bg-yellow-100 text-yellow-800"; // Processing
    case 4:
      return "bg-indigo-100 text-indigo-800"; // Shipped
    case 5:
      return "bg-cyan-100 text-cyan-800"; // In Transit
    case 6:
      return "bg-orange-100 text-orange-800"; // Out For Delivery
    case 7:
      return "bg-green-100 text-green-800"; // Delivered
    case 8:
      return "bg-red-100 text-red-800"; // Canceled
    case 9:
      return "bg-amber-100 text-amber-800"; // Attempted Delivery
    case 10:
      return "bg-gray-100 text-gray-800"; // Lost
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getPaymentMethod = (method) => {
  switch (method) {
    case 0:
      return "Cash on Delivery";
    case 1:
      return "Credit Card";
    default:
      return "Unknown";
  }
};
