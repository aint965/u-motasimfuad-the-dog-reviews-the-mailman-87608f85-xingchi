import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. He comes to my gate every day, waves paper I can't eat, and the one time I finally caught his shoe he called ME the bad dog.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
