import { Request, Response } from 'express';

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require("cors");
const router = require("router")
var http = require('http');

require("dotenv").config();

const app = express();
const port = 3010;
const path = require('path');

// ===== 프로젝트 기본 접속 환경 설정 ================================================================================================================ //

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'devubitoms_firesafe',
  port: 23306,
};

app.use(express.static('static')); // Server 프로젝트이므로 정적 페이지로 구성함.
app.set('json spaces', 2)

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve('../../index.html')); // 최초 로드할 메인 HTML페이지.
});

app.use(cors({
  origin: "*", // 외부에서 들어온 요청을 차단하지 않도록 수정함.
  credentials: true,
  optionsSuccessStatus: 200,
}));

/* ===== [END] 프로젝트 기본 접속 환경 설정 ===== */

// ============================================================================================================================================================= //
app.listen(port, () => {
  console.log(`hubsys running at http://localhost:${port}`);
});
