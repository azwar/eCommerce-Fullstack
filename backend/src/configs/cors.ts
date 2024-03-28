import {CorsOptions} from 'cors';

export const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL, // Allow requests from this origin
  methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT', // Allow only GET and POST requests
  allowedHeaders:
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  credentials: true,
};
