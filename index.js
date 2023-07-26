// Code your solution in this file!

// Function to calculate the number of blocks from Scuber headquarters
function distanceFromHqInBlocks(pickup_location) {
    const hq_location = 42; // Scuber's headquarters on 42nd Street
    const distance_in_blocks = Math.abs(pickup_location - hq_location);
    return distance_in_blocks;
  }
  
  // Function to calculate the distance in feet from Scuber headquarters
  function distanceFromHqInFeet(pickup_location) {
    const feet_per_block = 264; // Each block in Manhattan is 264 feet long
    const distance_in_blocks = distanceFromHqInBlocks(pickup_location);
    const distance_in_feet = distance_in_blocks * feet_per_block;
    return distance_in_feet;
  }
  
  // Function to calculate the number of feet travelled between start and destination blocks
  function distanceTravelledInFeet(start_block, destination_block) {
    const feet_per_block = 264; // Each block in Manhattan is 264 feet long
    const distance_in_blocks = Math.abs(destination_block - start_block);
    const distance_in_feet = distance_in_blocks * feet_per_block;
    return distance_in_feet;
  }
  
  // Example usage:
  const pickup_location = 50;
  const distance_to_hq_blocks = distanceFromHqInBlocks(pickup_location);
  const distance_to_hq_feet = distanceFromHqInFeet(pickup_location);
  
  console.log(`Distance from HQ in blocks: ${distance_to_hq_blocks}`);
  console.log(`Distance from HQ in feet: ${distance_to_hq_feet}`);
  
  const start_block = 34;
  const destination_block = 38;
  const distance_travelled = distanceTravelledInFeet(start_block, destination_block);
  console.log(`Distance travelled in feet: ${distance_travelled}`);
  


