
/**
 * Middleware to handle error thrown by nested async functions to be thrown to the express error handler.
 * All callbacks need to promisified in order for this to work.
 * @param {*} fn 
 */
module.exports = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };