function climbingStairs(cost){                //defining the function 

    var steps = [];                           //indexing between arrays
    steps[0] = cost[0];
    steps[1] = cost[1];

    for (i = 2; i<cost.length; i++){
        steps[i] = cost[i] + Math.min(steps[i-1], steps[i-2]);  //formula as explained in the forum (dp[i]) for the -
    }                                                                       //- sum of the current step cost and the lowest cost from the previous two steps.
    var minimumCost = Math.min((steps[cost.length-1]), (steps[cost.length-2])); //finding the minimum cost from the step before the last step and last step.
    console.log(minimumCost);               //printing the minimum cost
}

//Calling the function and testing it out!
climbingStairs([0, 2, 2, 1]) 
climbingStairs([0, 2, 3, 2]) 
climbingStairs([10, 15, 20]) 
climbingStairs([0, 0, 0, 0, 0, 0])


