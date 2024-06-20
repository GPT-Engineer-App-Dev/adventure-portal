import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Select, Box, Alert, AlertIcon } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  const handleSearch = () => {
    // Mock search results
    const results = [
      { id: 1, airline: "Airline A", price: "$200", duration: "3h 45m" },
      { id: 2, airline: "Airline B", price: "$250", duration: "4h 15m" },
    ];
    setSearchResults(results);
  };

  const handleBook = (result) => {
    // Mock booking confirmation
    const confirmation = {
      type: "Flight",
      details: `Airline: ${result.airline}, Price: ${result.price}, Duration: ${result.duration}`,
      confirmationNumber: Math.floor(Math.random() * 1000000),
    };
    setBookingConfirmation(confirmation);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Search Flights</Heading>
        <FormControl id="departure-city">
          <FormLabel>Departure City</FormLabel>
          <Input type="text" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
        </FormControl>
        <FormControl id="destination-city">
          <FormLabel>Destination City</FormLabel>
          <Input type="text" value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" onClick={handleSearch}>Search Flights</Button>
      </VStack>
      {searchResults.length > 0 && (
        <Box mt={8} width="100%">
          <Heading as="h2" size="lg" mb={4}>Search Results</Heading>
          {searchResults.map((result) => (
            <Box key={result.id} p={4} borderWidth="1px" borderRadius="md" mb={4}>
              <p>Airline: {result.airline}</p>
              <p>Price: {result.price}</p>
              <p>Duration: {result.duration}</p>
              <Button colorScheme="teal" onClick={() => handleBook(result)}>Book</Button>
            </Box>
          ))}
        </Box>
      )}
      {bookingConfirmation && (
        <Alert status="success" mt={8}>
          <AlertIcon />
          <Box>
            <Heading as="h4" size="md">Booking Confirmation</Heading>
            <p>Type: {bookingConfirmation.type}</p>
            <p>Details: {bookingConfirmation.details}</p>
            <p>Confirmation Number: {bookingConfirmation.confirmationNumber}</p>
          </Box>
        </Alert>
      )}
    </Container>
  );
};

export default FlightSearch;