import "isomorphic-unfetch";
import nock from "nock";
import dotenv from "dotenv";
const httpAdapter =  require("axios/lib/adapters/http");
import axios from "axios";

dotenv.config({ path: ".env.test" });

axios.defaults.adapter = httpAdapter;

// @ts-ignore
afterAll(() => {
    nock.cleanAll();
    nock.restore();
});