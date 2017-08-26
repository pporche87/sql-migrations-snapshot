exports.up = (pgm, run) => {
  pgm.addColumn('users', {
    email: {
      type: 'varchar(255)',
      unique: true,
      notNull: true
    }
  })
  run()
}

exports.down = (pgm, run) => {
  pgm.dropColumn('users' [
    'email'
  ])
  run()
}
