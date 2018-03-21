# Amora

The Amora website is an Angular application for the [Acerola](https://github.com/ivanpaulovich/acerola) and [Manga](https://github.com/ivanpaulovich/manga). It is a "working in progress project" and new features come every week. 

# Requirements
* [Angular](https://www.npmjs.com/package/angular)
* [Docker](https://docs.docker.com/docker-for-windows/install/)

# Running the latest Docker Build ![ivanpaulovich/amora](https://dockerbuildbadges.quelltext.eu/status.svg?organization=ivanpaulovich&repository=amora)

If you like to run a Docker container for this project use the latest image:

```
docker run -p 8001:80 -d \
	--name amora-frontend \
	ivanpaulovich/amora:latest
```
Then navigate to http://localhost:8001 and play with the App.

# Live Demo on Azure

You can play with the latest build by navigating to the [the Amora Website](http://grape.westus2.cloudapp.azure.com:8001 "Amora Website") and registering with your Security Social Number, Given name and your Initial Account balance.  

![Register Page](https://raw.githubusercontent.com/ivanpaulovich/amora/master/docs/register-page.png)

Then will be redirect to the account balance page where you can Deposit, Withdraw an Close your account.

![Account Balance](https://raw.githubusercontent.com/ivanpaulovich/amora/master/docs/customer-page.png)

> This source code and website should be used only for learning purposes and **all data will be erased weekly**.
