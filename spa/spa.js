function createCustomer(name, bill, bookings = []) {
  return {
    name,
    bill,
    bookings
  }
}

function greeting(customer) {
  if (customer.bookings.length != 0) {
    return `${customer.name}! Welcome back to Happy Spa`
  } else {
    return `${customer.name}! Welcome to Happy Spa`
  }
}

function createService(serviceName, cost) {
  if (serviceName == undefined) {
    return 'Please provide service name and cost.'
  } else {
    return {
      name: serviceName,
      cost: cost
    }
  }
}

function bookServices(customer, service) {
  customer.bill += service.cost
  customer.bookings.push(service.name)
  return customer
}

function applyGiftCard(array, giftCardAmmount) {
  affordableServices = []
  array.forEach(service => {
    if (service.price <= giftCardAmmount) {
      affordableServices.push(service.name)
    }
  });
  return affordableServices
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
