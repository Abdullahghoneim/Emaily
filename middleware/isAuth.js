module.export = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You need to authenticate " });
  }
  next();
};
