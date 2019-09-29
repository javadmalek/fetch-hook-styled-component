
# Task Functional Specs
Please implement a screen (preferably in react) that displays a collection of flights. Show them in a list (flight number, time etc). Finally, allow users to sort the list entries by time or airport name. You don't need to set up a backend, you can mock the call and modify the provided json.
Feel free to modify/update this data as you see fit, in order to achieve the requested task.

```
[
    {
        "segment_id": "07f77c9f-7fdf-446b-91d5-52e900f33723",
        "type": "FLIGHT",
        "origin": {
            "type": "AIRPORT",
            "value": "TXL"
        },
        "destination": {
            "type": "AIRPORT",
            "value": "MUC"
        },
        "departure": 1521602800,
        "detail": {
            "boarding": 1523601001,
            "flight_number": "LH2031",
            "gate": "C12",
            "seat": "12C"
        }
    }
]
```

# Pull requests
```
Ylu 4 css and layout -> closed
Ylu 3 adding sort -> closed
Ylu 2 adding all the functionalities -> closed
Ylu 1 setup project -> closed

Ylu 5 paginations and finalizing ->  open (load more, it isnot finished in 3 hours)

```


## Available Scripts

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
