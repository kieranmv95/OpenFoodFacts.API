# OpenFoodFacts.API

A wrapper around the [Open Food Facts](https://world.openfoodfacts.org/) API. The OFF data is a bit inconsistent and this address some of the inconsistencies returning the most commonly uesd data.

## Running

Running in development mode

1. `$ npm i`
2. `$ npm run start dev`
3. App will running on PORT 3333

## Making a request

1. first get and EAN number. usea barcode scanner or go to [Open Food Facts](https://world.openfoodfacts.org/) and do a search
   - EAN and EPN numbers can be confused between US and UK products
2. make a GET request to `localhost:3333/[EAN number]`
