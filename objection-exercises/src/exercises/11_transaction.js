const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number is over 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */


  // -----
  cleanup()
}

run()
