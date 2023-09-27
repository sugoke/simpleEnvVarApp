Meteor.startup(() => {
  const testEnvVar = process.env.TEST_ENV_VAR;
  console.log("Value of TEST_ENV_VAR:", testEnvVar);

  if (!testEnvVar) {
    console.log("TEST_ENV_VAR is not set or is undefined.");
  } else {
    console.log(`TEST_ENV_VAR is set to ${testEnvVar}`);
  }
});
