import {CorsOptions} from 'cors';

export const corsOptions: CorsOptions = {
  origin: 'https://frontend-azwar.vercel.app', // Allow requests from this origin
  methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT', // Allow only GET and POST requests
  allowedHeaders:
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  credentials: true,
};
