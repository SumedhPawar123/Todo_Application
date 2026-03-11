const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    try {
      const userRole = req.user.role; // role comes from auth middleware

      if (!roles.includes(userRole)) {
        return res.status(403).json({
          message: "Access Denied: You do not have permission to access this resource",
        });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
};

module.exports = roleMiddleware;