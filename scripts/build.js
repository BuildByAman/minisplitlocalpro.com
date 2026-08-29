import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import statesData from "../data/states.js";

console.log("🚀 Starting Chunked Production Build...\n");

// Clean previous build directory to ensure a fresh build
const siteDir = path.join(process.cwd(), "_site");
if (fs.existsSync(siteDir)) {
    fs.rmSync(siteDir, { recursive: true, force: true });
}

const states = statesData.map(s => s.slug).sort();

console.log(`🏗️  BUILDING BASE PAGES...`);
let startTime = Date.now();
try {
    execSync(`node --max-old-space-size=6144 node_modules/@11ty/eleventy/cmd.cjs --quiet`, { 
        env: { ...process.env, BUILD_TYPE: "base" },
        stdio: "ignore" 
    });
    console.log(`✅ Base pages built in ${((Date.now() - startTime) / 1000).toFixed(2)} seconds.\n`);
} catch (error) {
    console.error(`❌ Build failed for Base Pages. Exiting.`);
    process.exit(1);
}

for (const stateCode of states) {
    process.stdout.write(`🏗️  Building state: ${stateCode.toUpperCase()}... `);
    let stateStart = Date.now();
    try {
        execSync(`node --max-old-space-size=6144 node_modules/@11ty/eleventy/cmd.cjs --quiet`, { 
            env: { ...process.env, BUILD_TYPE: "state", BUILD_STATE: stateCode },
            stdio: "ignore"
        });
        console.log(`✅ built in ${((Date.now() - stateStart) / 1000).toFixed(2)}s`);
    } catch (error) {
        console.error(`\n❌ Build failed for ${stateCode}. Exiting.`);
        process.exit(1);
    }
}

console.log("\n🎉 ALL STATES FINISHED SUCCESSFULLY!");
