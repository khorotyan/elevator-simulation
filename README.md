# Elevator Simulation
## Description

The project simulates how an effective elevator system would be based on number of elevators, floors, and information about each elevator and passenger movement. 

## Key Features

    Optimizing Elevator Assignment: Assigns elevators to passengers based on elevator direction, number of floors and number of stops based on passenger initial and target floors.
    Target Floor Movement Optimization: Every time a new passenger requests and elevator or enters, the movement plan of an elevator is updated.
    Real Time Updates: Passenger addition and elevator movement is updated real time.

## Project Structure

    /src:
        /components: react components for the user interface
        /hooks: use hooks instead of directly accessing Redux actions and selectors
        /modules: 
            /actions: dispatch actions to change state or to run redux sagas
            /reducers: handle state changes based on actions
            /sagas: workers and watchers to watch for some actions being dispatched and running asynchronous operations/calculations
            /selectors: get application data from the store
        /utils: utility functions
        App.tsx: combines all components 
    index.tsx: entry point

    Note: You will see 'application' inside modules. The app is using a modular approach to be able to expan if extra feature are added. Similarly we could have used 'passenger' and 'elevators' as separate modules.
    There are also no tests written at this point.

## Main Algorithms
### Optimizing Elevator Assignment

Penalty system is used to find the best matching elevator for each passenger request:

    Direction Penalty: Elevators moving towards passenger initial floor are preferred, and idle ones are next, and opposite direction ones are penalized very high.
    Distance Penalty: Elevators closer to passenger initial floor are prioritized.
    Number of Stops Penalty: Elevators with fewer stops to get to passenger and take them to target floor are prefered.

### Target Floor Movement Optimization

When a new floor is added:
    New floors are added into the existing list of target floors based on the current movement direction to minimize travel time.

### Elevator Movement

Elevators move based on their current direction and list of target floors:
    Elevators constantly move to their target floors and updating direction and status based on the movement and target floors constantly updated when changed.
    Passenger statuses are updated based on movement to mark them as in the elevator or remove them when reaching to the target floor.

### Visuals

    Statuses:
        'idle': the elevator has stopped movement
        'up': elevator going up
        'down': elevator going down
        'entering': a person is entering the elevator
        numbers: the numbers in theelevator table show the movement plan of the elevator 

## Installation

    git clone https://github.com/khorotyan/elevator-simulation.git
    cd elevator-simulation
    npm install
    npm start

The application can be tested with:
https://velevator.netlify.app/

Explanation videos: https://www.youtube.com/watch?v=zezdSE9wgco&list=PL1OgGclO2glehD2M40LJ0dHjzKXfjKqbM&index=5&ab_channel=VahagnKhorotyan