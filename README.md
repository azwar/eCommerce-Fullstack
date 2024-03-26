# Welcome to My Fullstack Ecommerce Test!

Hi! I'm Azwar Akbar. Here is the test result for my assessment for Fullstack Dev position.
This project was built using **Typescript ExpressJS, TypeORM, NextJS, ReactJS**.

# How to run the project

There are **frontend** and **backend** folder project. Enter to the each directory using **cd frontend** or **cd backend**

## Run Backend

 1. Enter to backend directory: `cd backend`
 2. Create `.env` file. Just copy paste from file `.env.example`
 3. Complete the fields to match yout environtment configuration: 
PORT=3001  
POSTGRESQLDB_HOST=localhost  
POSTGRESQLDB_USER=  
POSTGRESQLDB_ROOT_PASSWORD=  
POSTGRESQLDB_DATABASE=ecommerce_db  
POSTGRESQLDB_LOCAL_PORT=5432  
POSTGRESQLDB_DOCKER_PORT=5432  
NODE_LOCAL_PORT=80  
NODE_DOCKER_PORT=3001  


Just skip the `DOCKER`  related variable. Make sure you have set the variable environtment corectly.
 5. Install dependencies: `npm install`
 6. Run database seed: `npm run seed` It will create intial data seed for Product and User.
 7. Run the project using dev mode: `npm run dev`
 8. Hit the API via URL: http://localhost:3001
 9. Check or run each funtion by reffering this Postman API Documentation: https://documenter.getpostman.com/view/1210810/2sA35D64Hc
 10. Done


## Run Frontend

 1. Enter to backend directory: `cd frontend`
 2. Create `.env` file. Just copy paste from file `.env.example`
 3. Complete the fields to match yout environtment configuration: 
 Make the frontend to point to our Backend API using this variable
> NEXT_PUBLIC_API_URL=http://localhost:3001
 5. Install dependencies: `npm install`
 6. Run project: `npm run dev`
 7. Hit the Frontend via URL: http://localhost:3000
 9. Done
