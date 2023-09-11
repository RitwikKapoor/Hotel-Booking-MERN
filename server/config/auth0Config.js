import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: process.env.AUDIENCE_API_IDENTIFIER,
  issuerBaseURL: process.env.BACKEND_ISSUE_BASE_URL,
  tokenSigningAlg: 'RS256',
});

export default jwtCheck;

