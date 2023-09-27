import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // Reading the environment variable
  const testEnvVar = process.env.TEST_ENV_VAR;

  // Logging the value to console
  console.log(`The value of TEST_ENV_VAR is: ${testEnvVar}`);
});
