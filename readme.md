# Currency Exchange - Challenge
It's an API Challenge based on [Zan Franceschi's Twitter post](https://twitter.com/zanfranceschi/status/1548344242010869763).   

The main purpose of this API is to have an endpoint receiving a currency parameter and returning the best exchange value obtained from three different sources. Every source is different and has its own way of processing the server request.

- Exchange A: returns the value immediately;
- Exchange B: has a delay before return the value;
- Exchange C: has an asynchronous endpoint and send the value by a webhook.

Here is the [original repository](https://github.com/zanfranceschi/desafio-01-cotacoes) containing all requirements, some suggestions and another solutions (including another languages such as Dart and Kotlin).

## :memo: Diagram
![image](https://res.cloudinary.com/practicaldev/image/fetch/s--qdZevj59--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://pbs.twimg.com/media/FXzS4ZcUIAIF1v4%3Fformat%3Dpng%26name%3Dsmall)

## :office: Approach
I tried to use this challenge to practice some concepts, including automated tests and clean architecture. It's not the best reference for these subjects, althought it has managed to achieve my goals.  

This API was developed using:  
- Node
- Express
- Axios (to make requests)
- Jest (for testing)
- Node Events (to handle one of the async exchange services)

## :gear: How to use?
## Requeriments
- Docker and Docker Compose

## Install
```bash
git clone git@github.com:lucas-barbosa/currency-exchange.git
cd currency-exchange
docker-compose up
```
## Endpoint
### Find Best Exchange Value
It's the endpoint responsible for returning the best exchange value given a currency. You can make a request using your browser or any other tool, like curl, postman, insomnia and etc.

```bash
GET http://localhost:5000/cotacoes/:currency # currency can be BRL, USD, EUR and etc
```
