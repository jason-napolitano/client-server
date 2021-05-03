export default {
  title: "My amazing Typescript + Express powered API!",
  corsOptions: {
    origin: [
      'http://localhost:8080',
      'http://localhost:5000'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }
}
