# City Population Service

A fast and efficient Node.js service that allows users to retrieve and set city populations by state and city.

## Getting Started

### Prerequisites

- Node.js v18
- npm

### Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/Sammy0807/Trazi_population_assessment.git
   ```

2. **Navigate to the Directory**:

   ```sh
   cd city_population_service
   ```

3. **Install Dependencies**:
   ```sh
   npm install
   ```

### Running the Service

Start the service by running:

```sh
npm start
```

The service will start on port `5555`.

## Usage

### Fetch City Population

To get the population of a city:

```
GET http://127.0.0.1:5555/api/population/state/:state/city/:city
```

Replace `:state` with the name of the state and `:city` with the name of the city.

Example:

```
GET http://127.0.0.1:5555/api/population/state/Alabama/city/Huntsville
```

### Set City Population

To set the population of a city:

```
PUT http://127.0.0.1:5555/api/population/state/:state/city/:city
```

Replace `:state` with the name of the state and `:city` with the name of the city. Send the new population value in the body as plain text.

Example:

```
PUT http://127.0.0.1:5555/api/population/state/Alabama/city/Huntsville
```

With a body of `200000`.

## Key Focus

- **Fast Response Time**: Optimized for low response times.
- **High Throughput**: Can handle a high number of concurrent requests/users.
- **Minimal 3rd Party Modules**: To maintain speed and efficiency.
- **Optimized JavaScript Code**: Making the most out of JavaScript's capabilities.
- **Structured Code**: Organized for ease of development and future expansion.

## License

Distributed under the MIT License. See `LICENSE` for more information.
