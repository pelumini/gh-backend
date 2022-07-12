export default {
  port: 1337,
  origin: 'http://localhost:3000',
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mfnqe.azure.mongodb.net/backend`,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXzZerpx9qdaelwt1U7NCpWXQK
km1OW4ohDF/7g01xDtYf8Nox9wzhhVQrFD+G4eaJoWxIhJYQTgT4ijMlpjXs07Mc
wktcMX49h6Eoo6ZddOMl380UpivkaO+h80miG4JCFAM0G0pUoeNT8h6L9zHqr/yE
oBRd3RAsqxeCKwKrswIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: process.env.PRIVATE_KEY,
};
