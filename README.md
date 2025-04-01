# Light Switch Program

This simple JavaScript script simulates checking whether a light is on based on whether it is daytime and if there is enough battery power.

## How It Works
- The script defines a boolean `isDay` to determine if it is daytime.
- The variable `isLightOn` is set to the opposite of `isDay`, meaning the light is on when it is nighttime.
- A `batteryLevel` variable represents the battery percentage.
- The script checks if everything is working (`isWorking`), meaning the light is on and the battery level is above 0.
- Outputs are logged to the console.

## Usage
1. Copy and paste the code into a JavaScript file, e.g., `status.js`.
2. Run the script using Node.js:
   ```sh
   node status.js
   ```
3. Observe the console output to see the status of the light and battery.

## Example Output
```
false
Daytime?
false
Lights on?
true
Battery level?
50%
Is everything working?
true
```

## Customization
- Change `isDay` to `true` or `false` to simulate different times of the day.
- Adjust `batteryLevel` to test different power levels.

