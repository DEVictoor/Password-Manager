## Getting started

### 1. Install dependencies

Install npm dependencies:

```console
# This line depends on what your cloned folder is called in my backend case
cd backend
npm install
```

### 2. Create .env file 

Create a file and renamed with .env in the root folder

```console
# Linux
touch .env

# Windows
ni .env
```

Then, edit the file like bellow

```
PSQL_USER=postgres
PSQL_PASSWORD=waggggg
PSQL_PORT=6666
PSQL_NETWORK=postgres

PGADMIN_EMAIL=devictormireles@gmail.com
PGADMIN_PASSWORD=wagggemail
PGADMIN_PORT=3006

URL_DBCONNECT=postgresql://${PSQL_USER}:${PSQL_PASSWORD}@localhost:${PSQL_PORT}/prismadb
```

This environment variables are be important because will be take for run containers

### 3. Run containers 

Run the followind command to run postgresql and pgadmin container 

```console 
docker compose up -d 
```

### 4. Create and seed the database

Run the following command to create your Postgresql database file. 

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. 


### 5. Start the REST API server

```
npm run dev
```

The server is now running on `http://localhost:3000`. You can now run the API requests, e.g. [`http://localhost:3000/feed`](http://localhost:3000/feed).

### Opcional: Connect database with PGAdmin

Step one: Set the PGAdmin password. Don't worry only first time.

![First Step Image](/assets/step-1.png)

Step two: Open option for create new connection.

![Second Step Image](/assets/step-2.png)

Step three: Fill fields of form. 

![Three Step Image](/assets/step-3.png)

Step Four: View tree of conection.

![Fourt Steop Image](/assets/step-4.png)

### 6. Stripe service 

Get secret key of stripe dashboard 

Set variable in file .env

```
# Example 
STRIPE_SECRET_KEY=blabalbalbalbalb
```

### 7. MercadoPago Service 


