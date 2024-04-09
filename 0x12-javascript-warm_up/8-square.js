#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if ( process.argv[2] === undefined || isNaN(size)) {
  console.log('Missing size');
} else {
  while ( i < size){
    console.log('size'.repeat(size));
  }
}
