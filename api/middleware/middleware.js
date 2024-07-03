const Users = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  const timestap = new Date().toISOString();
  console.log(`${req.method} ${req.url} ${timestap}`);
  next()
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const { id } = req.params;
    try {
        const user = await Users.getById(id);
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(404).json({
              message: `User ${id} not exists`
            })
        }
    } catch (err) {
        res.status(500).json({
          message: 'Fatal server error'
        })
    }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
}
