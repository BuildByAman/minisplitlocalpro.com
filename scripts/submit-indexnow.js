import statesData from "../data/states.js";
import servicesData from "../data/services.js";

const DOMAIN = "minisplitlocalpro.com";
const KEY = "e7f849b291034f71a0678d49281a94ef";
const KEY_LOCATION = `https://${DOMAIN}/${KEY}.txt`;

console.log("⚡ Gathering all URLs for Bing IndexNow Fast Indexing...\n");

const urls = [];

// 1. Core URLs
const corePaths = ["/", "/services/", "/about/", "/contact/", "/terms/", "/privacy-policy/"];
for (const p of corePaths) {
  urls.push(`https://${DOMAIN}${p}`);
}

// 2. Service single pages
for (const svc of servicesData) {
  urls.push(`https://${DOMAIN}/services/${svc.slug}/`);
}

// 3. States & Cities
for (const state of statesData) {
  urls.push(`https://${DOMAIN}/${state.slug}/`);
  if (state.cities && Array.isArray(state.cities)) {
    for (const city of state.cities) {
      urls.push(`https://${DOMAIN}/${state.slug}/${city.slug}/`);
    }
  }
}

console.log(`✅ Total URLs found: ${urls.length.toLocaleString()}`);

// Batch submission function (Max 10,000 URLs per request)
const BATCH_SIZE = 10000;
const batches = [];
for (let i = 0; i < urls.length; i += BATCH_SIZE) {
  batches.push(urls.slice(i, i + BATCH_SIZE));
}

console.log(`📦 Split into ${batches.length} batch(es) of max 10,000 URLs.\n`);

async function submitBatches() {
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`🚀 Submitting Batch ${i + 1}/${batches.length} (${batch.length} URLs) to Bing IndexNow...`);

    const payload = {
      host: DOMAIN,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch
    };

    try {
      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      console.log(`📡 Response Status: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`✅ Batch ${i + 1} accepted by Bing/IndexNow successfully!\n`);
      } else {
        const text = await response.text();
        console.warn(`⚠️ Batch ${i + 1} response body:`, text, "\n");
      }
    } catch (err) {
      console.error(`❌ Error submitting Batch ${i + 1}:`, err.message);
    }
  }

  console.log("🎉 All URLs submitted to Bing IndexNow!");
}

submitBatches();
