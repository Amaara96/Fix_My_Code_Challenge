#!/usr/bin/node
  2 /*
  3     Print a square with the character #
  4
  5     The size of the square must be the first argument
  6     of the program.
  7 */
  8
  9
 10 if (process.argv.length <= 2) {
 11     process.stderr.write("Missing argument\n");
 12     process.stderr.write("Usage: ./1-print_square.js <size>\n");
 13     process.stderr.write("Example: ./1-print_square.js 8\n");
 14     process.exit(1)
 15 }
 16
 17 size = parseInt(process.argv[2], 10)
 18
 19 for (let i = 0 ; i < size ; i++) {
 20     for (let j = 0 ; j < size ; j++) {
 21         process.stdout.write("#");
 22     }
 23     process.stdout.write("\n");
-- INSERT --                           
