import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

export const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));




console.log("Hello, World!");
