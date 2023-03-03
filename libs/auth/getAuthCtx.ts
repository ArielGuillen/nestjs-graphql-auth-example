import env from 'config.env';
const jwt = require('jsonwebtoken');

export const getAuthCtx = (req) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, env.SECRET);
    return {
      user: decodedToken._id,
      public: false,
    };
  } catch (error) {
    return {
      user: null,
      public: true,
    };
  }
};
